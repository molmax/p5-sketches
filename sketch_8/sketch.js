//Just colorful squares

canvasWidth = 800;
canvasHeight = 800;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(3);
}

function draw() {
  sqSide = canvasWidth / 50;  
  //O(n^2) complexity works awful on bigger canvas
  for (let x = 0; x < canvasWidth; x += sqSide) {
    for (let y = 0; y < canvasHeight; y += sqSide) {
      r = random(0, 255);
      g = random(0, 255);
      b = random(0, 255);
      fill(r, g, b);
      square(x, y, sqSide);
    }
  }  
}