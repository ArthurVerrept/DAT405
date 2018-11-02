//asks user how many circles they want on the screen
var promptnum = prompt("How many circles on the screen?");

//creates the first ball function
var ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
}

//creates the second ball function
var ball2 = {
  x:200,
  y:100,
  xspeed: 4,
  yspeed: -3
}

//setup for canvas
function setup(){
  createCanvas(600, 400);
}

//draw on canvas
function draw() {
  background(0);
  stroke(255);
  //sets thickness of circle
  strokeWeight(4);
  //makes circle hollow
  noFill();

  //adds or subtracts 2 from the speed of the circles every loop for random movements
  ball.xspeed = ball.xspeed + random(-2, 2);
  ball.yspeed = ball.yspeed + random(-2, 2);
  ball2.xspeed = ball2.xspeed + random(-2, 2);
  ball2.yspeed = ball2.yspeed + random(-2, 2);

  //create user input amount of circles of circles
  /*
  for (var i = 0; i <= promptnum; i++) {
  }
  */

  //creates the circles
  ellipse(ball.x, ball.y, 24, 24);
  ellipse(ball2.x, ball2.y, 24, 24);

  //resets speed of circle once it reaches 5
  if(ball.xspeed > 5 || ball.xspeed < -5){
    ball.xspeed = random(-2, 2);
  }
  if(ball.yspeed > 5 || ball.yspeed < -5){
    ball.yspeed = random(-2, 2);
  }
  if(ball2.xspeed > 5 || ball2.xspeed < -5){
    ball2.xspeed = random(-2, 2);
  }
  if(ball2.yspeed > 5 || ball2.yspeed < -5){
    ball2.yspeed = random(-2, 2);
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

  //increases x and y by the selected speed
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
  ball2.x = ball2.x + ball2.xspeed;
  ball2.y = ball2.y + ball2.yspeed;

}
