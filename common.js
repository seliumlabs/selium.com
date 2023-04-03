
var violet = {
   name: "Violet",
   value:[87,63,34]
};

var indigo = {
   name: "Indigo",
   value:[77,97,49]
};

var orange = {
  name: "Orange",
  value:[7,77,99]
};

var shockingPink = {
  name: "Shocking Pink",
  value:[87,76,92]
};

var bittersweet = {
  name: "Bittersweet",
  value:[0,60,100]
};


var lapisLazuli = {
  name: "Lapis Lazuli",
  value:[56,65,49]
};

var carnationPink = {
  name: "Carnation Pink",
  value:[93,36,100]
};

var gamboge = {
  name: "Gamboge",
  value:[14,40,100]
};

var brightPink = {
  name: "Bright Pink",
  value:[94,63,96]
};

var turquoise = {
  name: "Turquoise",
  value: [49,100,88]
};

var flax = {
  name: "Flax",
  value: [18,36,90]
}

var chryslerBlue = {
  name: "Chrysler BLue",
  value: [75,96,81]
}

var mintGreen = {
  name: "Mint Green",
  value: [50,25,100]
}


var orchid = {
  name: "Orchid",
  value: [73,70,100]
}


var stock = {
  name: "Stock",
  value: [16,100,100]
}



var palette7 = [[violet,0.28],[indigo,0.36],[chryslerBlue,0.42],[orchid,0.45],[orange,0.48],[bittersweet,0.52],[brightPink,0.54],[shockingPink,0.58],[carnationPink,0.61],[gamboge,0.62],[flax,0.63],[mintGreen,0.69],[turquoise,0.8,'fullAlpha'],[lapisLazuli,1]];
var palette8 = [[violet,0.2],[indigo,0.3],[chryslerBlue,0.4],[orchid,0.5],[bittersweet,0.6],[carnationPink,0.75],[brightPink,1]];

var palette10 = [[chryslerBlue,0.5],[indigo,1]];

var paletteStock = [[stock,1]];



var palettes = [palette7,palette8,palette7];


function selectColor(noise,palette) {

  let choosenColor = "";
  let choosenAlpha = "default";
  for(var i=0; i<palette.length; i++) {
    if(noise<=palette[i][1]) {
      break
    }
  }
  if(palette[i][2]=="fullAlpha") {
    choosenAlpha = palette[i][2];
  }

  let shiftPolarity = Math.round(noise) * 2 - 1;;
  


  let hueShift = Math.round(palette[i][0].value[0] + (shiftPolarity*maxHueShift*random()));
  let saturationShift = Math.round(palette[i][0].value[1] + (shiftPolarity*maxSaturationShift*random()));
  let brightnessShift = Math.round(palette[i][0].value[2] + (shiftPolarity*maxBrightnessShift*random()));


  choosenColor = [[hueShift,saturationShift,brightnessShift],choosenAlpha];

  return choosenColor;
}


function selectPalette(noise,palettes) {
  let choosenPalette = "";
  let paletteKey = Math.floor(noise*palettes.length);

  choosenPalette = palettes[paletteKey];
  return choosenPalette;
}


function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;

    return Math.sqrt(x * x + y * y);
}

function spreadNoise(value,steps) {

}

function displayPalette(palette) {
  translate(32,32);
  var maxCols = 10;
  var colCounter = 0;
  var rowCounter = -1;
  console.log("hello Fred "+ palette.length);
  let swatchIncrementX = 120;
  let swatchIncrementY = 180;
  for(var i =0; i<palette.length; i++) {
    if(i%10==0) {
      colCounter=0;
      rowCounter++;
    }
    push();
      noFill();
      stroke("#eeeeee");
      rect(colCounter*swatchIncrementX,rowCounter*swatchIncrementY,swatchIncrementX-20,160);
    pop();
    push();
      colorMode(HSB,100);
      noStroke();
      fill(palette[i][0].value);
      translate(10,10);
      rect(colCounter*swatchIncrementX,rowCounter*swatchIncrementY,swatchIncrementX-40,swatchIncrementX-40);
    pop();
    push();
      translate(50,115);
      textAlign(CENTER);
      textSize(10.5);
      fill("#112222");
      textStyle(BOLD);
      text(palette[i][0].name.toUpperCase(),colCounter*swatchIncrementX,rowCounter*swatchIncrementY);
      fill("#667777");
      textStyle(NORMAL);
      text(palette[i][0].value,colCounter*swatchIncrementX,rowCounter*swatchIncrementY+20);
    pop();
    colCounter++;
  }
}
