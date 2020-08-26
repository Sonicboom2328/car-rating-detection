var car;
var wall;
var speed, weight;




function setup() {
  createCanvas(800,400);
  car= createSprite(100, 200, 50, 20);
  wall= createSprite(700,200,20,400);
  speed=random(55,70);
  weight=random(400,1500);
car.velocityX=speed;
}

function draw() {
  background(0,0,0);  
if (wall.x-car.x < (car.width+wall.width)/2)
{
car.velocityX=0;
var deformation=0.5 * weight * speed * speed/22500;
}
if(deformation >180)
  {
  car.shapecolor= color(255,0,0);
}
if(deformation < 180 && deformation > 100)
{
  car.shapecolor= color(230,230,0);
}
if(deformation<100)
{
  car.shapecolor= color(0,255,0);
}
  drawSprites();
 }