const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground,pig,log,box3,box4,pig2,log2,box5,log3,log4,bird

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(700,320,70,70);   
    box2=new Box(920,320,70,70);
    ground=new Ground(600,height,1200,30); 
    log=new Log(810,300,300,PI/2);
    box3=new Box(700,220,70,70);   
    box4=new Box(920,220,70,70);
    pig2 = new Pig(810,250)
   pig = new Pig(810,350)
   log2=new Log(810,200,300,PI/2);
   box5=new Box(810,150,70,70);
   log3=new Log(760,120,150,PI/7);
   log4=new Log(870,120,150,-PI/7);

   bird = new Bird(500,500)

}

function draw(){
    background("blue");
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig.display()
    log.display() 
    box3.display();
    box4.display();
    pig2.display()
    log2.display() 
    box5.display();
    log3.display()
    log4.display()
    bird .display()
    
}

