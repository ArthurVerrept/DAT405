//creates hit variable
var hit = false;

//creates polygon array
var poly = [];

//sets move to 0
var move = 0;

//Define ball array
var balls = [];

//gravity variable
var gravity = 0.1;

function setup() {
	createCanvas(594, 841);
	collideDebug(true)
	frameRate(60);
	//creates multiple ellipses on screen
	for (var i = 0; i < width/50; i++) {
		balls.push(new Ball(i*50, 20, 24));
	}
}

function draw() {
	background(255);
	//calls not pressed function
	notPressed();
	noFill();
	beginShape();
	//draw the polygon from the created Vectors created in notPressed function
	for(i=0; i < poly.length; i++){
		vertex(poly[i].x,poly[i].y);
	}
	//closes ploygon on top two corners
	vertex(595, -1);
	vertex(-1, -1);
	endShape(CLOSE);
	//updates balls
	for (var i = 0; i < balls.length; i++) { // Whatever the length of that array, update and display all of the objects.
		balls[i].update();
		balls[i].display();
	}
}


function notPressed(){
	var xoff = move;
  //clears background
  background(255);
  beginShape();
		for (var x = 0; x < width+2; x++) {
			y = map(noise(xoff), 0, 1, 0, height);
			poly[x] = createVector(x, y);
			xoff += map(mouseY, 0, height, 0.0005, 0.002);
		}
    endShape();
		move += 0.002;
    //sets move speed to mouseX coordinate
    //move += map(mouseX, 0, width, 0.0001, 0.01);
  }

	function Ball(tempX, tempY, tempW) {
  this.x = tempX;  // x location of square
  this.y = tempY;  // y location of square
  this.w = tempW;  // speed of square
  this.speed = 0;  // size

  this.display = function() {
    // Display the square
    fill(175);
    stroke(0);
    ellipse(this.x,this.y,this.w,this.w);
  }

  this.update = function() {
		hit = collideCirclePoly(this.x, this.y, 24, poly);
		print("colliding? " + hit);
		if (hit == true) {
			if (this.speed < 1) {
				this.speed = 2;
			}
			this.speed = this.speed * -0.95;
		}
    // Add speed to location
    this.y = this.y + this.speed;

    // Add gravity to speed
    this.speed = this.speed + gravity;
  }
}
