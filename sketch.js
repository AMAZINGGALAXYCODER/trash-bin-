
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,800);


	engine = Engine.create();
	world = engine.world;


	paper = new crumpledpaper(100,300,50,50);
  grOUnd = new Ground(650,700,1800,20);
  brick1= new bin(1050,664,50,50)
  brick2= new bin(860,664,50,50)
  brick3= createSprite(955,700,245,20)
  

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);

  paper.display();
  grOUnd.display();
  brick1.display();
  brick2.display();
  brick3.display();
  
  drawSprites();
 
}


function keyPressed() {

   if (keyCode === UP_ARROW){

     Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

   }

}



