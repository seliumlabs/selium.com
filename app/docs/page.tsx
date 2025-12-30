import Header from "../_shared/header";
import Footer from "../_shared/footer";

export default function DocsPage() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-24">
        <p className="text-sm font-semibold text-teal-400">Docs</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Selium documentation
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Docs render from Markdown at build time and will expand over the next releases.
        </p>
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-gray-300">
          Placeholder: provide the initial docs structure, Markdown sources, and nav hierarchy.
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
          <a href="/#get-started" className="text-teal-200 hover:text-white">
            Start locally
          </a>
          <a href="https://github.com/seliumlabs/selium" className="text-teal-200 hover:text-white">
            View the repo
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
