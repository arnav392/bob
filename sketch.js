
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
const Body = Matter.Body;

var ground,rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  Engine.run(engine);


    ground=new Ground(600,100,700,100);
    bob1= new paper(450,300,40);
    bob2= new paper(510,300,40);
    bob3= new paper(570,300,40);
    bob4= new paper(630,300,40);
    bob5= new paper(690,300,40);
    
    rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0);
     rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0);
      rope3=new rope(bobObject3.body,roofObject.body,0, 0);
       rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0);
        rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0);
    
    
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  ground.display();
  bob1.display();
  rope1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  
}



