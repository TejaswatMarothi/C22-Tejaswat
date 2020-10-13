const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var myengine,myworld;
var ground,ball;
function setup() {
  createCanvas(400,400);
  myengine=Engine.create();
  myworld=myengine.world;

  var ground_options={
    isStatic:true
  }
ground= Bodies.rectangle(200,390,200,10,ground_options);
World.add(myworld,ground);

var ball_options={
  restitution:2
}
ball= Bodies.circle(200,100,20,ball_options);
World.add(myworld,ball);
//console.log(object.position.x);
//console.log(object.position.y);

}

function draw() {
  background("cyan");
  Engine.update(myengine);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  circle(ball.position.x,ball.position.y,20);
} 