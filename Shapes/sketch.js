//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen

//Initialization function
function setup() {
  createCanvas(500, 300);
  background(60);
}
  function draw(){

    //setting stroke width
    strokeWeight(5);

    //line top left to bottom right
    stroke(0, 255, 0);
    line(25, 25, 475, 275);

    //line top right to bottom left
    stroke(255, 255, 0);
    line(475, 25, 25, 275);

    //line top left to top right
    stroke(255, 0, 255);
    line(25, 25, 475, 25);

    //line top left bottom left
    stroke(0, 255, 255);
    line(25, 25, 25, 275);

    //line top right to bottom right
    stroke(255, 160, 0);
    line(475, 25, 475, 275);

    //line bottom left to bottom right
    stroke(150, 255, 0);
    line(25, 275, 475, 275);

    //removing stroke from circles
    noStroke();

    //top left
    fill(0, 0, 255, 1000);
    ellipse(25, 25, 50, 50);

    //top right
    fill(255, 0, 0, 1000);
    ellipse(475, 25, 50, 50);

    //bottom right
    fill(255, 255, 0, 1000);
    ellipse(475, 275, 50, 50);

    //bottom left
    fill(0, 255, 0, 1000);
    ellipse(25, 275, 50, 50);

}
