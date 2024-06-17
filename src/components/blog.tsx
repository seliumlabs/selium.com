import { BlogPost } from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';

export const Blog = ({
  basePath,
  posts,
}: {
  basePath: string;
  posts: BlogPost[];
}) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {posts.map((post) => (
        <div key={post.slug}>
          <Link href={`/${basePath}/${post.slug}`}>
            <Image
              src={`/images/${basePath}/${post.slug}/thumbnail.png`}
              alt="Post thumbnail"
              width="200"
              height="200"
            />
          </Link>
          <strong>{post.title}</strong>
          <br />
          {post.author}
        </div>
      ))}
    </div>
  );
};
