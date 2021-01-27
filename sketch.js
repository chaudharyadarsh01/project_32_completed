const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;
var backgroundImg,platform;
var bg = "lightbg.jpg";
var score = 0;

function preload() {
  getBackgroundImg();
}

function setup() {
  createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;



  ground1 = new Ground(500,500,1000,10);
  ground2 = new Ground(410,450,240,10);
  
  polygon1 = new Polygon(110,340,40);

  // five blocks
  block1 = new Block(330,430,40,30,);
  block2 = new Block(370,430,40,30);
  block3 = new Block(410,430,40,30);
  block4 = new Block(450,430,40,30);
  block5 = new Block(490,430,40,30);
  // four blocks
  block6 = new Block(390,400,40,30);
  block7 = new Block(430,400,40,30);
  block8 = new Block(470,400,40,30);
  block9 = new Block(350,400,40,30);
  // three blocks
  block10 = new Block(370,370,40,30);
  block11 = new Block(410,370,40,30);
  block12 = new Block(450,370,40,30);
  // two blocks
  block13 = new Block(390,340,40,30);
  block14 = new Block(430,340,40,30);
  // one block
  block15 = new Block(410,310,40,30);

  slingshot1 = new SlingShot(polygon1.body,{x:100,y:200});
   
}


function draw() {
  if(backgroundImg)
  background(backgroundImg);

  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, 100, 50)
 
  Engine.update(engine);
   
  ground1.display();
  polygon1.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  slingshot1.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();


}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot1.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot1.attach(polygon1.body);
  }
}


async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "lightbg.jpg";
  }
  else{
      bg = "darkbg.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
