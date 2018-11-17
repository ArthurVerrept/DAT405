function setup(){
  createCanvas(800, 500);
}

function draw(){
    background(140);
    //loads pixels
    loadPixels();
    //nested for loops to go through every pixel individually
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        //this variable is assigned the calculation to find the
        //start of RGBA in the pixels array by multiplying
        //y & "width" then adding x to give the number of the pixel
        //then multiplying by 4 for all the RGBA's from the previous pixels
        var index = (x + y * width) * 4;
        //the index is then incremented by one for red green blue and alpha
        pixels[index] = x;
        pixels[index+1] = 255;
        pixels[index+2] = y;
        pixels[index+3] = 255;

      }
    }
    updatePixels();
}
