let x;
let y;
let speedX = 3;
let speedY = 5;

function setup() {
  createCanvas(400, 400);
  x = random(0, width);
  y = random(0, height);
  speedX = random(-3, 3);
  speedY = random(-3, 3);
  createCanvas(600, 600);
  background(240);
}

function draw() {
  const redVal = map(x, 0, width, 0, 255);
    const greenVal = map(y, 0, height, 0, 255);

  //fill(redVal, 255, 255);
  //noStroke();
  //circle(mouseX, mouseY, 50);
  
  translate(x, y);
  
  const rotation = map(y, 0, height, 0, TWO_PI);
  
  rotate(rotation);
  
  stroke(redVal, greenVal, 255);
  line(-300, 0, 300, 0);
  
  x = x + speedX;
  y = y + speedY;
  
  if (x > width || x < 0) {
    speedX = -speedX;
  }
  
  if (y > height || y < 0) {
    speedY = -speedY;
  }
  
}



