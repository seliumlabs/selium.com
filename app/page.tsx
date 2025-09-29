"use client";

import Header from "./_shared/header";
import Footer from "./_shared/footer";
import Hero from "./home/hero";
import Demo from "./home/demo";
import Workflow from "./home/intro";
import Features from "./home/features";
import AnimatedLogo from "./home/animated-logo";
import Design from "./home/design";

export default function Home() {
  return (
    <div className="absolute h-screen w-full overflow-y-scroll text-white bg-gray-950 snap-y snap-mandatory">
      {/*<AnimatedLogo />*/}
      <Header />
      <div className="z-10">
        <Hero />
        <Workflow />
        <Features />
        <Design />
        <Demo />
      </div>
      <Footer />
    </div>
  );
}
