const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin;
function preload(){
dustbinImage=loadImage("dustbinimage.png");
}

function setup() {
createCanvas(1200, 1000);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
paper = new Paper(150,540,50);
dustbin = new Dustbin(500,670,50,50);
ground = new Ground(100,750,2500,10);



}


function draw() {
  rectMode(CENTER);
  background("cyan");
  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
}
function keyPressed(){
  if( keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:21,y:-10})
  }
  }
  
  
  
