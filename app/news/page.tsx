import type { Metadata } from "next";
import Link from "next/link";
import { newsSource } from "@/lib/news-source";
import Header from "../_shared/header";
import Footer from "../_shared/footer";
import "./news.css";

export const metadata: Metadata = {
  title: "Selium News",
  description: "Product updates, release notes, and engineering announcements from Selium.",
};

function formatDate(input: string): string {
  return new Date(input).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Posts() {
  const posts = newsSource
    .getPages()
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return (
    <div className="relative">
      <header className="relative overflow-hidden rounded-3xl border border-white/12 bg-[linear-gradient(140deg,rgba(30,41,59,0.85)_0%,rgba(15,23,42,0.72)_45%,rgba(15,23,42,0.36)_100%)] px-6 py-8 sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.3),transparent_70%)] blur-2xl"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(125,211,252,0.22),transparent_72%)] blur-2xl"></div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Newsroom</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Selium News
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
          Release updates, deep dives, and ecosystem announcements.
        </p>
      </header>

      <section className="mt-10 px-6 sm:px-10">
        {posts.map((post, index) => {
          const slug = post.slugs.join("/");

          return (
            <div key={post.url}>
              {index > 0 ? <hr className="w-4/5 text-slate-500/40" /> : null}
              <article className="py-6">
                <p className="text-sm text-slate-400">{formatDate(post.data.date)}</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{post.data.title}</h2>
                <p className="mt-2 text-base text-slate-300">{post.data.description}</p>
                <p className="mt-3 text-sm text-slate-400">By {post.data.author}</p>
                <Link
                  href={`/news/${slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal-300 hover:text-teal-200"
                >
                  Read post <span>{"->"}</span>
                </Link>
              </article>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default function Page() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gray-950 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-105 w-[min(45rem,100vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.2),transparent_65%)] blur-2xl"></div>
        <div className="absolute bottom-0 right-0 h-90 w-[min(22.5rem,100vw)] translate-x-0 sm:translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)] blur-2xl"></div>
      </div>
      <Header />
      <main className="mx-auto w-full max-w-5xl px-6 pt-28 pb-16">
        <Posts />
      </main>
      <Footer />
    </div>
  );
}
