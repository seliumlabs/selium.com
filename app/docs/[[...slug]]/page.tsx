import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import defaultMdxComponents, { createRelativeLink } from "fumadocs-ui/mdx";
import { docsSource } from "@/lib/docs-source";
import CodeBlockSingleLine from "@/app/_shared/CodeBlockSingleLine";

interface DocsPageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export function generateStaticParams() {
  return docsSource.getPages().map((page) => ({ slug: page.slugs }));
}

export async function generateMetadata({ params }: DocsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = docsSource.getPage(slug);
  if (!page) {
    return {};
  }

  return {
    title: `${page.data.title} - Selium Docs`,
    description: page.data.description,
  };
}

export default async function DocsSlugPage({ params }: DocsPageProps) {
  const { slug } = await params;
  const page = docsSource.getPage(slug);
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
          <CodeBlockSingleLine />
        </DocsBody>
      </DocsPage>
    </DocsLayout>
  );
}
