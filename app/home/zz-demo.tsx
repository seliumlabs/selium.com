export default function Demo() {
  return (
    <section id="demo" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white px-6 py-16 text-gray-900 shadow-2xl sm:px-12">
          <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight sm:text-5xl">
            Live demo coming soon
          </h2>
          <p className="mt-5 text-center text-base text-gray-700">
            We are preparing a hosted demo. For day one, the best way to explore Selium is running
            it locally.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#get-started"
              className="rounded-md border border-gray-900 bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Run locally
            </a>
            <a
              href="/docs"
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100"
            >
              Read the docs
            </a>
          </div>
          <p className="mt-6 text-center text-xs text-amber-600">
            Placeholder: confirm the timeline and sign-up flow for the hosted demo.
          </p>
        </div>
      </div>
    </section>
  );
}
