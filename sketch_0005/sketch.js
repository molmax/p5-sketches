//Paint splatter with normal distribution

const canvasWidth = 400;
const canvasHeight = 400;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(0);
  frameRate(2);
}

function draw() {
  let meanX = random(10, canvasWidth - 10);
  let meanY = random(10, canvasHeight - 10);
  let sd = random(5, 20);

  let r = randomGaussian(220, 30);
  let g = randomGaussian(10, 10);
  let b = randomGaussian(10, 10);

  for (let i = 0; i < 50; i++) {
    let x = randomGaussian(meanX, sd);
    let y = randomGaussian(meanY, sd);
    let d = random(1, 3);
    let alpha = random(70, 1000);
    
    fill(r, g, b, alpha);
    noStroke();
    ellipse(x, y, d, d);
  }
}
