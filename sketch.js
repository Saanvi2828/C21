var movingRect,fixedRect;
var object1,object2;

function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(50,200,70,60);
  fixedRect.shapeColor="green";
  fixedRect.velocityX=3;

  movingRect=createSprite(750,200,90,60);
  movingRect.shapeColor="yellow";
  movingRect.velocityX=-3;

  object1=createSprite(400,300,20,20);
  object2=createSprite(500,100,20,20);
}

function draw() {
  background(0); 
  
  object2.x=mouseX;
  object2.y=mouseY;

  bounceOff(movingRect,fixedRect);
  
  if (isTouching(object1,object2)){
    object1.shapeColor="pink";
    object2.shapeColor="blue";
  }
  else {
    object1.shapeColor="green";
    object2.shapeColor="green";
  }

  drawSprites();
}
