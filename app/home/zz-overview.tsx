"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { CloudArrowUpIcon, CodeBracketIcon, LockClosedIcon } from "@heroicons/react/20/solid";

const codeSample = `
#[entrypoint]
async fn echo_server() -> anyhow::Result<()> {
    let request_channel = Channel::create(32 * 1024).await?;
    let shared = request_channel.share().await?;
    tracing::info!(request_id = shared.raw(), "echo server ready");

    // subscribe(), decode request, attach response channel, publish() reply...
    Ok(())
}
`.trim();

const steps = [
  {
    title: "Write a service",
    description: "Rust functions become services with #[entrypoint] and typed Flatbuffers.",
    icon: CodeBracketIcon,
  },
  {
    title: "Compile to WASM",
    description: "Build to wasm32-unknown-unknown and ship a single portable module.",
    icon: CloudArrowUpIcon,
  },
  {
    title: "Run and orchestrate",
    description: "Launch services with selium-runtime and manage them with selium-cli.",
    icon: LockClosedIcon,
  },
];

export default function Overview() {
  const [activeTab, setActiveTab] = useState<"graph" | "code">("graph");

  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-10">
            <div>
              <p className="text-base font-semibold text-teal-400">How Selium works</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-white">
                Build services, not infrastructure
              </h2>
              <p className="mt-6 text-lg/8 text-gray-300">
                Selium is a channel-native compute fabric for WASM services. You write the code,
                Selium handles orchestration, messaging, and scaling.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">In three steps</p>
              <dl className="mt-4 space-y-4 text-sm text-gray-300">
                {steps.map((step) => (
                  <div key={step.title} className="relative pl-9">
                    <dt className="font-semibold text-white">
                      <step.icon
                        aria-hidden="true"
                        className="absolute top-1 left-0 size-5 text-teal-400"
                      />
                      {step.title}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-300">{step.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:hidden">
              <select
                value={activeTab}
                onChange={(event) => setActiveTab(event.target.value as "graph" | "code")}
                aria-label="Select view"
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-2 pr-8 pl-3 text-base text-gray-100 outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500"
              >
                <option key="graph" value="graph">
                  Graph
                </option>
                <option key="code" value="code">
                  Code
                </option>
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-400"
              />
            </div>

            <div className="hidden sm:block">
              <nav
                aria-label="Tabs"
                role="tablist"
                className="isolate flex divide-x divide-white/10 rounded-lg bg-gray-800/50 outline -outline-offset-1 outline-white/10"
              >
                {(["graph", "code"] as const).map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTab(tab)}
                      className={`${
                        isActive
                          ? "text-white"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      } ${tab === "graph" ? "rounded-l-lg" : "rounded-r-lg"} group relative min-w-0 flex-1 overflow-hidden px-4 py-4 text-center text-sm font-medium focus:z-10`}
                    >
                      <span className="capitalize">{tab}</span>
                      <span
                        aria-hidden="true"
                        className={`${
                          isActive ? "bg-teal-400" : "bg-transparent"
                        } absolute inset-x-0 bottom-0 h-0.5`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gray-900/70 p-6 shadow-[0_0_80px_rgba(45,212,191,0.15)]">
              {activeTab === "graph" ? (
                <div className="space-y-4">
                  <svg viewBox="0 0 640 360" role="img" aria-label="Selium service graph">
                    <defs>
                      <linearGradient id="nodeGlow" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <rect
                      x="10"
                      y="10"
                      width="620"
                      height="340"
                      rx="28"
                      fill="url(#nodeGlow)"
                      stroke="rgba(148,163,184,0.4)"
                    />
                    <line
                      x1="190"
                      y1="120"
                      x2="320"
                      y2="180"
                      stroke="rgba(148,163,184,0.6)"
                      strokeWidth="2"
                    />
                    <line
                      x1="320"
                      y1="180"
                      x2="450"
                      y2="240"
                      stroke="rgba(148,163,184,0.6)"
                      strokeWidth="2"
                    />
                    <line
                      x1="320"
                      y1="180"
                      x2="450"
                      y2="120"
                      stroke="rgba(148,163,184,0.6)"
                      strokeWidth="2"
                    />
                    <circle cx="190" cy="120" r="46" fill="rgba(59,130,246,0.35)" />
                    <circle
                      cx="320"
                      cy="180"
                      r="56"
                      fill="rgba(45,212,191,0.35)"
                      className="animate-pulse"
                    />
                    <circle cx="450" cy="120" r="42" fill="rgba(251,191,36,0.25)" />
                    <circle cx="450" cy="240" r="42" fill="rgba(236,72,153,0.2)" />
                    <text x="190" y="126" textAnchor="middle" fill="#e2e8f0" fontSize="14">
                      client
                    </text>
                    <text x="320" y="186" textAnchor="middle" fill="#e2e8f0" fontSize="14">
                      selium runtime
                    </text>
                    <text x="450" y="126" textAnchor="middle" fill="#e2e8f0" fontSize="14">
                      echo server
                    </text>
                    <text x="450" y="246" textAnchor="middle" fill="#e2e8f0" fontSize="14">
                      external I/O
                    </text>
                  </svg>
                  <div className="rounded-xl border border-white/10 bg-gray-950/70 px-4 py-3 text-xs text-gray-300">
                    Typed channels connect services. Capabilities gate every handle.
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Excerpt from examples/manual-rpc</span>
                    <span className="rounded-full border border-teal-400/40 px-2 py-0.5 text-teal-300">
                      reference snippet
                    </span>
                  </div>
                  <pre className="mt-4 overflow-x-auto rounded-xl bg-black/70 p-4 text-xs font-mono text-gray-100">
                    <code>{codeSample}</code>
                  </pre>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-400">
              TBC: add a full code walkthrough and link to the canonical example in the docs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
