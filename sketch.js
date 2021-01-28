var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400,100,50,80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  fixedRect.velocityY=4;
  movingRect.velocityY=-4;
}

function draw() {
  background(0,0,0);  

  collision(fixedRect,movingRect);

  drawSprites();
}