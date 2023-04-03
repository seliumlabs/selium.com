// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/BjoM9oKOAKY

class Particle {
  constructor(color,polarity,x,y,maxspeed,strokeWidth,noise) {
    this.color = color;
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0, 0);
    this.maxspeed = maxspeed;
    this.prevPos = this.pos.copy();
    this.polarity = polarity;
    this.strokeWidth = strokeWidth;
    this.noise = noise;
  }



  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    if(this.polarity == "attraction") {
      this.pos.sub(this.vel);
    }
    else {
        this.pos.add(this.vel);
    }
    this.acc.mult(0);
  }

  follow(vectors) {
    var x = floor(this.pos.x / sclX);
    var y = floor(this.pos.y / sclY);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
    // push();
    //   stroke("#ee3366");
    //   noFill();
    //   rect(x*scl,y*scl,scl,scl);
    //   translate((x+0.5)*scl,(y+0.5)*scl);
    //   rotate(force.heading());
    //   line(0,0,80,0);
    //
    //   //console.log(force.heading()*180/PI);
    // pop();
  }

  applyForce(force) {
    this.acc.add(force);
  }

  show() {
    let strokeAlpha = 200;
    if(this.color[1]=="fullAlpha") {
      strokeAlpha = 255;
    }
    if(this.strokeWidth==1.5) {
      strokeAlpha = 235;
    }
    let strokeColor = color(this.color[0]);
    strokeColor.setAlpha(strokeAlpha);
    push();
      stroke(strokeColor);
      strokeWeight(this.strokeWidth);
      line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    pop();
    this.updatePrev();
  }

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges() {
    var x = floor(this.pos.x / sclX);
    var y = floor(this.pos.y / sclY);
    var index = x + y * cols;
    var polePosition = pole[0] + pole[1] * cols;

    var angle = random(TAU);
    //if((this.pos.x>=polePositionPrecise[0]-poleRadius)&&(this.pos.x<=polePositionPrecise[0]+poleRadius))
    if(((this.pos.x>=polePositionPrecise[0]-poleWidth)&&(this.pos.x<=polePositionPrecise[0]+poleWidth)&&(this.pos.y>=polePositionPrecise[1]-poleHeight)&&(this.pos.y<=polePositionPrecise[1]+poleHeight))) {
      this.polarity = "replusion";

      this.updatePrev();
    }
    //if ((index == polePosition)||(this.pos.x > width)||(this.pos.x < 0)||(this.pos.y > height)||(this.pos.y < 0)) {
    if((this.pos.x > width)||(this.pos.x < 0)||(this.pos.y > height)||(this.pos.y < 0))
    {
      this.polarity = "attraction";
      // this.pos.x = width/2+boundingRadius*random(0.9,1.1)*Math.cos(angle);
      // this.pos.y = height/2+boundingRadius*random(0.9,1.1)*Math.sin(angle);
      let boundarySeed = Math.round(random(1,4));
      this.pos.x = 0;
      this.pos.y = 0;
        if (boundarySeed==1) {
            this.pos.y = random(0,h);
          }
          if (boundarySeed==2) {
            this.pos.x = random(0,w);
          }
          if (boundarySeed==3) {
            this.pos.x = w;
            this.pos.y = random(0,h);
          }
          if (boundarySeed==4) {
            this.pos.x = random(0,w);
            this.pos.y = h;
          }
      this.updatePrev();
    }

    // if(getDistance(this.pos.x,this.pos.y,polePositionPrecise[0],polePositionPrecise[1])>1.1*boundingRadius)
    // {
    //   this.polarity = "attraction";
    //   this.pos.x = width/2+boundingRadius*random(0.9,1.1)*Math.cos(angle);
    //   this.pos.y = height/2+boundingRadius*random(0.9,1.1)*Math.sin(angle);
    //   this.updatePrev();
    // }


  }


}
