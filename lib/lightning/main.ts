import { P5CanvasInstance } from '@p5-wrapper/react';
import { selectColour, selectPalette } from './colours';
import { Particle } from './particle';

export interface Settings {
  backgroundColour: string;
  // This number controls the rate at which lines fade over time. A higher number
  // results in lines staying visible on the canvas for longer.
  fadeRate: number;
  hueInc: number;
  minMaxSpeed: number;
  maxMaxSpeed: number;
  minStrokeWeight: number;
  maxStrokeWeight: number;
  // Number of lines on the canvas
  particleCount: number;
  perlinScale: number;
  polarityThreshold: number;
  // Adjusts frame rate and size of pole. A higher number results in a faster
  // frame rate and larger square.
  scl: number;
}

export interface Dimensions {
  width: number;
  height: number;
  rows: number;
  cols: number;
  poleX: number;
  poleY: number;
  polePreciseX: number;
  polePreciseY: number;
  sclX: number;
  sclY: number;
}

export interface Point {
  xPos: number;
  yPos: number;
  perlinRow: number;
  perlinCol: number;
  attraction: number;
  pull: number;
}

export function calculateDimensions(
  settings: Settings,
  width: number,
  height: number
): Dimensions {
  const [cols, sclX] = rowcol(settings.scl, width);
  const [rows, sclY] = rowcol(settings.scl, height);

  // Pole is the origin point for all particles, set in the middle of the logo,
  // at the bottom of the canvas.
  const poleX = Math.ceil(cols / 2);
  const poleY = Math.ceil(rows) - 1;

  const polePreciseX = poleX * sclX - sclX / 2;
  const polePreciseY = poleY * sclY - sclY / 2;

  return {
    width,
    height,
    rows,
    cols,
    sclX,
    sclY,
    poleX,
    poleY,
    polePreciseX,
    polePreciseY,
  };
}

export function createPoints(
  p5: P5CanvasInstance,
  settings: Settings,
  dimensions: Dimensions
): Point[] {
  const poleStrength = dimensions.rows;
  const points: Point[] = [];

  for (let row = 0; row < dimensions.rows; row++) {
    const yPos = (dimensions.sclY * (2 * row + 1)) / 2;

    for (let col = 0; col < dimensions.cols; col++) {
      if (row !== dimensions.poleY - 1 || col !== dimensions.poleX - 1) {
        const [proximity, attraction] = proximityCheck(
          col,
          row,
          dimensions.poleX,
          dimensions.poleY
        );

        let pull = 0;
        if (proximity <= poleStrength) {
          pull =
            Math.sin(p5.map(proximity, 0, poleStrength, 0, p5.PI)) * Math.PI;
        }

        const i = row * dimensions.cols + col;
        points[i] = {
          xPos: (dimensions.sclX * (2 * col + 1)) / 2,
          yPos,
          perlinCol: col * settings.perlinScale,
          perlinRow: row * settings.perlinScale,
          attraction,
          pull,
        };
      }
    }
  }

  return points;
}

export function setup(
  p5: P5CanvasInstance,
  settings: Settings,
  particles: Particle[],
  dimensions: Dimensions
) {
  p5.createCanvas(dimensions.width, dimensions.height);
  p5.colorMode(p5.HSB, 100);

  let hueOff = 0;

  for (var i = 0; i < settings.particleCount; i++) {
    const polarityCheck = p5.random();
    let palette = selectPalette(p5.random());
    let maxSpeed = p5.random(settings.minMaxSpeed, settings.maxMaxSpeed);
    let instStrokeWidth = p5.random(
      settings.minStrokeWeight,
      settings.maxStrokeWeight
    );

    let polarityInst;
    let startX;
    let startY;
    if (polarityCheck < settings.polarityThreshold) {
      [startX, startY] = boundaryCondition(
        p5,
        settings.scl,
        dimensions.width,
        dimensions.height,
        dimensions.sclX,
        dimensions.sclY
      );
      polarityInst = 'attraction';
    } else {
      startX = dimensions.polePreciseX;
      startY = dimensions.polePreciseY;
      polarityInst = 'replusion';
    }

    const hueNoise = p5.noise(hueOff);
    particles[i] = new Particle(
      p5,
      selectColour(hueNoise, palette),
      polarityInst,
      startX,
      startY,
      maxSpeed,
      instStrokeWidth
    );
    hueOff += settings.hueInc;
  }

  p5.background(settings.backgroundColour);

  return particles;
}

export function draw(
  p5: P5CanvasInstance,
  settings: Settings,
  points: Point[],
  particles: Particle[],
  dimensions: Dimensions,
  counter: number,
  zoff: number
) {
  // Fade out old lines over time
  if (counter % settings.fadeRate === 0) {
    let backgroundRefresh = p5.color(settings.backgroundColour);
    backgroundRefresh.setAlpha(8);
    p5.push();
    p5.fill(backgroundRefresh);
    p5.noStroke();
    p5.rect(0, 0, dimensions.width, dimensions.height);
    p5.pop();

    // Reset counter so the number doesn't grow too far
    counter = 0;
  }

  for (const particle of particles) {
    particle.follow(
      points,
      dimensions.cols,
      dimensions.sclX,
      dimensions.sclY,
      zoff
    );
    particle.update();
    particle.show();
    particle.edges(
      dimensions.polePreciseX,
      dimensions.polePreciseY,
      dimensions.width,
      dimensions.height,
      dimensions.sclX,
      dimensions.sclY
    );
  }

  return [counter + 1, zoff + 0.000375];
}

function proximityCheck(
  col: number,
  row: number,
  poleX: number,
  poleY: number
) {
  const deltaX = col - poleX + 1;
  const deltaY = row - poleY + 1;
  const proximity = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  let attraction = Math.atan2(deltaY, deltaX);
  if (attraction < 0) {
    attraction += Math.PI * 2;
  }
  return [proximity, attraction];
}

function boundaryCondition(
  p5: P5CanvasInstance,
  scl: number,
  width: number,
  height: number,
  sclX: number,
  sclY: number
) {
  const resultantNoise = p5.random(1);
  const boundarySeed = Math.floor(p5.random(1, 4));

  switch (boundarySeed) {
    case 1:
      return [0, resultantNoise * height - sclY / 2];
    case 2:
      return [resultantNoise * width - sclX / 2, 0];
    case 3:
      return [width - scl / 2, resultantNoise * height - sclY / 2];
    case 4:
      return [resultantNoise * width - sclX / 2, height - scl / 2];
    default:
      return [0, 0];
  }
}

function rowcol(scl: number, dimension: number) {
  let rowcol = Math.round(dimension / scl);

  // To ensure pole is in the center we need an odd num
  if (rowcol % 2 === 0) {
    rowcol += 1;
  }

  return [rowcol, dimension / rowcol];
}
