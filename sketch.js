
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
	stand= new Ground(350,150,500,20);
	obj= new ball(200,350,40);
	constrain=new Chain(230,180,80,PI/2);



	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(225);

  
  stand.display();
  obj.display();
  constrain.display();





  line(obj.body.position.x,objd.body.position.y,constrain.body.position.x,constrain.body.position.y);
 
}



