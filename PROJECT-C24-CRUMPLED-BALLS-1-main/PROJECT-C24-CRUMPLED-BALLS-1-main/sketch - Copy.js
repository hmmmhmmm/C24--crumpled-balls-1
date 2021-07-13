
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
    var canvas = createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paper1=new Paper(300,400,50,50);

   ground = new Ground(600,680,1200,20);
   
   box1 = new Box(1000,620,220,20);
	 box2 = new Box(1100,570,20,100);
	 box3 = new Box(900,570,20,100);
	 
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
   paper1.display();
   ground.display();
   box2.display();
   box3.display();
   box1.display();

  drawSprites();
 
}

function keyPressed()	{
  if(keyCode===UP_ARROW)	{
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:470,y:-470});

  }
}