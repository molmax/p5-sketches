//Thy Food Consumed

const canvasWidth = 400;
const canvasHeight = 400;
const rectSide = 15;
const randOffset = 10;
const frameRateValue = 60;
const bckgColor = 120;
let heroX = 0;
let heroY = canvasHeight / 2;
let heroWidth = rectSide;
let heroHeight = rectSide;
let heroSpeed = 1;
let foodX = 0;
let foodY = 0;
let thyFoodConsumed = false;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(frameRateValue);
}

function draw() {
  background(bckgColor);
  
  if (heroX > canvasWidth) {
    heroX = 0;
    heroWidth = rectSide;
    thyFoodConsumed = false;
  }
  
  if(heroX == 0) {
    randX = random(randOffset, canvasWidth - randOffset);
    foodX = randX - randX % 1; //Yeah, I know
    foodY = canvasHeight / 2;
  }

  if (!thyFoodConsumed) {
    rect(foodX, foodY, rectSide); 
  }
  
  heroX = heroX + heroSpeed;
  
  if(heroX == foodX) {
    thyFoodConsumed = true;
    heroWidth = heroWidth + rectSide
  }

  rect(heroX, heroY, heroWidth, heroHeight);
}