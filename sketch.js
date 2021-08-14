var bomb , coin , enrg ,pathImg, power , runnerImg , leftboundary , rightboundry
function preload(){
  //pre-load images
runnerImg = loadAnimation("Runner-1.png","runner-2.png")
pathImg = loadImage("path.png")

bomb = loadImage("bomb.png")
coin = loadImage("coin.png")
enrg = loadImage("energyDrink.png")
power = loadImage("power.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
 
  
  runner = createSprite(200,200);
  runner.addAnimation("running",runnerImg);
  runner.scale = 0.1;  

  


}

function draw() {
  // moving backgrond 
    
     if (path.y > 400)
     {
      path.y = 0 
     }
 
   runner.x = World.mouseX;

   if( runner.x >= 300)
   {
    runner.x = 299
   }

   if( runner.x <= 100)
   {
    runner.x =  99
   }

  drawSprites()
}
