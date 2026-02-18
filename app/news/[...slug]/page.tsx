import type { Metadata } from "next";
import Link from "next/link";
import defaultMdxComponents, { createRelativeLink } from "fumadocs-ui/mdx";
import CodeBlockSingleLine from "@/app/_shared/CodeBlockSingleLine";
import { newsSource } from "@/lib/news-source";
import Header from "@/app/_shared/header";
import Footer from "@/app/_shared/footer";
import "../news.css";

interface NewsPostPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

function formatDate(input: string): string {
  return new Date(input).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function MissingPost({ slug }: { slug: string[] }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/12 bg-[linear-gradient(145deg,rgba(30,41,59,0.8)_0%,rgba(15,23,42,0.62)_100%)] p-6 sm:p-8">
      <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.28),transparent_70%)] blur-2xl"></div>
      <p className="text-sm text-slate-400">
        <code>/news/{slug.join("/")}</code>
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Doh :(</h1>
      <p className="mt-3 text-slate-300">This article doesn't exist or has been archived.</p>
      <Link
        href="/news"
        className="mt-5 inline-flex items-center rounded-md border border-white/20 px-3 py-1.5 text-sm font-semibold text-white hover:border-white/50"
      >
        Back to News
      </Link>
    </section>
  );
}

export function generateStaticParams() {
  return newsSource.getPages().map((page) => ({ slug: page.slugs }));
}

export async function generateMetadata({ params }: NewsPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug.length !== 1) {
    return {
      title: "News Page Not Found - Selium News",
      description: "The requested Selium news page could not be found.",
    };
  }

  const page = newsSource.getPage(slug);
  if (!page) {
    return {
      title: "News Page Not Found - Selium News",
      description: "The requested Selium news page could not be found.",
    };
  }

  return {
    title: `${page.data.title} - Selium News`,
    description: page.data.description,
  };
}

async function Article({ params }: NewsPostPageProps) {
  const { slug } = await params;
  if (slug.length !== 1) {
    return <MissingPost slug={slug} />;
  }

  const page = newsSource.getPage(slug);
  if (!page) {
    return <MissingPost slug={slug} />;
  }

  const Content = page.data.body;
  const RelativeLink = createRelativeLink(newsSource, page);
  const components = {
    ...defaultMdxComponents,
    a: RelativeLink,
  };

  return (
    <article>
      <header className="relative overflow-hidden rounded-3xl border border-white/12 bg-[linear-gradient(145deg,rgba(30,41,59,0.86)_0%,rgba(15,23,42,0.72)_42%,rgba(15,23,42,0.4)_100%)] px-6 py-8 sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 translate-x-1/4 -translate-y-1/4 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.28),transparent_70%)] blur-2xl"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-52 -translate-x-1/4 translate-y-1/4 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.24),transparent_72%)] blur-2xl"></div>
        <nav aria-label="Breadcrumb" className="mb-5 flex gap-2 text-sm">
          <Link href="/news" className="font-semibold uppercase tracking-[0.2em] text-teal-300">
            Newsroom
          </Link>
          <span>/</span>
          <span className="text-slate-300">{page.data.title}</span>
        </nav>

        <p className="text-sm text-slate-400">
          {formatDate(page.data.date)} | {page.data.author}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {page.data.title}
        </h1>
        <p className="mt-4 text-lg text-slate-300">{page.data.description}</p>
      </header>
      <div className="news-content mt-8 px-6 sm:px-10">
        <Content components={components} />
      </div>
      <CodeBlockSingleLine />
    </article>
  );
}

export default async function Page({ params }: NewsPostPageProps) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gray-950 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-105 w-[min(45rem,100vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.2),transparent_65%)] blur-2xl"></div>
        <div className="absolute bottom-0 right-0 h-90 w-[min(22.5rem,100vw)] translate-x-0 sm:translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)] blur-2xl"></div>
      </div>
      <Header />
      <main className="mx-auto w-full max-w-5xl px-6 pt-28 pb-16">
        <Article params={params} />
      </main>
      <Footer />
    </div>
  );
}
