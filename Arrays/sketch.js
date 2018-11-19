function setup(){
  createCanvas(500,500);
  background(100);
}

function draw(){
  var cars = ["saab", "volvo", "BMW"];
  var x = cars[1];
  fill(0);
  text(x, 200, 200);

  cars[0] = "ford";
  text(cars[0], 220, 220);

  text(cars.length,240,240);


}
