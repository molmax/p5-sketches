const canvasWidth = 800;
const canvasHeight = 600;
let squareX = 0;
let squareY = 200;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(60);
}

function draw() {
  background(120);
  if (squareX > canvasWidth) {
    squareX = 0;
  }
  squareX = squareX + 1;
  rect(squareX, squareY, 9);
}