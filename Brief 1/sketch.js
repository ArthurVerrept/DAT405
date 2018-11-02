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
  createCanvas(100, 100);
  frameRate(60);
}
  function draw() {
    randX = randX + random(-2, 2);
    randY = randY + random(-2, 2);
    background(200);
    rectMode(CENTER);
    translate(width / 2, height / 2);
    translate(randX, randY);
    rect(0, 0, 20, 20);
}
