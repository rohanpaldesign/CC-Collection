var x, y;

function setup() {
  createCanvas(800, 400);
  background(0);
  
  noFill();
}

function draw() {
  x = mouseX;
  y = mouseY;
  
  stroke(225, 125, 250);
  
  drawCircle();
}
  

function drawCircle(){
    circle(x, height/2, y);
}