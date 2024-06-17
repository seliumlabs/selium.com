import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Container } from '../../components/container';
import { SiteHeader } from '../../components/site-header';
import { SiteFooter } from '../../components/site-footer';
import { BlogPost, getPost, getPosts, resolveSlug } from '@/lib/blog';
import { useMDXComponents } from '@/mdx-components';
import Link from 'next/link';

export default function Post({
  mdx,
  post,
}: {
  mdx: MDXRemoteSerializeResult;
  post: BlogPost;
}) {
  const date = new Date(post.date);

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <SiteHeader />
      <Container>
        <Link href="/news">Back to News</Link>

        <h1>{post.title}</h1>
        <div className="mb-10 text-gray-500">
          {post.author} ({post.role})
          <br />
          {date.toLocaleString('default', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </div>

        <div className="flex flex-col gap-4">
          <MDXRemote {...mdx} components={useMDXComponents({})} />
        </div>
      </Container>
      <SiteFooter />
    </main>
  );
}

export async function getStaticPaths() {
  const paths = (await getPosts('/news')).map((name) =>
    // Remove date string and file extension
    name.replace(/\/[0-9]{4}(?:-[0-9]{2}){2}-(.+)\.[a-z]{3}$/, '/$1')
  );
  return { paths, fallback: false };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await resolveSlug('news', slug).then(getPost);
  const mdx = await serialize(post.content);
  return { props: { mdx, post } };
}
