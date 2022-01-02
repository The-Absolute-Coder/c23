const Engine = Matter.Engine;
const World= Matter.World;
const Bodies  = Matter.Bodies;

//Create namespace for Engine
//Create namespace for World
//Create namespace for Bodies
//Create namespace for Body
var engine,world;
var ball,ground;

function setup() {
  createCanvas(400,400);
//create the engine
  //Add world to the engine
  engine = Engine.create();
  world = engine.world;

  
   var ball_options = {
    restitution: 1.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ground = Bodies.rectangle(200,399,800,10,ground_options)
  World.add(world,ground)
  
  

  
  
}


function draw() 
{
  background("blue");
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  ellipseMode(RADIUS);
  
  rect(ground.position.x,ground.position.y,800,10)
  rectMode(CENTER);
  fill("red")
console.log(ground.position.y)
  
  
}

