import { normalize } from 'path';
import { serializeMarkdown, slugify, stripMdxExtension } from '../mdx-utils';
import { readFile, readdir } from 'fs/promises';
import matter from 'gray-matter';

export const CONTENT_PATH = normalize(
  `${process.cwd()}/src/content/getting-started`
);

const contentPath = (slug: string) => normalize(`${CONTENT_PATH}/${slug}.mdx`);

export const getContent = async (slug: string) => {
  const { content, data } = await getMarkdownData(contentPath(slug));
  const source = await serializeMarkdown(content, data);

  return {
    slug,
    source,
    content,
    data,
    title: (data.title ?? slug) as string,
    description: (data.description ?? null) as string | null,
  };
};

export type Content = Awaited<ReturnType<typeof getContent>>;

export async function getContentSlugs() {
  const entries = await readdir(CONTENT_PATH, { withFileTypes: true });
  return entries
    .filter((entry) => !entry.name.startsWith('index') && entry.isFile())
    .map(({ name }) => slugify(stripMdxExtension(name)))
    .sort();
}

export const generateToc = async (activeSlug: string) => {
  const contentList = await getContentList();
  return contentList.map(({ title, slug }) => ({
    href: `/docs/get-started/${slug}`,
    label: title,
    isActive: slug === activeSlug,
  }));
};

export const getGettingStartedPageList = async () => {
  const slugs = await getContentSlugs();
  const list = await Promise.all(
    slugs.map((slug) =>
      getMarkdownData(contentPath(slug)).then(({ data }) => ({
        order: (data.order as number | null) || 100,
        title: (data?.title ?? slug) as string,
        description: (data.description ?? null) as string | null,
        slug,
      }))
    )
  );
  return list.sort((a, b) => a.order - b.order);
};

export async function getMarkdownData(filePath: string) {
  const fileContents = await readFile(filePath, { encoding: 'utf8' });
  return matter(fileContents);
}

export async function getContentList() {
  const slugs = await getContentSlugs();
  const list = await Promise.all(
    slugs.map((slug) =>
      getMarkdownData(contentPath(slug)).then(({ data }) => ({
        order: (data.order as number | null) || 100,
        title: (data?.title ?? slug) as string,
        description: (data.description ?? null) as string | null,
        slug,
      }))
    )
  );
  return list.sort((a, b) => a.order - b.order);
}
