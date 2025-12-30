import { P5CanvasInstance } from "@p5-wrapper/react";
import { Colour } from "./colours";
import { Point } from "./main";
import type p5 from "p5";

export class Particle {
  private pos: p5.Vector;
  private prevPos: p5.Vector;
  private vel: p5.Vector;
  private acc: p5.Vector;

  constructor(
    private p5: P5CanvasInstance,
    private colour: Colour,
    private polarity: string,
    x: number,
    y: number,
    private maxspeed: number,
    private strokeWidth: number,
  ) {
    this.pos = p5.createVector(x, y);
    const angle = this.p5.random(this.p5.TWO_PI);
    this.vel = this.p5.createVector(Math.cos(angle), Math.sin(angle));
    // this.vel = this.p5.createVector(1, 0);
    this.acc = p5.createVector(0, 0);
    this.prevPos = this.pos.copy();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    if (this.polarity == "attraction") {
      this.pos.sub(this.vel);
    } else {
      this.pos.add(this.vel);
    }
    this.acc.mult(0);
  }

  follow(points: Point[], cols: number, sclX: number, sclY: number) {
    const x = Math.floor(this.pos.x / sclX);
    const y = Math.floor(this.pos.y / sclY);
    const index = x + y * cols;
    if (index in points) {
      const point = points[index];
      const noise = this.p5.noise(point.perlinCol, point.perlinRow);
      const deflection = this.p5.map(noise, 0, 1, -1, 1);
      const angle = point.attraction + point.pull * deflection;
      const force = this.p5.createVector(Math.cos(angle), Math.sin(angle));

      this.p5.push();
      this.p5.translate(point.xPos, point.yPos);
      this.acc.add(force);
      this.p5.pop();
    }
  }

  show() {
    let strokeAlpha = 200;
    if (this.colour.name === "fullAlpha") {
      strokeAlpha = 255;
    }
    if (this.strokeWidth === 1.5) {
      strokeAlpha = 235;
    }
    let strokeColor = this.p5.color(...this.colour.value);
    strokeColor.setAlpha(strokeAlpha);
    this.p5.push();
    this.p5.stroke(strokeColor);
    this.p5.strokeWeight(this.strokeWidth);
    this.p5.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.p5.pop();
    this.updatePrev();
  }

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges(
    polePreciseX: number,
    polePreciseY: number,
    pole2PreciseX: number,
    pole2PreciseY: number,
    width: number,
    height: number,
    sclX: number,
    sclY: number,
  ) {
    const poleHeight = sclY / 2;
    const poleWidth = sclX / 2;

    if (
      this.pos.x >= polePreciseX - poleWidth &&
      this.pos.x <= polePreciseX + poleWidth &&
      this.pos.y >= polePreciseY - poleHeight &&
      this.pos.y <= polePreciseY + poleHeight
    ) {
      this.polarity = "replusion";
      this.updatePrev();
    }

    if (
      this.pos.x >= pole2PreciseX - poleWidth &&
      this.pos.x <= pole2PreciseX + poleWidth &&
      this.pos.y >= pole2PreciseY - poleHeight &&
      this.pos.y <= pole2PreciseY + poleHeight
    ) {
      this.polarity = "attraction";
      this.updatePrev();
    }
  }
}
