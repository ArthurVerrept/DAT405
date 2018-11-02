//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen

//Initialization function
let randX = 0;
let randY = 0;
function setup(){
  createCanvas(windowWidth, windowHeight);
  randX = random(1280);
  randY = random(599);
}
function draw(){
  randX = randX + random(-4, 4);
  background(200, 200, 100);
  triangle(0 + randX, 0 + randY, 58 + randX, 20 + randY, 86 + randX, 75 + randY);
}
