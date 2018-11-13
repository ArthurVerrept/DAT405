function setup(){
  createCanvas(400, 400);

}

function draw(){
  background(0);
  var x1 = map(mouseX, 0, width, 0, 255);
  var y1 = map(mouseY, 0, width, 0, 255);
  var x2 = map(mouseX, 0, width, 255, 0);
  var y2 = map(mouseY, 0, width, 255, 0);
  console.log(x1, y1, x2, y2);
  fill(255, 0, 0, x1);
  rect(0, 0, 200, 200);
  fill(0, 255, 0 ,y1);
  rect(width/2, 0, 200, 200);
  fill(255, 255, 0, x2);
  rect(0, height/2, 200, 200);
  fill(0, 0, 255, y2);
  rect(width/2, height/2, 200, 200);

}
