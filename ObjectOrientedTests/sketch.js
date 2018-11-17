let bubble;
var xoff = 0;
function setup(){
  createCanvas(400,400);
  //background(140);
  bubble = new Bubble;
}

function draw(){
  background(140);
  bubble.move();
  bubble.show();
  xoff += 0.01
}

class Bubble {
  constructor(){
  this.x = 100;
  this.y = 101;
  }

  move(){
    this.x = this.x + map(noise(xoff), 0, 1, -1, 1);
    this.y = this.y + map(noise(xoff + 10000), 0, 1, -1, 1);
  }

  show(){
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
}
