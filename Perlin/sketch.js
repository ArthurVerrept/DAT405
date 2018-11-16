var start = 0;

function setup(){
  createCanvas(594, 841);
}

function draw(){
  background(100);
  //noFill();
  beginShape();
    var xoff = start;
    for (var x = 0; x < width; x++) {
      y = map(noise(xoff), 0, 1, 0, height);
      var colour = map(y, 0, height, 0, 255);
      console.log(colour);
      fill(0, 0, 0, colour);
      vertex(x, y);
      xoff += 0.01;
    }
    endShape();
    stroke(255);
    start += 0.01;
}
