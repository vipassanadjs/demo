const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground1;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);

    box2 = new Box(200,200,50,50)

    ground1 = new Ground(50,790,800,5)
}

function draw(){
    background("cyan");
    Engine.update(engine);
    box1.display();
    box2.display();
    
    ground1.display();
}