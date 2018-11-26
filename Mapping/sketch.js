function setup(){
  createCanvas(400, 400);
}

function draw(){
  var size = 50;
  background(0);

  //Maps the mouse x and y to return a colour between 0-255
  var xLine = map(mouseX, 0, height, 0, 255);
  var yLine = map(mouseY, 0, width, 0, 255);
  var xRest = map(mouseY, 0, width, 255, 0);

  //Creates rectangles on screen
  for (var y = 0; y < 400; y+=size) {
    for (var x = 0; x < 400; x+=size) {
      //Checks what square the mouse is over
      if (mouseX > x && mouseY > y && mouseX < x + size && mouseY < y + size) {
        //sets that square to red
        fill(255, 0, 0);
        rect(x, y, size, size);
      }
      //checks which row mouse is on
      else if (mouseX > x && mouseX < x + size) {
        //sets that row to blue and opacity to mapped value above
        fill(0, 0, 255, xLine);
        rect(x, y, size, size);
      }
      //check the column mouse is on
      else if (mouseY > y && mouseY < y + size) {
        //sets that row to blue and opacity to mapped value above
        fill(0, 0, 255, yLine);
        rect(x, y, size, size);
      }
      else{
        //fills the rest fo the squares a colour and opacity from abouve
        fill(255,165,0, xRest);
        rect(x, y, size, size);
      }
    }
  }
}
