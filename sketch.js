const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ourEngine, ourWorld,ground,ball;


function setup(){

    createCanvas(400,400);
    ourEngine = Engine.create();
    ourWorld = ourEngine.world; 

    var ball_options={
     restitution:1.0
    }
    ball=Bodies.circle(200,100,20,ball_options);
    World.add(ourWorld,ball);

    

    var ground_options = {
        isStatic:true
    }
     
    ground= Bodies.rectangle(200,390,200,20,ground_options);
    World.add(ourWorld,ground);
     
    
}

function draw(){
    background(0);
    Engine.update(ourEngine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20);

   
}