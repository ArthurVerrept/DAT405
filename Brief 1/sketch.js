//asks user how many circles they want on the screen
var promptnum = prompt("How many circles on the screen?");
var points = [];

//setup for canvas
function setup(){
  createCanvas(600, 400);
  background(0, 100, 255);
  for (var i = 0; i < promptnum; i++) {
    points[i] = new dots;
  }
}

//draw on canvas
function draw() {
  noStroke();

  //calls functions to draw and then move point
  for (var i = 0; i < promptnum; i++) {
    points[i].drawPoint();
    points[i].movePoint();
  }
}
//function to position and calibrate dots
function dots(){
  this.x = width/2;
  this.y = height/2;
  this.xspeed;
  this.yspeed;
  /*
  this.history = [];
  var t = createVector(this.x, this.y)
  this.history.push(t);
  for (var t = 0; t < this.history.length; t++) {
    var pos = this.history[t];
    ellipse(pos.x, pos.y, 8, 8)
    fill(random(70, 140), random(70, 140), random(70, 140));
  }*/

    //function to draw a new dot
    this.drawPoint = function(){
    fill(random(0, 1), random(200, 255), random(100, 140));
    noStroke();
    //creating ellipse with x and y from movepoint function
    ellipse(this.x, this.y, 2, 2);
    }

    //function to moving x and y co-ordinates
    this.movePoint = function(){
    //choosing random x and y speed
    this.xspeed = random(-2, 2);
    this.yspeed = random(-2, 2);
    //adding random speed to both x and y co-ordinates
    this.x += this.xspeed;
    this.y += this.yspeed;
      console.log(this.x, this.y)
    //changes direction of ball when it hits the side of the canvas
      if (this.x > width || this.x < 0) {
      this.xspeed = this.xspeed * -1;
      }
      if (this.y > height || this.y < 0) {
      this.yspeed = this.yspeed * -1;
      }
    }
  }
