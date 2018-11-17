//set up increment amount
var inc = 0.1;
//set up scale of flow field
var scl = 20;
//set up col and rows
var cols, rows;

var zoff = 0;

function setup(){
  createCanvas(600, 800);
  //background(100);
  //divides amount of pixels in width and height by scl to group pixels
  cols = floor(width / scl);
  rows = floor(height/ scl);
}

function draw(){
  background(100);
  //resets y offset to 0 in noise after evey column
  var yoff = 0;
  //goes through each row
    for (var y = 0; y < rows; y++) {
      //for every row we reset xoff in noise at 0
      var xoff = 0;
      //goes through each column
      for (var x = 0; x < cols; x++) {
        //var index = (x + y * width) * 4;
        //
        var angle = noise(xoff, yoff, zoff) * TWO_PI;
        var v = p5.Vector.fromAngle(angle);
        stroke(255);
        push();
        translate(x * scl, y * scl)
        rotate(v.heading());
        line(0, 0, scl, 0);
        pop();
        xoff += inc;
      }
      //for evey new column yoff in incremented by inc
      yoff += inc;
      zoff += 0.0005;
    }
}
