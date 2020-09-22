var star,strimage;
var m1,m2,m3,m4; 
function preload(){

  strimage = loadImage("starbucks.jpg");
}

function setup() {
  createCanvas(800,400);
  star= createSprite(400, 200, 50, 50);
  star.addImage("Star",strimage);
  star.scale = 0.25;

  m1= createSprite(100, 100, 10, 10);

  m2= createSprite(200, 100, 10, 10);

  m3= createSprite(300, 100, 10, 10);

  m4= createSprite(400, 100, 10, 10);

}

function draw() {
  background(0); 



  drawSprites();
}