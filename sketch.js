
const Engine1 = Matter.Engine;
const World1 = Matter.World;
const Bodies1 = Matter.Bodies;
const Body1 = Matter.Body;

var img;
var bin,line;
function preload(){
img=loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine1.create();
	world = engine.world;

	//Create the Bodies Here.
	Ball = new Ball(200,645);
	Ground = new Ground(800,650,1600,10);
	Engine1.run(engine);

	wall1 = new Bath(875,555,8,200);
	wall2 = new Bath(725,555,8,200);
	wall3 = new Bath(800,640,158,8);

	wall4 = new Bath(1175,555,8,200);
	wall5 = new Bath(1025,555,8,200);
	wall6 = new Bath(1100,640,158,8);

	wall7 = new Bath(1475,555,8,200);
	wall8 = new Bath(1325,555,8,200);
	wall9 = new Bath(1400,640,158,8);
	
	bin = createSprite(800,530,308,70);
	bin.addImage(img)
	bin.scale = 0.7

	bin = createSprite(1100,530,308,70);
	bin.addImage(img)
	bin.scale = 0.7

	bin = createSprite(1400,530,308,70);
	bin.addImage(img)
	bin.scale = 0.7

}

function draw() {
  rectMode(CENTER);
  background(0);
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  Ball.display();
	Ground.display();
	keyp();
	if((Ball.body.position.x>726)&&(Ball.body.position.x<875)&&(Ball.body.position.y>575))

	{
		fill("white");
		textSize(50);
		text("you won",800,270)
	}
	if((Ball.body.position.x>875))
	{
		fill("white");
		textSize(50);
		text("you lost",800,270)
	}
//	paper.x = all.body.position.x;
//paper.y = Ball.body.position.y;
  drawSprites();
  
  fill("white");
  textSize(23);
  text("WHAT IS: 6+6",800,100);
  text("12",800,670);
  text("8",1100,670);
  text("17",1400,670);
}

function keyp(){	
if (keyDown("up"))	{
Body1.applyForce( Ball.body, {x: Ball.body.position.x, y: Ball.body.position.y}, {x:0.03, y: -0.05});

}
}