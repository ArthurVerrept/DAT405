var hit = false;
var poly = [];
function setup() {
	createCanvas(windowWidth,windowHeight);
	collideDebug(true)
	poly[0] = createVector(323,431);     // set X/Y position
	poly[1] = createVector(210,311);
	poly[2] = createVector(220,223);
	poly[3] = createVector(590,233);
}

function draw() {
	background(255);
	push()
	beginShape();
	//draw the polygon from the created Vectors above.
	for(i=0; i < poly.length; i++){
		vertex(poly[i].x,poly[i].y);
	}
	endShape(CLOSE);

	rect(mouseX,mouseY,45,100);

	hit = collideRectPoly(mouseX,mouseY,45,100,poly);
	//enable the hit detection if the circle is wholly inside the polygon
	// hit = collideRectPoly(mouseX,mouseY,45,100,poly,true);

	print("colliding? " + hit);
}
