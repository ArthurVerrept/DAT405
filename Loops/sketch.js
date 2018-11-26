//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen

//Initialization function
let size = 50;
let size2 = 30;
function setup() {
  frameRate(3);
  createCanvas(500, 500);
}
function draw(){
  for (var y = 0; y < 500; y+=50) {
    for (var x = 0; x < 500; x+=50) {
      fill(220, 220, 0);
      rect(x, y, size, size);
    }
  }
  for (var y2 = 10; y2 < 500; y2+=50) {
    for (var x2 = 10; x2 < 500; x2+=50) {
      fill(random(255), random(255), random(255));
      rect(x2, y2, size2, size2);
    }
  }
}
