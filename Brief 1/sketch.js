//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen

//Initialization function
function setup() {
  createCanvas(100, 100, WEBGL);
}
function draw() {
  background(0);
  //move your mouse to change light position
  var locX = mouseX - width / 2;
  var locY = mouseY - height / 2;
  // to set the light position,
  // think of the world's coordinate as:
  // -width/2,-height/2 -------- width/2,-height/2
  //                |            |
  //                |     0,0    |
  //                |            |
  // -width/2,height/2--------width/2,height/2
  pointLight(250, 250, 250, locX, locY, 50);
  ambientMaterial(250);
  noStroke();
  sphere(25);
}
