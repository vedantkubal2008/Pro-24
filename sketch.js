
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,Lbody,Rbody,Base,ground
var engine,world



function setup() {
	createCanvas(1600, 700);



	engine = Engine.create();
	world = engine.world;
	var options = {
		isStatic: true
	}
	ground = Bodies.rectangle(800,670,1600,20,options);
	World.add(world,ground);

	//Create the Bodies Here.
	paper = new Paper(300,200);
	Lbody = new Dustbin(990,580,20,120);
	Base = new Dustbin(900,650,180,20);
	Rbody = new Dustbin(810,580,20,120);
	
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("black");

  paper.display();
  Lbody.display();
  Rbody.display();
  Base.display();
 

  fill("yellow");
  rect(ground.position.x,ground.position.y,1600,20);


}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}