//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen

//Initialization function
function setup() {
  createCanvas(170, 170);
  background(0, 0, 0);
  frameRate(60);
}

  function draw(){
    //removing stroke
    noStroke();

    //Line 1
    rect(30, 20, 10, 10);
    rect(90, 20, 10, 10);

    //Line 2
    rect(40, 30, 10, 10);
    rect(80, 30, 10, 10);

    //Line 3
    rect(30, 40, 70, 10);

    //Line 4
    rect(20, 50, 20, 10);
    rect(50, 50, 30, 10);
    rect(90, 50, 20, 10);

    //Line 4
    rect(10, 60, 110, 10);

    //line 5
    rect(10, 70, 10, 10);
    rect(110, 70, 10, 10);
    rect(30, 70, 70, 10);

    //Line 6
    rect(10, 80, 10, 10);
    rect(110, 80, 10, 10);
    rect(30, 80, 10, 10);
    rect(90, 80, 10, 10);

    //line 7
    rect(40, 90, 20, 10);
    rect(70, 90, 20, 10);

    //D for dat!
    fill(255, 0, 0);
    rect(10, 110, 10, 40);
    rect(20, 110, 10, 10);
    rect(20, 140, 10, 10);
    rect(30, 120, 10, 20);

    //a for dat!
    fill(0, 255, 0);
    rect(40, 140, 10, 10);
    rect(40, 130, 30, 10);
    rect(40, 120, 10, 10);
    rect(50, 110, 10, 10);
    rect(60, 120, 10, 10);
    rect(60, 140, 10, 10);

    //t for dat!
    fill(0, 0, 255);
    rect(70, 110, 30, 10);
    rect(80, 120, 10, 30);

    //! for dat!
    fill(255, 255, 0);
    rect(110, 110, 10, 20);
    rect(110, 140, 10, 10);

    //if mouse is pressed reset background and write reset
    if(mouseIsPressed){
      background(0, 0, 0);
      text("RESET", 60, 70);
    }
    //else fill a circle with a random colour between red and green on mouse x&y
    else {
      fill(random(255), random(255), random(0));
      rect(mouseX, mouseY, 10, 10);
}
}
