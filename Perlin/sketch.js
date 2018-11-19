//sets start point in for noise function
var move = 0;
//sets up increment amount
var inc = 0.01;
//sets up amount of degrees of rotation
var rot = 0;

function setup(){
  createCanvas(594, 841);
  angleMode(DEGREES);
  // Create ball objects(startX,startY,Size)
}

function draw(){

  //checks whether mouse is pressed
  if (mouseIsPressed) {
    //calls the press function
    press();
  }
  //if not do this
  else if (mouseIsPressed == false) {
    //calls the not pressed function
    notPressed();
  }
}



function  press(){
  //begins shape
  beginShape();
  //resets xoff so that graphs all start at same point
    var xoff = 0;
    //loops through all the y columns
    for (var y = 0; y < height; y++) {
      //maps the x co-ordinate between 1 & 0 to 0 & width
      x = map(noise(xoff), 0, 1, 0, width);
      //set up colours based on xoff noise coordinate mapped to 0 - 255
      var rcolour = map(noise(xoff), 0, 1, 0, 255);
      var gcolour = map(noise(xoff+1000), 0, 1, 0, 255);
      var bcolour = map(noise(xoff+10000), 0, 1, 0, 255);
      var acolour = map(mouseY, 0, height, 0, 5);
      //rotates by 1 degrees every frame
      rot = rot + 1;
      //sets stroke colour to perlin noise
      stroke(rcolour, gcolour, bcolour);
      //sets fill colour to same as stroke
      fill(rcolour, gcolour, bcolour, acolour);
      //rotates the vertexes by rot variable
      rotate(rot);
      //draws vertexes
      vertex(x, y);
      //maps speed at which you go through perlin to mouseX co-ordinate
      xoff += map(mouseX, 0, width, 0.001, 0.004);
    }
    //ends shape
    endShape();
}

function notPressed(){
  //clears background
  sWidth = map(mouseX, 0, 1, 50, 500);
  background(255);
  beginShape();
  //sets xoff to move amount
    var xoff = move;
    //goes through all x rows
    for (var x = 0; x < width; x++) {
      //assigns y co-ordinate based on noise map f xoff
      y = map(noise(xoff), 0, 1, 0, height);
      //sets up RGB(A) of stroke and fill
      var colour = map(y, 0, height, 0, 100);
      var scolour = map(y, 0, height, 0, 255);
      //sets colours
      stroke(scolour);
      noFill();
      //draws vertexes
      vertex(x, y);
      //maps speed of xoff in noise to mouseY coordinate
      xoff += map(mouseY, 0, height, 0.0001, 0.01);
    }
    //ends shaoe
    endShape();
    //sets move speed to mouseX coordinate
    move += map(mouseX, 0, width, 0.0001, 0.01);
  }
