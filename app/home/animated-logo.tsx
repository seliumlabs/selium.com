import dynamic from "next/dynamic";
import { P5CanvasInstance } from "@p5-wrapper/react";
import { Settings, calculateDimensions, createPoints, draw, setup } from "@/lib/lightning/main";
import { Particle } from "@/lib/lightning/particle";

export const NextReactP5Wrapper = dynamic(
  async () => (await import("@p5-wrapper/react")).P5Canvas,
  { ssr: false },
);

function sketch(p5: P5CanvasInstance) {
  p5.remove();

  let styles = getComputedStyle(document.documentElement);
  let backgroundColour = styles.getPropertyValue("--color-gray-950");

  const settings: Settings = {
    backgroundColour,
    fadeRate: 20,
    hueInc: 0.025,
    minMaxSpeed: 1.5,
    maxMaxSpeed: 2.25,
    minStrokeWeight: 0.75,
    maxStrokeWeight: 1.5,
    particleCount: 100,
    perlinScale: 0.0375,
    polarityThreshold: 0.5,
    scl: 10,
  };
  const dimensions = calculateDimensions(settings, 600, 600); // window.innerWidth!, window.innerHeight!);
  console.log(dimensions);
  const points = createPoints(p5, settings, dimensions);
  console.log(points);
  const particles: Particle[] = [];
  let counter = 0;

  p5.setup = () => setup(p5, settings, particles, dimensions);
  p5.draw = () => (counter = draw(p5, settings, points, particles, dimensions, counter));
}

export default function AnimatedLogo() {
  return (
    <div className="absolute">
      <NextReactP5Wrapper sketch={sketch} />
    </div>
  );
}
