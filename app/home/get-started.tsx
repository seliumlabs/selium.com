const commands = `
cargo run -p selium-runtime -- generate-certs --output-dir certs --server-name localhost
cargo build -p selium-module-remote-client --target wasm32-unknown-unknown
cargo run -p selium-runtime -- --domain localhost --port 7000
`.trim();

const steps = [
  {
    title: "Install prerequisites",
    detail: "Rust stable (edition 2024) and the wasm32-unknown-unknown target.",
  },
  {
    title: "Start the runtime",
    detail: "Generate local certs, build the remote client, and start selium-runtime.",
  },
  {
    title: "Launch a guest",
    detail: "Build a WASM module and run it with selium-cli.",
  },
];

export default function GetStarted() {
  return (
    <section id="get-started" className="flex h-screen snap-center">
      <div className="my-auto mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base/7 font-semibold text-emerald-300">Get started</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-white">
            Run Selium locally in minutes
          </h2>
          <p className="mt-6 text-lg/8 text-gray-300">
            Selium is currently alpha. These commands get you a local runtime and a working guest.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl gap-8 lg:max-w-none lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
              Alpha status: APIs and structure may change.
            </div>
            <ol className="space-y-4 text-sm text-gray-300">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full border border-white/20 text-xs text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{step.title}</p>
                    <p className="mt-1 text-sm text-gray-300">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300">
              <a href="/docs" className="text-emerald-200 hover:text-white">
                Docs at /docs
              </a>
              <a
                href="https://github.com/seliumlabs/selium"
                className="text-emerald-200 hover:text-white"
              >
                GitHub repo
              </a>
              <span className="text-amber-300">Placeholder: add community links.</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gray-900/70 p-6">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Quickstart (local runtime)</span>
              <span className="rounded-full border border-emerald-400/40 px-2 py-0.5 text-emerald-300">
                copy-ready
              </span>
            </div>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-black/70 p-4 text-xs font-mono text-gray-100">
              <code>{commands}</code>
            </pre>
            <p className="mt-4 text-xs text-gray-400">
              TBC: add the full walkthrough link and CLI examples for starting services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
