//Chase the pointer

canvasWidth = 800;
canvasHeight = 800;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  runners = [];

  for (let i = 0; i < 1; i++) {
    runners.push(new Runner());
  }
}

function draw() {
  background(200);
  runners.forEach(runner => {
    runner.update();
    runner.checkEdges();
    runner.render();
  });
}

class Runner {
   location;
   velocity;
   acceleration;
   topSpeed = 5;

   constructor() {
    this.location = createVector(random(canvasWidth), random(canvasHeight));
    this.velocity = createVector(0, 0);
   }

   update() {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.location);
  
    dir.normalize();
    dir.mult(0.5);
    
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
    this.location.add(this.velocity); 
   }

   render() {
    stroke(0);
    fill(100);
    ellipse(this.location.x, this.location.y, 30, 30);
   }

   checkEdges() {
    if (this.location.x > canvasWidth) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = canvasWidth;
    }
 
    if (this.location.y > canvasHeight) {
      this.location.y = 0;
    }  else if (this.location.y < 0) {
      this.location.y = canvasHeight;
    }
  }
}
