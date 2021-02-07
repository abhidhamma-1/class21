var fixedRect, movingRect;
var ball1 , ball2;
function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(600, 400, 50, 80);

  fixedRect.shapeColor = "green";

  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);

  movingRect.shapeColor = "green";

  movingRect.debug = true;

ball1 = createSprite(500,150,100,50);

ball2 = createSprite(350,100,110,60);

ball1.shapeColor="green";

ball2.shapeColor="green";

}

function draw() {
  background(0,0,0);

  movingRect.x = World.mouseX;

  movingRect.y = World.mouseY;

  if (sam(ball1,movingRect)){
    movingRect.shapeColor = "red";
    ball1.shapeColor = "red";   
  }
else{
  movingRect.shapeColor = "green";
 ball1.shapeColor = "green";
}
  drawSprites();
}
 function sam(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x -object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    &&object2.y - object1.y <object2.height/2 + object1.height/2) {
 return true;
}
else {
 return false
}

 }





