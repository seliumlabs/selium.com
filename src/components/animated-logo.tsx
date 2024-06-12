import React from 'react';
import { type Sketch } from '@p5-wrapper/react';
import { NextReactP5Wrapper } from '@p5-wrapper/next';
import {
	Settings,
	calculateDimensions,
	createPoints,
	draw,
	setup,
} from '@/lib/logo/inverted';
import { Particle } from '@/lib/logo/particle';
import styles from './animated-logo.module.css';

const sketch: Sketch = (p5: any) => {
	const settings: Settings = {
		backgroundColour: '#ffffff',
		fadeRate: 8,
		hueInc: 0.025,
		minMaxSpeed: 1.5,
		maxMaxSpeed: 2.25,
		minStrokeWeight: 0.75,
		maxStrokeWeight: 1.5,
		particleCount: 1000,
		perlinScale: 0.0375,
		polarityThreshold: 0.5,
		scl: 15,
	};
	const dimensions = calculateDimensions(settings, 1024, 500);
	const points = createPoints(p5, settings, dimensions);
	const particles: Particle[] = [];
	let counter = 0;
	let zoff = 0;

	p5.setup = () => setup(p5, settings, particles, dimensions);
	p5.draw = () =>
		([counter, zoff] = draw(
			p5,
			settings,
			points,
			particles,
			dimensions,
			counter,
			zoff
		));
};

export const AnimatedLogo = () => {
	return (
		<div id={styles['logoHolder']}>
			<NextReactP5Wrapper sketch={sketch} />
		</div>
	);
};
