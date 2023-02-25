//Perlin noise pipeworks

const canvasWidth = 1024;
const canvasHeight = 768;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(100);
  tx = 10;
  ty = 10000;
}

function draw() {   
  let x = map(noise(tx), 0, 1, 0, canvasWidth);
  let y = map(noise(ty), 0, 1, 0, canvasHeight);
  circle(x, y, 50);
  square(x, y, 50);
  tx += 0.01;
  ty += 0.01;
}