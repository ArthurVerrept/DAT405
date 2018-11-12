//variable to store last key pressed
var prevKey = '0';

//setup canvas and framerate
function setup(){
  createCanvas(500, 500);
  frameRate(15);
}

function draw(){
  //checks if the key pressed is number 1 then checks if that key is equal to the previous key pressed
  if (key == '1') {
    if (key == prevKey) {
      //calls shape1 with no new background
      shape1();
    }
    else{
      //if the previous key does not match the new key then the canvas is cleared here
      background(240);
      //then calls shape1
      shape1();
    }
  }

  //repeated here
  else if (key == '2') {
    if (key == prevKey) {
      shape2();
    }
    else{
      background(240);
      shape2();
    }
  }

  //repeated here again
  else if (key == '3') {
    if (key == prevKey) {
      shape3();
    }
    else{
      background(240);
      shape3();
    }
  }
}

//this draws the first shape
function shape1(){
  strokeWeight(0);
  //setting an x and y that the shape can use to build around
  var x = random(500);
  var y = random(500);
  fill(random(175, 255), 0, random(50, 200), random(100, 200));
  ellipse(x, y, 50, 50, random(150, 250));
  noFill();
  strokeWeight(1);
  stroke(255, 0, 150);
  ellipse(x, y, 45, 45, random(150, 250));
  fill(255);
  ellipse(x, y, 40, 40, random(150, 250));
  rectMode(CENTER);
  rect(x, y, 35, 35);
  prevKey = key;
}

//building shape 2
function shape2(){
  strokeWeight(1);
  var x = random(500);
  var y = random(500);
  fill(random(175, 255), 0, random(50, 200), random(100, 200));
  triangle(x, y, x+random(40, 50), y+random(40, 50), x-random(40, 50), y+random(40, 50));
  stroke(255);
  triangle(x, y, x-random(10, 30), y-random(10, 30), x+random(10, 30), y-random(10, 30));
  prevKey = key;
}

//building shape3
function shape3(){
  strokeWeight(2);
  stroke(random(150, 255));
  var x2 = random(0, 500);
  var x3 = random(0, 500);
  line(250, 250, random(500), random(500));
  prevKey = key;
}
