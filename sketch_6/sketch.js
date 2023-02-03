//Random Walker with Monte Carlo custom distribution 

const canvasWidth = 400;
const canvasHeight = 400;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(30);
  background(200); 
  walker = new Walker();
}

function draw() { 
  walker.render();
}

function monteCarlo() {
  while (true) {
    let r1 = random(-400, 400);
    let probability = r1;
    let r2 = random(-400, 400);

    if (r2 < probability) {
      return r1;
    }
  }
}

class Walker {
  render() {
    let stepSize = monteCarlo();
    this.x = random(-stepSize, stepSize);
    this.y = random(-stepSize, stepSize);
    point(this.x, this.y);
    strokeWeight(5);
  }
}