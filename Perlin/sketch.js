var start = 0;

function setup(){
  createCanvas(594, 841);
  background(100);
}

function draw(){
  noFill();
  beginShape();
    var xoff = start;
    for (var x = 0; x < width; x++) {
      y = map(noise(xoff), 0, 1, 0, height);
      console.log(y);
      stroke(255);
      vertex(x, y);
      xoff += 0.01;

    }
    endShape();
    start += 0.01;
}
