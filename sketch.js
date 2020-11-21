
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
dustbinImage = loadImage("dustbin.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,650,20)
	ground = new Ground(400,680,800,5)
	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  ground.display();
  drawSprites();
 
image(dustbinImage, 550, 360)


}
 



  function keyPressed(){
	if(keyCode == UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-45})
	}}
