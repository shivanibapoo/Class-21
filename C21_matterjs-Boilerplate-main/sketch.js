const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var bottomGround;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  bottomGround=new Ground(200, 390, 400, 20);

  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  bottomGround.show();
}

