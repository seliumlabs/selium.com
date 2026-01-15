"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    id: "1",
    title: "Placeholder headline one",
    body: "Placeholder copy for the first story beat. Replace with the opening narrative you want.",
    imageLabel: "Placeholder image 01",
  },
  {
    id: "2",
    title: "Placeholder headline two",
    body: "Placeholder copy for the second story beat. Replace with the transition you want to tell.",
    imageLabel: "Placeholder image 02",
  },
  {
    id: "3",
    title: "Placeholder headline three",
    body: "Placeholder copy for the third story beat. Replace with the detail you want to emphasize.",
    imageLabel: "Placeholder image 03",
  },
  {
    id: "4",
    title: "Placeholder headline four",
    body: "Placeholder copy for the final story beat. Replace with the closing point you want to land.",
    imageLabel: "Placeholder image 04",
  },
];

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={
      "rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur " +
      "transition-all " +
      className
    }
  >
    {children}
  </div>
);

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export default function Features() {
  const [activeStep, setActiveStep] = useState(steps[0]?.id ?? "1");
  const stepsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stepElements = Array.from(
      stepsRef.current?.querySelectorAll<HTMLElement>("[data-step]") ?? [],
    );
    if (!stepElements.length) return;

    const setVisibleStep = (stepEl?: Element | null) => {
      if (!stepEl) return;
      const step = (stepEl as HTMLElement).dataset.step;
      if (step) setActiveStep(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleStep(entry.target);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    stepElements.forEach((step) => observer.observe(step));

    const setInitialStep = () => {
      const visible = stepElements.find((step) => {
        const rect = step.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight * 0.6;
      });
      if (visible) setVisibleStep(visible);
    };

    setInitialStep();
    window.addEventListener("load", setInitialStep);

    return () => {
      observer.disconnect();
      window.removeEventListener("load", setInitialStep);
    };
  }, []);

  return (
    <section id="features" className="flex h-screen snap-start overflow-hidden">
      <div className="mx-auto max-w-6xl pt-28 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base/7 font-semibold text-amber-300">Designed for developers</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-white">
            A composable, clusterable, extensible hypervisor
          </h2>
          <p className="mt-6 text-lg/8 text-gray-300 text-balance">
            Selium is a first-principles rethink of the cloud, designed explicitly for software
            developers. Take back ownership of the runtime without any DevOps.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="relative">
            <div className="sticky top-24">
              <div className="relative aspect-4/3 w-full">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    aria-hidden={activeStep !== step.id}
                    className={classNames(
                      "absolute inset-0 flex items-center justify-center rounded-3xl border border-white/10",
                      "bg-linear-to-br from-white/10 via-white/5 to-transparent text-white/80",
                      "shadow-lg transition-opacity duration-500",
                      activeStep === step.id ? "opacity-100" : "opacity-0",
                    )}
                  >
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                        Placeholder image
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">{step.imageLabel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={stepsRef} className="space-y-8">
            {steps.map((step, index) => (
              <article key={step.id} data-step={step.id} className="step">
                <Card
                  className={classNames(
                    "transition-colors",
                    activeStep === step.id ? "border-amber-400/50 bg-white/10" : "border-white/10",
                  )}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/70">
                    Block {index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-300">{step.body}</p>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
