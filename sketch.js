var fixedRect, movingRect;

function setup()
{
  createCanvas(800,800);
  fixedRect=createSprite(200,200,50,50); 
  fixedRect.shapeColor="red";
  fixedRect.debug=true;

  movingRect=createSprite(300,200,50,50); 
  movingRect.shapeColor="red";
  movingRect.debug=true;
  
}


function draw()
{
background(" gold ");

movingRect.x=mouseX;
movingRect.y=mouseY;

if(movingRect.x - fixedRect.x  < fixedRect.width/2 + movingRect.width/2 && 
   fixedRect.x   - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
   movingRect.y - fixedRect.y  < fixedRect.height/2 + movingRect.height/2 && 
   fixedRect.y   - movingRect.y < fixedRect.height/2 + movingRect.height/2)
{
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
}
else
{
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
}

drawSprites();
}