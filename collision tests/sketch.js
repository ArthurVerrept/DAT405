//creates hit variable
var hit = false;
var hit2 = false;
//creates polygon array
var poly = [];

//sets move to 0
var move = 0;

//Define ball array
var balls = [];
var balls2 = [];
//gravity variable
var gravity = 0.1;
var gravity2 = -0.1;

function setup() {
	createCanvas(594, 841);
	collideDebug(true)
	frameRate(60);
	button = createButton('NEW');
  button.position(0, 20);
	button.size(40, 20);
  button.mousePressed(setup);
	//creates multiple ellipses on screen
	for (var i = 0; i < width/15; i++) {
		balls.push(new Ball(i*15, 10, 15));
		balls2.push(new Ball(i*15, 845, 15));
	}
}

function draw() {
	background(255);
	//calls not pressed function
	notPressed();
	beginShape();
	//draw the polygon from the created Vectors created in notPressed function
	for(i=0; i < poly.length; i++){
		vertex(poly[i].x,poly[i].y);
	}
	//closes ploygon on top two corners
	//vertex(595, -1);
	//vertex(-1, -1);
	endShape(CLOSE);
	//updates balls
	for (var i = 0; i < balls.length; i++) { // Whatever the length of that array, update and display all of the objects.
		balls[i].update();
		balls[i].display();
	}
	for (var i = 0; i < balls2.length; i++) {
		balls2[i].updateU();
		balls2[i].displayU();
	}
}


function notPressed(){
	var xoff = move;
  //clears background
  background(255);
	var colourR = map(noise(xoff), 0, 1, 0, 225);
	var colourG = map(noise(xoff+100), 0, 1, 0, 225);
	var colourB = map(noise(xoff+10000), 0, 1, 0, 225);
	fill(colourR,colourG,colourB);
	noStroke();
  beginShape();
		for (var x = 0; x < width+2; x++) {

			y = map(noise(xoff), 0, 1, 0, height);
			poly[x] = createVector(x, y);

			xoff += 0.002;
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
	this.speed2 = 0;

  this.display = function() {
		var colourR = map(this.y, 0, height/2, 0, 225);
		var colourG = map(this.y, height/2, 0, 0, 225);
		var colourB = map(this.y, 0, height/2, 0, 225);
    // Display the square
    fill(colourR, colourG, colourB);
    noStroke();
    ellipse(this.x,this.y,this.w,this.w);
  }

  this.update = function() {
			hit = collideCirclePoly(this.x, this.y, 24, poly);
			if (hit == true) {
				if (this.speed < 1) {
					this.speed = 4;
				}
				this.speed = this.speed * -0.95;
			}
    // Add speed to location
    this.y = this.y + this.speed;

    // Add gravity to speed
    this.speed = this.speed + gravity;
  }

	this.displayU = function() {
    // Display the square
		var colourR = map(this.y, height, height/2, 0, 255);
		var colourG = map(this.y, height, height/2, 0, 255);
		var colourB = map(this.y, height, height/2, 255, 0);

    fill(colourB, colourR, colourG);
    noStroke(0);
    ellipse(this.x,this.y,this.w,this.w);
  }

  this.updateU = function() {
			hit2 = collideCirclePoly(this.x, this.y, 24, poly);
			if (hit2 == true) {
				if (this.speed2 > -1) {
					this.speed2 = -4;
				}
				this.speed2 = this.speed2 * -0.95;
			}
    // Add speed to location
    this.y = this.y + this.speed2;

    // Add gravity to speed
    this.speed2 = this.speed2+ gravity2;
  }
}
