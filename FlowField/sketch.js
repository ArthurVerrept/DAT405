//set up increment amount
var inc = 0.1;

function setup(){
  createCanvas(594, 841);
    background(100);
}

function draw(){
  //resets y offset to 0 in noise after evey column
  var yoff = 0;
   loadPixels();
    for (var y = 0; y < height; y++) {
      //for every row we reset xoff in noise at 0
      var xoff = 0;
      for (var x = 0; x < width; x++) {
        //finds location in pixels array
        var index = (x + y * width) * 4;
        //sets variable c to the map of xoff and yoff returning a value between 0-255
        var c = map(noise(xoff, yoff), 0, 1, 0, 255);
        //sets pixel to c for each colour RGB
        pixels[index] = c;
        pixels[index+1] = c;
        pixels[index+2] = c;
        pixels[index+3] = 255;
        //for every pixel in row xoff is incremented by inc
        xoff += inc;
      }
      //for evey new column yoff in incremented by inc
      yoff += inc;
    }
    updatePixels();
}
