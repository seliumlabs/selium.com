import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import defaultMdxComponents, { createRelativeLink } from "fumadocs-ui/mdx";
import { docsSource } from "@/lib/docs-source";

interface DocsPageProps {
  params: {
    slug?: string[];
  };
}

export function generateStaticParams() {
  return docsSource.getPages().map((page) => ({ slug: page.slugs }));
}

export function generateMetadata({ params }: DocsPageProps): Metadata {
  const page = docsSource.getPage(params.slug);
  if (!page) {
    return {};
  }

  return {
    title: `${page.data.title} - Selium Docs`,
    description: page.data.description,
  };
}

export default function DocsSlugPage({ params }: DocsPageProps) {
  const page = docsSource.getPage(params.slug);
  if (!page) {
    notFound();
  }

  const Content = page.data.body;
  const RelativeLink = createRelativeLink(docsSource, page);
  const components = {
    ...defaultMdxComponents,
    a: RelativeLink,
  };

  return (
    <DocsLayout
      tree={docsSource.pageTree}
      nav={{ enabled: false }}
      githubUrl="https://github.com/seliumlabs/selium"
      themeSwitch={{ enabled: false }}
      searchToggle={{ enabled: false }}
    >
      <DocsPage toc={page.data.toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <Content components={components} />
        </DocsBody>
      </DocsPage>
    </DocsLayout>
  );
}
