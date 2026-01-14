"use client";

import Header from "./_shared/header";
import Footer from "./_shared/footer";
import Hero from "./home/hero";
import Demo from "./home/demo";
import Features from "./home/features";
import Design from "./home/design";
import Overview from "./home/overview";
import UseCases from "./home/use-cases";
import GetStarted from "./home/get-started";
import Designed from "./home/designed";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-950 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-105 w-180 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.2),transparent_65%)] blur-2xl"></div>
        <div className="absolute bottom-0 right-0 h-90 w-90 translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)] blur-2xl"></div>
      </div>
      {/*<AnimatedLogo />*/}
      <Header />
      <main className="relative z-10">
        <Hero />
        <Designed />
        <Overview />
        <Features />
        <Design />
        <UseCases />
        <GetStarted />
        {/*<Demo />*/}
      </main>
      <Footer />
    </div>
  );
}
