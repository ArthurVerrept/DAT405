var prevKey = '0'

function setup(){
  createCanvas(500, 500);
  text("press a key between 1 & 3", 50, 50);
}

function draw(){
  if ((keyIsPressed == true) && (key == '1') && (prevKey != key)) {
    shape1();
  }
  else if ((keyIsPressed == true) && (key == '2') && (prevKey != key)) {
  shape2();
  }
  else if ((keyIsPressed == true) && (key == '3') && (prevKey != key)){
    shape3();
  }
  //stops draw function looping through shapes
  prevKey = key;
}

function shape1(){
  background(240);
  noStroke();
  for (var i = 0; i < 20; i++) {
      fill(random(175, 255), 0, 0, random(100, 200));
    ellipse(random(width), random(height), 200, 200);
  }
}

function shape2(){
  background(240);
  noStroke();
  for (var i = 0; i < 20; i++) {
    fill(0, random(175, 255), 0, random(100, 200));
    rect(random(width), random(height), 100, 100);
  }
}

function shape3(){
  background(240);
  strokeWeight(3);
  for (var i = 0; i < 20; i++) {
    var x2 = random(0, 500);
    var x3 = random(0, 500);
    fill(0, random(175, 255), 0, random(100, 200));
    triangle(250, 250, random(500), random(500), random(500), random(3500));
    console.log(x2, x3);
  }
}
