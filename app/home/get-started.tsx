"use client";

import { useEffect, useState } from "react";
import { CheckIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import { createBundledHighlighter } from "shiki/core";
import { createOnigurumaEngine } from "@shikijs/engine-oniguruma";
import type { ThemedToken } from "shiki";

const SHIKI_THEME = "dracula-soft" as const;
const createHighlighter = createBundledHighlighter({
  langs: {
    bash: () => import("@shikijs/langs/bash"),
  },
  themes: {
    "dracula-soft": () => import("@shikijs/themes/dracula-soft"),
  },
  engine: () => createOnigurumaEngine(import("shiki/wasm")),
});

const sections = [
  {
    title: "1. Install Selium using the helper script",
    code: `curl --proto '=https' --tlsv1.2 -sSfL https://selium.com/install.sh | sh`,
  },
  {
    title: "2. Or, install Selium from source",
    code: `# See README.md for instructions: https://github.com/seliumlabs/selium`,
  },
  {
    title: "3. Start the Selium runtime",
    code: `selium-runtime \\
    --module 'path=selium_remote_client_server.wasm;capabilities=ChannelLifecycle,ChannelReader,ChannelWriter,ProcessLifecycle,NetQuicBind,NetQuicAccept,NetQuicRead,NetQuicWrite;args=utf8:localhost,u16:7000' \\
    --module 'path=selium_switchboard_server.wasm;capabilities=ChannelLifecycle,ChannelReader,ChannelWriter,SingletonRegistry' \\
    --module 'path=selium_atlas_server.wasm;capabilities=ChannelLifecycle,ChannelReader,ChannelWriter,SingletonRegistry' &`,
  },
  {
    title: "5. Test that everything works",
    code: "selium ps",
  },
];

export default function GetStarted() {
  const [highlightedSections, setHighlightedSections] = useState<ThemedToken[][][]>([]);
  const [openIndex, setOpenIndex] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadHighlighting = async () => {
      try {
        const highlighter = await createHighlighter({
          themes: [SHIKI_THEME],
          langs: ["bash"],
        });
        const highlighted = sections.map((section) =>
          highlighter.codeToTokensBase(section.code, {
            lang: "bash",
            theme: SHIKI_THEME,
          }),
        );

        if (isMounted) {
          setHighlightedSections(highlighted);
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

  useEffect(() => {
    if (copiedIndex === null) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setCopiedIndex(null);
    }, 1500);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [copiedIndex]);

  return (
    <section id="get-started" className="flex h-screen snap-start pt-20">
      <div className="my-auto mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base/7 font-semibold text-emerald-300">Get started</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-white">
            Run Selium locally in minutes
          </h2>
          <p className="mt-6 text-lg/8 text-gray-300">
            These commands get you a local runtime, and CLI, so you can start building in minutes.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl gap-8 lg:max-w-none lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-2xl border border-white/10 bg-gray-900/70 p-6">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Quickstart (local runtime)</span>
            </div>
            <div className="w-6xl mt-4 mx-auto overflow-x-auto space-y-3">
              {sections.map((section, sectionIndex) => {
                const highlighted = highlightedSections[sectionIndex];
                const isOpen = sectionIndex === openIndex;

                return (
                  <div
                    key={section.title}
                    className="rounded-xl border border-white/10 bg-black/60"
                  >
                    <div
                      id={`get-started-accordion-${sectionIndex}`}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isOpen}
                      aria-controls={`get-started-panel-${sectionIndex}`}
                      onClick={() =>
                        setOpenIndex((current) =>
                          current === sectionIndex ? current : sectionIndex,
                        )
                      }
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setOpenIndex((current) =>
                            current === sectionIndex ? current : sectionIndex,
                          );
                        }
                      }}
                      className="flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-semibold text-emerald-100"
                    >
                      <span className="flex-1">{section.title}</span>
                      <button
                        type="button"
                        onClick={async (event) => {
                          event.stopPropagation();
                          try {
                            await navigator.clipboard.writeText(section.code);
                            setCopiedIndex(sectionIndex);
                          } catch (error) {
                            console.error("Failed to copy commands", error);
                          }
                        }}
                        aria-label={
                          copiedIndex === sectionIndex
                            ? "Copied commands to clipboard"
                            : "Copy commands to clipboard"
                        }
                        className="group flex cursor-pointer items-center justify-center rounded-full p-2 text-emerald-200 transition hover:text-emerald-100 active:text-emerald-50"
                      >
                        <span className="relative size-6">
                          <ClipboardIcon
                            className={`absolute inset-0 size-6 transition-all duration-200 ${
                              copiedIndex === sectionIndex
                                ? "scale-90 opacity-0"
                                : "scale-100 opacity-100"
                            }`}
                            aria-hidden="true"
                          />
                          <CheckIcon
                            className={`absolute inset-0 size-6 transition-all duration-200 ${
                              copiedIndex === sectionIndex
                                ? "scale-100 opacity-100"
                                : "scale-90 opacity-0"
                            }`}
                            aria-hidden="true"
                          />
                        </span>
                      </button>
                    </div>
                    <div
                      id={`get-started-panel-${sectionIndex}`}
                      role="region"
                      aria-labelledby={`get-started-accordion-${sectionIndex}`}
                      className={`overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out ${
                        isOpen
                          ? "max-h-180 translate-y-0 opacity-100"
                          : "max-h-0 -translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="px-4 pb-4 pt-2">
                        <pre className="overflow-x-auto rounded-lg bg-black/70 p-4 text-xs font-mono text-gray-100">
                          <code className="whitespace-pre">
                            {highlighted
                              ? highlighted.map((line, lineIndex) => (
                                  <span key={`command-${sectionIndex}-line-${lineIndex}`}>
                                    {line.map((token, tokenIndex) => (
                                      <span
                                        key={`command-${sectionIndex}-token-${lineIndex}-${tokenIndex}`}
                                        style={{
                                          color: token.color,
                                          fontStyle:
                                            token.fontStyle && token.fontStyle & 1
                                              ? "italic"
                                              : undefined,
                                          fontWeight:
                                            token.fontStyle && token.fontStyle & 2
                                              ? 600
                                              : undefined,
                                          textDecoration:
                                            token.fontStyle && token.fontStyle & 4
                                              ? "underline"
                                              : undefined,
                                        }}
                                      >
                                        {token.content}
                                      </span>
                                    ))}
                                    {lineIndex === highlighted.length - 1 ? null : "\n"}
                                  </span>
                                ))
                              : section.code}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
