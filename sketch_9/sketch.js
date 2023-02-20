//Blobs are kind of raindrops

canvasWidth = 800;
canvasHeight = 800;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  blobs = [];

  for (let i = 0; i < 70; i++) {
    blobs.push(new Blob(
      createVector(random(0, canvasWidth - 1), random(-10, -1000)), 
      createVector(0, 0),
      createVector(0  , 0.1)));
  }
}

function draw() {
  background(51, 51, 153);
  blobs.forEach(blob => {
    blob.update();
    blob.show();
  })
}

class Blob {
   location;
   velocity;
   acceleration;
   topSpeed = 10;

   constructor(location, velocity, acceleration) {
    this.location = location;
    this.velocity = velocity;
    this.acceleration = acceleration;
   }

   update() {
    if (this.velocity.y > this.topSpeed) {
      this.velocity.y = this.topSpeed;
    }
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity); 
   }

   show() {
    if (this.location.y > canvasHeight) {
      this.location.x = random(0, canvasWidth - 1);
      this.location.y = random(-10, -1000);
      this.velocity.y = 0;
    }
    fill(153, 204, 255);
    ellipse(this.location.x, this.location.y, 5, 10);
   }
}
