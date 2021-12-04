

function setup() {
  createCanvas(400,400);
ball = createSprite(200,200,60,60)



}

function draw() 
{
  background("Gray");
ball.shapeColor = "Red"

if(keyDown(RIGHT_ARROW)){
  ball.position.x  += 5
}

if(keyDown(LEFT_ARROW)){
  ball.position.x  += -5
}


drawSprites()
}




