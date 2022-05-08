const canvasWidth = 800;
const canvasHeight = 600;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    // frameRate(1);
}

function draw() {
    // background(Math.floor(Math.random() * 256));
    for(let i = 0; i < canvasWidth; i = i + 6) {
        point(i, canvasHeight / 2);
    }
    line(0, canvasHeight / 2, canvasWidth, 0);
    square(50, 50, 100, 200);
    rect(200, 100, 50);
    ellipse(150, 200, 150, 100);
    circle(300, 150, 75);
    triangle(250, 100, 350, 200, 250, 250);
    triangle(250, 250, 350, 200, 250, 300);
    quad(400, 200, 600, 120, 600, 500, 500, 600);
}