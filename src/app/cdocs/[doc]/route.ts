import OutsetaApiClient from 'outseta-api-client';
import { EntityType } from 'outseta-api-client/dist/models/shared/entity-type';
import { env } from 'process';

export async function GET(
  _: Request,
  { params }: { params: Promise<{ doc: string }> }
) {
  const subdomain = env.OUTSETA_SUBDOMAIN;
  const apiKey = env.OUTSETA_KEY;
  const apiSecret = env.OUTSETA_SECRET;
  const downloadUrl = env.DOWNLOAD_URL;

  if (
    subdomain === undefined ||
    apiKey === undefined ||
    apiSecret === undefined ||
    downloadUrl === undefined
  ) {
    console.error('Missing environment vars for cdocs');
    return new Response('Server error', { status: 500 });
  }

  const outseta = new OutsetaApiClient({
    subdomain: subdomain,
    apiKey: apiKey,
    secretKey: apiSecret,
  });
  let customerId;
  let filename;
  const args = await params;

  // Parse path slug to retrieve customerId and filename
  try {
    [customerId, filename] = parseSlug(args.doc);
  } catch (e) {
    console.error(`Invalid path slug: ${args.doc}`);
    return new Response('Page not found', { status: 404 });
  }

  // Log opening of document with Outseta
  const activity = await outseta.crm.activities.add({
    EntityType: EntityType.Person,
    EntityUid: customerId,
    Title: `Opened tracked document: ${filename}`,
    Description: `Opened tracked document: ${filename}`,
  });

  // Assume that any error is due to an invalid customer ID
  if ('ErrorMessage' in activity) {
    console.error(`Invalid cdoc customer: ${customerId}`);
    return new Response('Page not found', { status: 404 });
  }

  // Retrieve document from Digital Ocean
  const response = await fetch(`${downloadUrl}/${filename}`);
  if (!response.ok) {
    console.error(
      `Invalid cdoc filename for customer ${customerId}: ${filename}`
    );
    return new Response('Page not found', { status: 404 });
  }

  return new Response(response.body, {
    status: 200,
    headers: {
      'Content-Type': response.headers.get('Content-Type')!,
      'Content-Disposition': `attachment; filename=${filename}`,
    },
  });
}

function parseSlug(slug: string): [string, string] {
  const matches = slug.match(/^([a-zA-Z0-9]{8,})-(.+)$/);

  if (matches === null || matches.length !== 3) {
    throw new Error('Invalid slug');
  }

  return [matches[1], matches[2]];
}
