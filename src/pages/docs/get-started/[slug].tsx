// import { GetStaticProps } from 'next';
// import { MdxLayout, TocItem } from '@/components/mdx-layout';
// import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
// import {
//   Content,
//   generateToc,
//   getContent,
//   getGettingStartedPageList,
// } from '@/lib/mdx/get-started';

// export async function getStaticPaths() {
//   const content = await getGettingStartedPageList();
//   return {
//     paths: content.map(({ slug }) => ({
//       params: { slug },
//     })),
//     fallback: false,
//   };
// }

// export const getStaticProps: GetStaticProps<
//   PageProps,
//   { slug: string }
// > = async ({ params }) => {
//   const { slug } = params ?? {};

//   if (!slug) {
//     return { notFound: true };
//   }

//   const document = await getContent(slug);
//   const toc = await generateToc(slug);

//   if (!document) {
//     return { notFound: true };
//   }

//   return {
//     props: {
//       document,
//       toc,
//     },
//   };
// };

// type PageProps = {
//   toc: TocItem[];
//   document: Content;
// };

// export default function Page({ document, toc }: PageProps) {
//   return (
//     <MdxLayout toc={toc}>
//       <MDXRemote {...document.source} />
//     </MdxLayout>
//   );
// }
