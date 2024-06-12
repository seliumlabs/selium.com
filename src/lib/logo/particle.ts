import { P5CanvasInstance } from '@p5-wrapper/react';
import { Colour } from './colours';
import { Point } from './inverted';

export class Particle {
	private pos: any; // p5.Vector;
	private prevPos: any; //p5.Vector;
	private vel: any; //p5.Vector;
	private acc: any; //p5.Vector;

	constructor(
		private p5: P5CanvasInstance,
		private colour: Colour,
		private polarity: string,
		x: number,
		y: number,
		private maxspeed: number,
		private strokeWidth: number
	) {
		this.pos = p5.createVector(x, y);
		this.vel = p5.constructor.Vector.random2D();
		this.acc = p5.createVector(0, 0);
		this.prevPos = this.pos.copy();
	}

	update() {
		this.vel.add(this.acc);
		this.vel.limit(this.maxspeed);
		if (this.polarity == 'attraction') {
			this.pos.sub(this.vel);
		} else {
			this.pos.add(this.vel);
		}
		this.acc.mult(0);
	}

	follow(
		points: Point[],
		cols: number,
		sclX: number,
		sclY: number,
		zoff: number
	) {
		const x = Math.floor(this.pos.x / sclX);
		const y = Math.floor(this.pos.y / sclY);
		const index = x + y * cols;
		if (index in points) {
			const point = points[index];
			const noise = this.p5.noise(point.perlinCol, point.perlinRow, zoff);
			const deflection = this.p5.map(noise, 0, 1, -1, 1);
			const angle = point.attraction + point.pull * deflection;

			this.p5.push();
			this.p5.translate(point.xPos, point.yPos);
			this.acc.add(this.p5.constructor.Vector.fromAngle(angle));
			this.p5.pop();
		}
	}

	show() {
		let strokeAlpha = 200;
		if (this.colour.name === 'fullAlpha') {
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
		width: number,
		height: number,
		sclX: number,
		sclY: number
	) {
		const poleHeight = sclY / 2;
		const poleWidth = sclX / 2;

		if (
			this.pos.x >= polePreciseX - poleWidth &&
			this.pos.x <= polePreciseX + poleWidth &&
			this.pos.y >= polePreciseY - poleHeight &&
			this.pos.y <= polePreciseY + poleHeight
		) {
			this.polarity = 'replusion';
			this.updatePrev();
		}

		if (
			this.pos.x > width ||
			this.pos.x < 0 ||
			this.pos.y > height ||
			this.pos.y < 0
		) {
			this.polarity = 'attraction';
			let boundarySeed = Math.round(this.p5.random(1, 4));
			this.pos.x = 0;
			this.pos.y = 0;
			switch (boundarySeed) {
				case 1:
					this.pos.y = this.p5.random(0, height);
					break;

				case 2:
					this.pos.x = this.p5.random(0, width);
					break;

				case 3:
					this.pos.x = width;
					this.pos.y = this.p5.random(0, height);
					break;

				case 4:
					this.pos.x = this.p5.random(0, width);
					this.pos.y = height;
					break;
			}
			this.updatePrev();
		}
	}
}
