
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}


var paper,ground;
var d1,d2,d3



function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper= new Ball(150,400,20)
ground= new Ground(600,490,1200,10)
d1= new Dustbin(1000,480,300,10)
d2= new Dustbin(850,400,10,150)
d3 = new Dustbin(1150,400,10,150)


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
 paper.display()
 ground.display()
 d1.display()
 d2.display()
 d3.display()
}



function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55})
}
if(keyCode === DOWN_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:-55,y:-55})
}
}