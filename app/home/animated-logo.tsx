import dynamic from "next/dynamic";
import { P5CanvasInstance } from "@p5-wrapper/react";
import { Settings, calculateDimensions, createPoints, draw, setup } from "@/lib/lightning/main";
import { Particle } from "@/lib/lightning/particle";

const NextReactP5Wrapper = dynamic(async () => (await import("@p5-wrapper/react")).ReactP5Wrapper, {
  ssr: false,
});

function sketch(p5: P5CanvasInstance) {
  p5.remove();

  let backgroundColour = "#030712";

  const settings: Settings = {
    backgroundColour,
    fadeRate: 30,
    hueInc: 0.025,
    minMaxSpeed: 1.5,
    maxMaxSpeed: 2.25,
    minStrokeWeight: 0.75,
    maxStrokeWeight: 1.5,
    particleCount: 100,
    perlinScale: 0.0375,
    polarityThreshold: 0.5,
    scl: 2,
  };
  const dimensions = calculateDimensions(settings, window.innerWidth!, window.innerHeight!);
  const points = createPoints(p5, settings, dimensions);
  const particles: Particle[] = [];
  let counter = 0;
  let zoff = 0;

  p5.setup = () => setup(p5, settings, particles, dimensions);
  p5.draw = () =>
    ([counter, zoff] = draw(p5, settings, points, particles, dimensions, counter, zoff));
}

export default function AnimatedLogo() {
  return (
    <div className="absolute">
      <NextReactP5Wrapper sketch={sketch} />
    </div>
  );
}
