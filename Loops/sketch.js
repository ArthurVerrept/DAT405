//sets sizes of squares
let size = 50;

function setup() {
  //framerate
  frameRate(3);
  createCanvas(500, 500);
}
function draw(){
  //loops through canvas size for each square
  for (var y = 0; y < 500; y+=50) {
    for (var x = 0; x < 500; x+=50) {
      //fills outer squares a static colour
      fill(220, 220, 0);
      //draws squares
      rect(x, y, size, size);
      //fills inner square random colour
      fill(random(255), random(255), random(255));
      //draws inner square
      rect(x+10, y+10, size-20, size-20);
    }
  }
}
