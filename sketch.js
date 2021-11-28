const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

//Variables para los cuerpos 
var bottom_ground;//Suelo inferior 
var top_ground; //Suelo superior 
var left_ground; //Suelo izquierdo 
var rigth_ground; //Suelo derecho
var ball; 
var btn1,btn2;

function setup() {
  createCanvas(400,400);

  //Motor físico 
  engine = Engine.create();
  
  //Se crea el nuevo mundo 
  world = engine.world;
  //En el setup 
  btn1= createImg('right.png');
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  //Guardar clase (molde) en las variables y asignar propiedades 
  bottom_ground = new Ground(200,390,400,20);
  top_ground = new Ground(200,10,400,20);
  left_ground = new Ground(10,200,20,400);
  rigth_ground = new Ground(390,200,20,400);
  var ball_options = {
    restitution: 0.95
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(0);
  
  //Se actualiza motor físico
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  //Mostrar cuerpos con función show 
  bottom_ground.show();
  top_ground.show();
  left_ground.show();
  rigth_ground.show();
}
//Fuera de la función draw 
function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}

