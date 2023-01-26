//Fireflies [based on Random Walker]

const canvasWidth = 1024;
const canvasHeight = 768;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(60);

  fireflies = [];
  let color = new Color(200, 200, 160);

  for (let i = 0; i < 100; i++) {
    fireflies.push(new Firefly(random(0, canvasWidth), random(0, canvasHeight), color));
  }
}

function draw() {
  background(0, 0, 30);
  fireflies.forEach(ff => {
    ff.step();
    ff.render();
  });
}

class Firefly {
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
    strokeWeight(5);
  }
}

class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}