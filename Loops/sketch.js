//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen

//Initialization function
  let size = 50;
function setup() {
  createCanvas(500, 500);
    noLoop();

}
function draw(){
  fill(215, 200, 170);
  for (var i = 0; i < 10; i++) {
    rect(size*i, height/2, size, size);
  }
}
