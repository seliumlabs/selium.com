import { Blog } from '../../components/blog';
import { Container } from '../../components/container';
import { SiteHeader } from '../../components/site-header';
import { SiteFooter } from '../../components/site-footer';
import { BlogPost, getPost, getPosts, sortPosts } from '../../lib/blog';

export default function News({ posts }: { posts: BlogPost[] }) {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <SiteHeader />
      <Container>
        <h1>News</h1>
        <Blog basePath="news" posts={posts} />
      </Container>
      <SiteFooter />
    </main>
  );
}

export async function getStaticProps() {
  let files = (await getPosts('news')).sort(sortPosts);

  return {
    props: {
      posts: await Promise.all(files.map((file) => getPost(file))),
    },
  };
}
