export interface Colour {
  name: string;
  value: [number, number, number];
}

type Palette = [Colour, number][];

const violet: Colour = {
  name: "Violet",
  value: [87, 63, 34],
};

const indigo: Colour = {
  name: "Indigo",
  value: [77, 97, 49],
};

const orange: Colour = {
  name: "Orange",
  value: [7, 77, 99],
};

const shockingPink: Colour = {
  name: "Shocking Pink",
  value: [87, 76, 92],
};

const bittersweet: Colour = {
  name: "Bittersweet",
  value: [0, 60, 100],
};

const lapisLazuli: Colour = {
  name: "Lapis Lazuli",
  value: [56, 65, 49],
};

const carnationPink: Colour = {
  name: "Carnation Pink",
  value: [93, 36, 100],
};

const gamboge: Colour = {
  name: "Gamboge",
  value: [14, 40, 100],
};

const brightPink: Colour = {
  name: "Bright Pink",
  value: [94, 63, 96],
};

const turquoise: Colour = {
  name: "Turquoise",
  value: [49, 100, 88],
};

const flax: Colour = {
  name: "Flax",
  value: [18, 36, 90],
};

const chryslerBlue: Colour = {
  name: "Chrysler BLue",
  value: [75, 96, 81],
};

const mintGreen: Colour = {
  name: "Mint Green",
  value: [50, 25, 100],
};

const orchid: Colour = {
  name: "Orchid",
  value: [73, 70, 100],
};

// const stock: Colour = {
// 	name: 'Stock',
// 	value: [16, 100, 100],
// };

const multicolour: Palette = [
  [violet, 0.28],
  [indigo, 0.36],
  [chryslerBlue, 0.42],
  [orchid, 0.45],
  [orange, 0.48],
  [bittersweet, 0.52],
  [brightPink, 0.54],
  [shockingPink, 0.58],
  [carnationPink, 0.61],
  [gamboge, 0.62],
  [flax, 0.63],
  [mintGreen, 0.69],
  [turquoise, 0.8],
  [lapisLazuli, 1],
];

const pinks: Palette = [
  [violet, 0.2],
  [indigo, 0.3],
  [chryslerBlue, 0.4],
  [orchid, 0.5],
  [bittersweet, 0.6],
  [carnationPink, 0.75],
  [brightPink, 1],
];

const blues: Palette = [
  [chryslerBlue, 0.5],
  [indigo, 1],
];

const light: Palette = [
  [shockingPink, 0.58],
  [violet, 0.2],
  [indigo, 0.3],
  [chryslerBlue, 0.4],
  [orchid, 0.5],
  [bittersweet, 0.6],
  [brightPink, 0.75],
  [bittersweet, 0.6],
  [carnationPink, 1],
];

const PALETTES: Palette[] = [light];

export function selectColour(noise: number, palette: Palette): Colour {
  let chosenAlpha = "default";
  for (var i = 0; i < palette.length; i++) {
    if (noise <= palette[i][1]) {
      break;
    }
  }

  if (palette[i][1] === 0.8) {
    chosenAlpha = "fullAlpha";
  }

  let shiftPolarity = Math.round(noise) * 2 - 1;

  const maxHueShift = 2;
  let hueShift = Math.round(palette[i][0].value[0] + shiftPolarity * maxHueShift * Math.random());

  const maxSaturationShift = 10;
  let saturationShift = Math.round(
    palette[i][0].value[1] + shiftPolarity * maxSaturationShift * Math.random(),
  );

  const maxBrightnessShift = 10;
  let brightnessShift = Math.round(
    palette[i][0].value[2] + shiftPolarity * maxBrightnessShift * Math.random(),
  );

  return {
    name: chosenAlpha,
    value: [hueShift, saturationShift, brightnessShift],
  };
}

export function selectPalette(noise: number) {
  let paletteKey = Math.floor(noise * PALETTES.length);
  return PALETTES[paletteKey];
}
