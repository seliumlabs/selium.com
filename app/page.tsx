"use client";

import Header from "./_shared/header";
import Footer from "./_shared/footer";
import Hero from "./home/hero";
import Features from "./home/features";
import Security from "./home/security";
import UseCases from "./home/use-cases";
import GetStarted from "./home/get-started";

const HEADING_COLOURS = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  pink: "text-pink-400",
  slate: "text-slate-400",
  gray: "text-gray-400",
  teal: "text-teal-400",
  emerald: "text-emerald-400",
  sky: "text-sky-400",
  violet: "text-violet-400",
} as const;

type HeadingColour = keyof typeof HEADING_COLOURS;

type HeadingProps = {
  colour: HeadingColour;
  tag: string;
  heading: string;
  blurb: string;
};

export function Heading({ colour, tag, heading, blurb }: HeadingProps) {
  const colourClass = HEADING_COLOURS[colour];

  return (
    <>
      <hr className={`${colourClass} mx-auto w-full max-w-3xl`} />
      <div className="mx-auto max-w-3xl text-center">
        <p className={`text-base/7 font-semibold ${colourClass}`}>{tag}</p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-white">
          {heading}
        </h2>
        <p className="mt-6 text-lg/8 text-gray-300 text-balance">{blurb}</p>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gray-950 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-105 w-[min(45rem,100vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.2),transparent_65%)] blur-2xl"></div>
        <div className="absolute bottom-0 right-0 h-90 w-[min(22.5rem,100vw)] translate-x-0 sm:translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)] blur-2xl"></div>
      </div>
      {/*<AnimatedLogo />*/}
      <Header />
      <main className="relative z-10">
        <Hero />
        <Features />
        <UseCases />
        <Security />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}
