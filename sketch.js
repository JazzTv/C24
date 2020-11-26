const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, box;
var ground;
var box2, box3, box4, box5;

var pig1, pig2;
var log1, log2, log3, log4;
var bird1;

// var x, y,width1,height1;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

ground  = new Ground (width/2,height - 10,width,height/20);
 box = new Box (700,320,70,70);
 box2 = new Box (920,320,70,70);
 pig1 = new pig (810,350);
 log1 = new log (810,260,300,PI/2);

 box3 = new Box (700,240,70,70);
 box4 = new Box (920,240,70,70);
 pig2 = new pig (810,220);
 log2 = new log (810,180,300,PI/2);

 box5 = new Box (810,160,70,70);
 log3 = new log (760,120,150,PI/7);
 log4 = new log (870,120,150,-PI/7);

 bird1 = new bird (100,220);
}

function draw() {
  background(220,255,255);  

  Engine.update(engine)

  box.display ();
  box2.display ();
  ground.display();
  pig1.display ();
  log1.display ();

  box3.display ();
  box4.display ();
  pig2.display ();
  log2.display ();

  box5.display ();
  log3.display ();
  log4.display ();
  
  bird1.display ();
}