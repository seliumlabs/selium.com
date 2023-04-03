var scl = 15;
var boundingRadius = 36*scl;
var boundingRadiusTolerance = 2*scl;
var rows, cols, sclX, sclY, poleHeight, poleWidth;
var inc = 0.0375;
var zinc = 0.000375;
var zoff = 0;
var pole = [];
var poleStrength = 0;

var particles = [];
var particleCount = 1000;
//particleCount = 500;
var flowField;
var backgroundColor = '#170322';
var backgroundRefreshRate = 8;
var counter = 0;
var poleRadius = scl/2;
var polePositionPrecise = [];
var poleColor1;
var poleColor2;
var poleColor3;
var refreshCounter = 0;
var maxDeflection = Math.PI;
var minMaxSpeed = 1.5;
var maxMaxSpeed = 2.25;
var minStrokeWeight = 0.75;
var maxStrokeWeight = 1.5;
var polarityThreshold = 0.5;
var h = document.getElementById('logoHolder').offsetHeight;
var w = document.getElementById('logoHolder').offsetWidth;

if(w<=720) {
  particleCount = 600;
  minMaxSpeed = 1;
  maxMaxSpeed = 1.5;
}

if(w<=480) {
  particleCount = 450;
  minMaxSpeed = 0.75;
  maxMaxSpeed = 1.125;
  // minStrokeWeight = 0.5;
  // maxStrokeWeight = 1;
}

var maxHueShift = 2;
var maxSaturationShift = 10;
var maxBrightnessShift = 10;

function setup() {
  var canvas=createCanvas(w, h);
  canvas.parent("logoHolder");
  colorMode(HSB, 100);

  //noiseSeed(26.55);
  cols = Math.round(w/scl);
  rows = Math.round(h/scl);
  /* to ensure pole is in the center we need odd cols/rows */
  if(cols%2 == 0)
  {
    cols = cols+1;
  }
  if(rows%2 == 0)
  {
    rows++;
  }
  sclX = w/cols;
  sclY = h/rows;
  poleHeight = sclY/2;
  poleWidth = sclX/2;
  if(w>=h) {
    poleStrength = rows;
  }
  else
  {
    poleStrength = cols;
  }

  //poleStrength = 10;
  let hueOff = 0;
  let hueInc = 0.025;
  //pole = [floor(random(cols)),floor(random(rows))];
  pole = [Math.ceil(cols/2),Math.ceil(rows)-1];
  polePositionPrecise = [pole[0]*sclX - sclX/2,pole[1]*sclY - sclY/2];
  // console.log("pole position is " + pole[0] + "|" + pole[1]);
  // console.log("polePosition is " + polePositionPrecise[0] + "|" + polePositionPrecise[1]);
  flowField = new Array(rows*cols);
  for(var i=0; i<particleCount; i++) {
    let angle = random(TAU);
    let hueNoise = noise(hueOff);
    let polarityCheck = Math.random();
    let polarityInst = "";
    let startX;
    let startY;
    let paletteChoice = selectPalette(random(),palettes);


    let maxSpeed = random(minMaxSpeed,maxMaxSpeed);
    let instStrokeWidth = random(minStrokeWeight,maxStrokeWeight);
    if(polarityCheck<polarityThreshold) {
      // startX = width/2+boundingRadius*random(0.9,1.1)*Math.cos(angle);
      // startY = height/2+boundingRadius*random(0.9,1.1)*Math.sin(angle);
      let start = boundaryCondition(hueNoise);
      startX = start[0];
      startY = start[1];
      polarityInst = "attraction";
    }
    else {
      startX = polePositionPrecise[0];
      startY = polePositionPrecise[1];
      polarityInst = "replusion";
    }
    particles[i] = new Particle(selectColor(hueNoise,paletteChoice),polarityInst,startX,startY,maxSpeed,instStrokeWidth,hueNoise,"random");
    hueOff +=hueInc;
  }
  //console.log("pole="+pole);
  background(backgroundColor);

  //noLoop();
}

function draw() {
  // for(let n=0;n<25;n++) {
  //   let round = 15;
  //   let nonRound = 15.02;
  //  push();
  //           noFill();
  //           stroke("#ffff33");

  //           rect(n*round,0,round,round);
  //           rect(0,0,15,15);
  //         pop();
  //         push();
  //           noFill();
  //           stroke("#ff0066");

  //           rect(n*nonRound,0,nonRound,nonRound);
  //         pop();
  //   }

  //background('#020d1f');
  if(counter%backgroundRefreshRate==0) {
    let backgroundRefresh = color(backgroundColor);
    backgroundRefresh.setAlpha(8);
    push();
      fill(backgroundRefresh);
      noStroke();
      rect(0,0,width,height);
    pop();
    // if(refreshCounter>=palette2.length) {
    //   refreshCounter = 0;
    // }
    refreshCounter++;
  }
  /* show pole */
  // push();
  //   translate(polePositionPrecise[0]-poleRadius,polePositionPrecise[1]-poleRadius);
  
  //   noFill();
  //   stroke("#ffff33");
  //   strokeWeight(2);
  //   circle(poleRadius,poleRadius,poleRadius*2);
  // pop();


  var yoff = 0;


  for (var i=0; i<rows; i++) {
    let vectorStrokeColor = '#00ff66';
    var xoff = 0;
    var yPos = i*sclY;

    for (var j=0; j<cols; j++) {
      var index = i * cols + j;
      var xPos = j*sclX;
      var n = noise(xoff,yoff,zoff);
      var instDeflection = map(n,0,1,-1,1);
      var proximity = proximityCheck([j,i],pole);
      var pullVector = proximity[1];
      var pull = PI/2;
      //push();
        //stroke("#231d3f");
        //noFill();
        if(proximity[0]<=poleStrength) {
          pull = map(proximity[0],0,poleStrength,0,PI);
          vectorStrokeColor = '#cc3366';
        }
        else
        {
          pull = 0;
          vectorStrokeColor = '#00ff66'
        }
      pullVector = proximity[1] + Math.sin(pull)*instDeflection*maxDeflection;
      //pullVector = proximity[1] + ;
      if((i!=(pole[1]-1))||(j!=(pole[0]-1))) {
        push();
          translate(xPos+sclX/2,yPos+sclY/2);
          //stroke(selectColor(n,palette4));
          var v = p5.Vector.fromAngle(pullVector);
          //console.log("vector =" + v.toString());
          //console.log("vector " + j + "|" + i + " heading " + v.heading());
          flowField[index] = v;

          //console.log("pullVector = "+ pullVector + " v.heading() = " + v.heading());
          // push();
          //   noFill();
          //   let boxColor = color("00ff00");
          //   boxColor.setAlpha(0.2);
          //   stroke(boxColor);

          //   rect(-sclX/2,-sclY/2,sclX,sclY);
          // pop();
          /* draw vectors */
          // stroke(vectorStrokeColor);
          // rotate(v.heading());
          // line(-scl/2,0,scl/2,0);
          // line(-scl/2+2,-scl/8,-scl/2+2,scl/8);
          // line(-scl/2,0,-scl/2+2,scl/8);
          // line(-scl/2,0,-scl/2+2,-scl/8);
          /* end draw vectors */

        pop();
        
      }

      xoff += inc;
    }
    yoff += inc;

  }
  counter++;
  zoff += zinc;
  for(var k=0; k<particles.length; k++) {
    particles[k].follow(flowField);
    particles[k].update();
    particles[k].show();
    particles[k].edges();
  }
  //console.log("frameRate="+floor(frameRate()));
}

function proximityCheck(position,pole) {
  var deltaX = position[0] - pole[0]+1;
  var deltaY = position[1] - pole[1]+1;
  var proximity = Math.sqrt(Math.pow(deltaX,2)+Math.pow(deltaY,2));
  var attraction = /*3*PI - */Math.atan2(deltaY, deltaX);
  if(attraction<0) {
    attraction = attraction + TAU;
  }
  var vectorAttraction = [proximity,attraction];
  return vectorAttraction;
}

function boundaryCondition(noise) {
  
  let x = 0;
  let y = 0;
  let maxSpread = 0.75;
  var noiseMapped = map(noise,0,1,-PI/2,PI/2);
  var resultantNoise = random(1);
  let boundarySeed = Math.floor(random(1,4));
  //resultantNoise = noise /* undo for easy comparison */
  if (boundarySeed==1) {
    y = resultantNoise*h - sclY/2;
  }
  if (boundarySeed==2) {
    x = resultantNoise*w  - sclX/2;
  }
  if (boundarySeed==3) {
    x = w  - scl/2;
    y = resultantNoise*h  - sclY/2;
  }
  if (boundarySeed==4) {
    x = resultantNoise*w  - sclX/2;
    y = h  - scl/2;
  }

  return([x,y]);
}
