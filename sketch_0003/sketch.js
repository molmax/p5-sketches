//Random Walker

const canvasWidth = 400;
const canvasHeight = 400;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(0);
  frameRate(60);

  wGreen = new Walker(canvasHeight / 2, canvasWidth / 2, new Color(255, 244, 0));
  wYellow = new Walker(canvasHeight / 2 - 100 , canvasWidth / 2 + 100, new Color(0, 255, 0));
  wRed = new Walker(canvasHeight / 2 + 100 , canvasWidth / 2 - 100, new Color(255, 0, 0));

  walkers = [wGreen, wYellow, wRed];
}

function draw() {
  walkers.forEach(w => {
    w.step();
    w.render();
  });
}

class Walker {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  step() {
    this.x += random(-1, 1);
    this.y += random(-1, 1)
  }

  render() {
    point(this.x, this.y);
    stroke(this.color.r, this.color.g, this.color.b);
    strokeWeight(3);
  }
}

class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}