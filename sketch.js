
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


//Creating a variable:-
var player;


function preload(){
  backround = loadImage("Backround.jpg")
}

function setup() {
	createCanvas(1100, 400);


	engine = Engine.create();
	world = engine.world;


	   //Create a Ground
	   ground = Bodies.rectangle(width/2, 404, width, 10 , {isStatic:true,restitution:0.1} );
     World.add(world, ground);

    Engine.run(engine);

  //Creating variables:-


  
  //For surface 1:-
  box = new Box(530,259,40,50);
  box1 = new Box1(569,259,40,50);
  box2 = new Box2(609,259,40,50);
  box3 = new Box3(649,259,40,50);
  box4 = new Box4(569,210,40,50);
  box5 = new Box5(609,210,40,50);
  surface1 = new Surface1(590,290,190,10);

  //For Surface 2:-
box6 = new Box6(875,159,40,50);
box7 = new Box7(1000,160,40,50);
box8 = new Box8(916,159,40,50);
box9 = new Box9(958,159,40,50);
box10 = new Box8(916,110,40,50);
box11 = new Box9(958,110,40,50);
surface2 = new Surface2(940,190,210,10);
player = new Player(150,70,45,45);
rope = new Rope(player.body,{x:100 , y:300});
}


function draw() {
  rectMode(CENTER);
  background(backround);

  //Displaying the Sprites:-
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  surface1.display();
  surface2.display();
  player.display();
  rope.display();

  drawSprites();
}	

//Creating mousDragged and mouseReleased function:-

function mouseDragged(){
  Matter.Body.setPosition(player.body,{x:mouseX , y:mouseY})
}

function mouseReleased(){
  rope.fly();
}