
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var hammer,plane;
var rubber,iron;
var stone;
var sand;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 hammer=new Hammer(10,100);
 rubber=new Rubber(910,470,80);
 stone= new Stone(720,330,100,100);
 plane = new Plane(600,height,1200,20)
 iron = new Iron(300,350);
 sand1 = new Sand(900,430,50);
 sand2 = new Sand(220,430,50);
 sand3 = new Sand(600,430,50);
 sand4 = new Sand(750,430,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  


  hammer.display();
  rubber.display();
  stone.display();
  plane.display();
 iron.display();
 sand1.display();
 sand2.display();
 sand3.display();
 sand4.display();
}



