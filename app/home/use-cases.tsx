"use client";

import { useEffect, useState } from "react";
import {
  ArrowsRightLeftIcon,
  BoltIcon,
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon,
} from "@heroicons/react/20/solid";
import { createBundledHighlighter } from "shiki/core";
import { createOnigurumaEngine } from "@shikijs/engine-oniguruma";
import type { ThemedToken } from "shiki";
import Link from "next/link";
import { ForwardIcon, FunnelIcon } from "@heroicons/react/24/outline";
import { Heading } from "../page";

const SHIKI_THEME = "dracula-soft" as const;
const createHighlighter = createBundledHighlighter({
  langs: {
    rust: () => import("@shikijs/langs/rust"),
  },
  themes: {
    "dracula-soft": () => import("@shikijs/themes/dracula-soft"),
  },
  engine: () => createOnigurumaEngine(import("shiki/wasm")),
});

const useCases = [
  {
    name: "Data pipelines",
    description: "Process large data streams with backpressure and strict payload typing.",
    icon: ArrowsRightLeftIcon,
    file: "examples/data-pipeline/src/lib.rs",
    highlights: [
      "Native `Stream` + `Sink`",
      "Network plumbing is simple and predictable",
      "Backpressure is implicit",
    ],
    code: `const INGRESS: &str = "sel://example.org/data-pipelines/ingress";
const EVEN: &str = "sel://example.org/data-pipelines/even";

/// Generates data to be transformed by the pipeline
#[entrypoint]
async fn generator(ctx: Context) -> Result<()> {
    let switchboard: Switchboard = ctx.require().await;
    let atlas: Atlas = ctx.require().await;

    let mut publisher = Publisher::<i32>::create(&switchboard).await?;
    atlas
        .insert(Uri::parse(INGRESS).unwrap(), publisher.endpoint_id() as u64)
        .await?;

    // Emit a value every 0.5 seconds.
    let mut state: i32 = -1;
    loop {
        state = state.wrapping_mul(1_103_515_245).wrapping_add(12_345);
        publisher.send(state as i32).await?;
        time::sleep(Duration::from_millis(500)).await?;
    }
}

/// Doubles the input value
#[entrypoint]
async fn double(ctx: Context) -> Result<()> {
    let switchboard: Switchboard = ctx.require().await;
    let atlas: Atlas = ctx.require().await;

    let ingress = Subscriber::<i32>::create(&switchboard).await?;
    SubscriberAtlasExt::connect(&ingress, &atlas, &switchboard, INGRESS).await?;

    let egress = Publisher::<i32>::create(&switchboard).await?;
    PublisherAtlasExt::matching(&egress, &atlas, &switchboard, EVEN).await?;

    ingress.map_ok(|item| item * 2).forward(egress).await?;

    Ok(())
}

/// Adds 5u32 to the input value
#[entrypoint]
async fn add_five(ctx: Context) -> Result<()> {
    let switchboard: Switchboard = ctx.require().await;
    let atlas: Atlas = ctx.require().await;

    let ingress = Subscriber::<i32>::create(&switchboard).await?;
    SubscriberAtlasExt::connect(&ingress, &atlas, &switchboard, INGRESS).await?;

    let egress = Publisher::<i32>::create(&switchboard).await?;
    PublisherAtlasExt::matching(&egress, &atlas, &switchboard, EVEN).await?;

    ingress.map_ok(|item| item + 5).forward(egress).await?;

    Ok(())
}

/// Filters by even numbers
#[entrypoint]
async fn even(ctx: Context) -> Result<()> {
    let switchboard: Switchboard = ctx.require().await;
    let atlas: Atlas = ctx.require().await;

    let ingress = Subscriber::<i32>::create(&switchboard).await?;
    atlas
        .insert(Uri::parse(EVEN).unwrap(), ingress.endpoint_id() as u64)
        .await?;

    ingress
        .filter_map(|item| ready(item.ok()))
        .filter(|item| ready(item % 2 == 0))
        .for_each(|item| {
            info!("Found even number: {item}");
            ready(())
        })
        .await;

    Ok(())
}`,
  },
  {
    name: "Web proxying",
    description: "Spread busy connections across multiple workers trivially.",
    icon: ShieldCheckIcon,
    file: "examples/load-balancer/src/lib.rs",
    highlights: [
      "Round-robin message distribution",
      "Seamless guest async",
      "Automatic backpressure that propagates across sockets",
    ],
    code: `const CONCURRENT_REQUESTS: usize = 50;
const LB_URI: &str = "sel://example.org/web/prod/api";

#[entrypoint]
async fn load_balancer(ctx: Context, domain: &str, port: u16) -> Result<()> {
    let switchboard = ctx.require::<Switchboard>().await;
    let atlas = ctx.require::<Atlas>().await;

    let lb: Fanout<Connection> = Fanout::create(&switchboard).await?;
    atlas
        .insert(Uri::parse(LB_URI).unwrap(), lb.endpoint_id() as u64)
        .await?;

    let listener = HttpListener::bind(domain, port).await?;
    listener
        .incoming()
        .and_then(|mut conn| async move {
            conn.prepare_for_transfer().await?;
            Ok(conn)
        })
        .map_err(SwitchboardError::Driver)
        .forward(lb)
        .await?;

    Ok(())
}

#[entrypoint]
async fn conn_handler(ctx: Context) -> Result<()> {
    let switchboard = ctx.require::<Switchboard>().await;
    let atlas = ctx.require::<Atlas>().await;

    let requests: Subscriber<Connection> = Subscriber::create(&switchboard).await?;
    let lb = atlas
        .get(&Uri::parse(LB_URI).unwrap())
        .await?
        .context("load balancer endpoint not found")?;
    requests.connect(&switchboard, lb as u32).await?;

    requests
        .for_each_concurrent(CONCURRENT_REQUESTS, |result| async move {
            match result {
                Ok(conn) => handle_connection(conn).await,
                Err(err) => {
                    error!(error = ?err, "failed to receive connection");
                }
            }
        })
        .await;

    Ok(())
}`,
  },
  {
    name: "Log analysis",
    description: "Run out-of-band analysis on your log traffic in realtime.",
    icon: ChartBarIcon,
    file: "examples/log-analyser/src/lib.rs",
    highlights: [
      "Discover channels using Atlas patterns",
      "Aggregate multiple data streams",
      "Evaluate streams using a sliding window",
    ],
    code: `#[schema(
    path = "schemas/log.fbs",
    ty = "examples.log_analyser.Warning",
    binding = "crate::fbs::examples::log_analyser::Warning"
)]
struct Warning {
    message: String,
}

const ERR_THRESHOLD: usize = 10;
const WARN_THRESHOLD: usize = 50;

/// Aggregates log traffic matching source pattern
#[entrypoint]
async fn analyser(
    ctx: selium_userland::Context,
    pattern: &str,
    alert_uri: &str,
    window_time: u32,
) -> Result<()> {
    let switchboard: Switchboard = ctx.require().await;
    let atlas: Atlas = ctx.require().await;

    let subscriber = Subscriber::<LogRecord>::create(&switchboard).await?;

    // Connect subscriber to log publishers
    try_join_all(atlas.lookup(pattern).await?.into_iter().map(|id| {
        let chan = unsafe { SharedChannel::from_raw(id) };
        switchboard
            .adopt_output_channel::<LogRecord>(chan, Backpressure::Drop, AdoptMode::Tap)
            .and_then(|id| subscriber.connect(&switchboard, id))
    }))
    .await?;

    let alerts = Publisher::create_with_backpressure(&switchboard, Backpressure::Drop).await?;
    let alert_uri = Uri::parse(alert_uri).context("Alert URI is invalid")?;
    atlas.insert(alert_uri, alerts.endpoint_id() as u64).await?;

    if window_time == 0 {
        return Err(anyhow::anyhow!("Window time must be at least 1 second"));
    }

    subscriber
        .filter_map(|res| ready(res.ok()))
        .window(Duration::from_secs(u64::from(window_time)))
        .filter_map(|window| ready(analyse_window(window)))
        .map(Ok)
        .forward(alerts)
        .await?;

    Ok(())
}

fn analyse_window(window: Vec<LogRecord>) -> Option<Warning> {
    let mut errors = 0;
    let mut warnings = 0;
    for record in window {
        match record.level {
            LogLevel::Error => errors += 1,
            LogLevel::Warn => warnings += 1,
            _ => (),
        }
    }

    if errors > ERR_THRESHOLD {
        info!("{errors} errors observed in window");
        Some(Warning::new(format!("{errors} errors observed in window")))
    } else if warnings > WARN_THRESHOLD {
        info!("{warnings} warnings observed in window");
        Some(Warning::new(format!(
            "{warnings} warnings observed in window"
        )))
    } else {
        None
    }
}`,
  },
  {
    name: "Process orchestration",
    description: "Embed orchestration into your app and scale function-level services on demand.",
    icon: CogIcon,
    file: "examples/orchestrator/src/lib.rs",
    highlights: [
      "Composable process spawning",
      "Type safe argument passing, including channel handles, integers, and UTF-8 strings",
      "Execute both remote and local functions",
    ],
    code: `#[entrypoint]
async fn orchestrator(task_count: u32) -> Result<()> {
    // ...

    ProcessBuilder::new("path/to/module.wasm", "entrypoint_fn")
        // Set log URI
        .log_uri("sel://my/module/logs"))
        // Create the process environment
        .capability(Capability::ChannelLifecycle)
        .capability(Capability::ChannelWriter)
        .capability(Capability::TimeRead)
        // Set fn signature
        .signature(signature)
        // Pass in fn args matching signature
        .arg_resource(config_channel.raw())
        .arg_scalar(AbiScalarValue::U32(updates))
        .arg_scalar(AbiScalarValue::U32(interval_ms))
        // Spawn the process
        .start()
        .await
        .context("start config publisher")
}`,
  },
];

export default function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [highlightedCode, setHighlightedCode] = useState<ThemedToken[][][]>([]);

  useEffect(() => {
    let isMounted = true;

    const loadHighlighting = async () => {
      try {
        const highlighter = await createHighlighter({
          themes: [SHIKI_THEME],
          langs: ["rust"],
        });
        const highlighted = useCases.map((item) =>
          highlighter.codeToTokensBase(item.code, { lang: "rust", theme: SHIKI_THEME }),
        );

        if (isMounted) {
          setHighlightedCode(highlighted);
        }
      } catch (error) {
        console.error("Failed to load syntax highlighting", error);
      }
    };

    loadHighlighting();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="use-cases" className="flex mt-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <Heading
          colour="blue"
          tag="Use cases"
          heading="The code speaks for itself"
          blurb="Here's a taste of what Selium can do. Note that today we only support Rust, but further language support is coming very soon."
        />

        <div className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-[0_30px_80px_rgba(15,23,42,0.6)] md:h-full md:min-h-0">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-rose-400/90" />
              <span className="size-3 rounded-full bg-amber-400/90" />
              <span className="size-3 rounded-full bg-emerald-400/90" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              Selium Studio
            </div>
            <div className="text-xs text-slate-500"></div>
          </div>
          <div
            className="flex flex-wrap gap-2 border-b border-white/10 px-6 py-3"
            role="tablist"
            aria-label="Use case tabs"
          >
            {useCases.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.name}
                  id={`use-case-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`use-case-panel-${index}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                    isActive
                      ? "border-indigo-400/60 bg-indigo-500/20 text-white shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-white/30 hover:text-white"
                  }`}
                >
                  <item.icon className="size-4" aria-hidden="true" />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              );
            })}
          </div>
          <div className="min-w-0 p-6 md:flex-1 md:min-h-0">
            {useCases.map((item, index) => (
              <div
                key={item.name}
                id={`use-case-panel-${index}`}
                role="tabpanel"
                aria-labelledby={`use-case-tab-${index}`}
                className={
                  index === activeIndex
                    ? "grid min-w-0 gap-8 md:h-full md:min-h-0 lg:grid-cols-[280px_minmax(0,1fr)]"
                    : "hidden"
                }
              >
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
                      Active tab
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{item.name}</h3>
                    <p className="mt-3 text-sm text-slate-300">{item.description}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      Highlights
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-slate-200">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <span className="mt-2 size-1.5 rounded-full bg-indigo-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <Link
                      href={"https://github.com/seliumlabs/selium/tree/main/" + item.file}
                      className="text-blue-600 text-sm underline"
                    >
                      View on GitHub
                    </Link>
                  </div>
                </div>
                <div className="flex min-w-0 flex-col rounded-2xl border border-white/10 bg-slate-950/80 p-4 md:h-full md:min-h-0">
                  <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-slate-200">{item.file}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                      Rust
                    </span>
                  </div>
                  <div className="flex-1 min-h-0 min-w-0 md:max-h-[calc(100svh-20rem)] space-y-1 overflow-auto pr-2 font-mono text-sm">
                    {(highlightedCode[index] ?? item.code.split("\n")).map((line, lineIndex) => {
                      if (Array.isArray(line)) {
                        return (
                          <div
                            key={`${item.name}-line-${lineIndex}`}
                            className="flex gap-4 text-slate-100"
                          >
                            <span className="w-8 text-right text-xs text-slate-600">
                              {lineIndex + 1}
                            </span>
                            <span className="whitespace-pre">
                              {line.map((token, tokenIndex) => (
                                <span
                                  key={`${item.name}-token-${lineIndex}-${tokenIndex}`}
                                  style={{
                                    color: token.color,
                                    fontStyle:
                                      token.fontStyle && token.fontStyle & 1 ? "italic" : undefined,
                                    fontWeight:
                                      token.fontStyle && token.fontStyle & 2 ? 600 : undefined,
                                    textDecoration:
                                      token.fontStyle && token.fontStyle & 4
                                        ? "underline"
                                        : undefined,
                                  }}
                                >
                                  {token.content}
                                </span>
                              ))}
                            </span>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={`${item.name}-line-${lineIndex}`}
                          className="flex gap-4 text-slate-100"
                        >
                          <span className="w-8 text-right text-xs text-slate-600">
                            {lineIndex + 1}
                          </span>
                          <span className="whitespace-pre">{line}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
