
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
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
  background(0);
  paper.display();
  ground.display();
  drawSprites();
  left = createSprite(330,620,20,100);
left.shapeColor="red"


right = createSprite(480,620,20,100);
right.shapeColor="red"
bottom = createSprite(405,660,150,20);
bottom.shapeColor="red"

leftbody = Bodies.rectangle(330,620,20,100);
World.add(world,leftbody );
rightbody = Bodies.rectangle(480,620,20,100);
World.add(world,rightbody );
bottombody = Bodies.rectangle(405,660,150,30);
World.add(world,bottombody);
}
 



  function keyPressed(){
	if(keyCode == UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45})
	}}
