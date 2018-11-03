//asks user how many circles they want on the screen
var promptnum = prompt("How many circles on the screen?");

//creates the first ball function
var ball = {
    x: 300,
    y: 200,
    xspeed: 4,
    yspeed: -3,
    history: []
}

//creates the second ball function
var ball2 = {
  x:300,
  y:200,
  xspeed: 4,
  yspeed: -3,
  history: []
}

//setup for canvas
function setup(){
  createCanvas(600, 400);
  frameRate(30);
}

//draw on canvas
function draw() {
  background(0, 0, 0, 127);
  strokeWeight(0);

  //adds or subtracts 2 from the speed of the circles every loop for random movements
  ball.x += random(-4, 4);
  ball.y += random(-4, 4);
  ball2.x += random(-4, 4);
  ball2.x += random(-4, 4);
  //creates the circles
  ellipse(ball.x, ball.y, 10, 10);
  ellipse(ball2.x, ball2.y, 10, 10);

  var v = createVector(ball.x, ball.y);
  ball.history.push(v);
  console.log(v);
  for (var i = 0; i < ball.history.length; i++) {
    var pos = ball.history[i];
    ellipse(pos.x, pos.y, 5, 5)
    fill(random(70, 140), random(70, 140), random(70, 140));
  }

  //changes direction of ball when it hits the side of the canvas
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }

  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }

  if (ball2.x > width || ball2.x < 0) {
    ball2.xspeed = ball2.xspeed * -1;
  }

  if (ball2.y > height || ball2.y < 0) {
    ball2.yspeed = ball2.yspeed * -1;
  }
}
