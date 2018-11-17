var frm = 0;
//sets start point in for noise function
var move = 0;
//sets up increment amount
var inc = 0.01;

function setup(){
  createCanvas(594, 841);
  frm = frameCount;
}

function draw(){
  if (mouseIsPressed) {
     press();
     var yn = true;
  }
  else if (mouseIsPressed == false) {
    notPressed();
  }
}

function  press(){
  beginShape();
    var xoff = move;
    for (var x = 0; x < height; x++) {
      y = map(noise(xoff), 0, 1, 0, height);
      var rcolour = map(noise(xoff), 0, 1, 0, 255);
      var gcolour = map(noise(xoff+100), 0, 1, 0, 255);
      var bcolour = map(noise(xoff+1000), 0, 1, 0, 255);
      var colour = map(y, 0, height, 0, 255);
      stroke(rcolour, gcolour, bcolour);
      noFill();
      vertex(y, x);
      xoff += inc;
    }
    endShape();
    move -= map(mouseY, 0, height, -0.1, 0.1);
}

function notPressed(){
  background(255);
  beginShape();
    var xoff = move;
    for (var x = 0; x < width; x++) {
      y = map(noise(xoff), 0, 1, 0, height);
      var colour = map(y, 0, height, 0, 255);
      var scolour = map(y, 0, height, 0, 255);
      stroke(scolour);
      fill(0, 0, 0, colour);
      vertex(x, y);
      xoff += map(mouseY, 0, height, -0.01, 0.01);
    }
    endShape();
    stroke(255);
    move += map(mouseX, 0, width, -0.01, 0.01);
}
