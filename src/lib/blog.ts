import { readFile, readdir } from 'fs/promises';
import matter from 'gray-matter';

const DATE_MATCHER = /\/([0-9]{4}(?:-[0-9]{2}){2})/;

export interface BlogPost {
  title: string;
  author: string;
  role: string;
  date: string;
  slug: string;
  content: string;
}

export async function getPosts(path: string): Promise<string[]> {
  return (await readdir(`src/${path}`))
    .filter((name) => name !== 'index.mdx')
    .map((name) => `${path}/${name}`);
}

export async function getPost(path: string): Promise<BlogPost> {
  const file = await readFile(`src/${path}`);
  const meta = matter(file);
  return {
    title: meta.data.title,
    author: meta.data.author,
    role: meta.data.role,
    date: meta.data.date.toString(),
    slug: toSlug(meta.data.title),
    content: meta.content,
  };
}

export async function resolveSlug(dir: string, slug: string): Promise<string> {
  const matcher = new RegExp(`${dir}/[0-9]{4}(-[0-9]{2}){2}-${slug}.mdx`);
  return (await getPosts(dir)).find((path) => matcher.test(path))!;
}

export function sortPosts(a: string, b: string) {
  let date = a.match(DATE_MATCHER) || [];
  const ad = new Date(date[1]);

  date = b.match(DATE_MATCHER) || [];
  const bd = new Date(date[1]);

  if (ad < bd) {
    return 1;
  } else if (ad > bd) {
    return -1;
  } else {
    return 0;
  }
}

function toSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove all non-word characters
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}
