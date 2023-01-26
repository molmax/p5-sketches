const canvasWidth = 400;
const canvasHeight = 400;

function setup() {
  w = new Walker(canvasHeight / 2, canvasWidth / 2);
  createCanvas(canvasWidth, canvasHeight);
  background(0);
  frameRate(60);
}

function draw() {
  w.step();
  stroke(255, 244, 0)
  strokeWeight(3);
  w.render();
}

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  step() {
    this.x += random(-1, 1);
    this.y += random(-1, 1)
  }

  render() {
    point(this.x, this.y);
  }
}