var prevS = 0;
function setup(){
  createCanvas(400, 400);

}

function draw(){
  var size = 50;
  background(0);
  var xLine = map(mouseX, 0, height, 0, 255);
  var yLine = map(mouseY, 0, width, 0, 255);
  var xRest = map(mouseY, 0, width, 255, 0);

  for (var y = 0; y < 400; y+=size) {
    for (var x = 0; x < 400; x+=size) {
      if (mouseX > x && mouseY > y && mouseX < x + size && mouseY < y + size) {
        fill(255, 0, 0);
        rect(x, y, size, size);
      }
      else if (mouseX > x && mouseX < x + size) {
        fill(0, 0, 255, xLine);
        rect(x, y, size, size);
      }
      else if (mouseY > y && mouseY < y + size) {
        fill(0, 0, 255, yLine);
        rect(x, y, size, size);
      }
      else{
        fill(255,165,0, xRest);
        rect(x, y, size, size);
      }
    }
  }
  /*fill(255, 0, 0, x1);
  rect(0, 0, 200, 200);
  fill(0, 255, 0 ,y1);
  rect(width/2, 0, 200, 200);
  fill(255, 255, 0, x2);
  rect(0, height/2, 200, 200);
  fill(0, 0, 255, y2);
  rect(width/2, height/2, 200, 200);*/

}
