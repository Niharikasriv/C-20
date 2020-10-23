var movingRect, fixedRect;



function setup() {
  var canvas = createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(800,200,30,50);
  movingRect.shapeColor = "green";

}

function draw() {
background(0);  

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
  fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
  movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 &&
  fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 ){
    fixedRect.shapeColor ="red";
    movingRect.shapeColor ="red";
  }

  else{
    fixedRect.shapeColor ="green";
    movingRect.shapeColor ="green";

  }
  drawSprites();
}