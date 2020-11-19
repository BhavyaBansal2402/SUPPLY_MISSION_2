var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var D_Sprite, L_Sprite, R_Sprite;
var D_lineBody, L_lineBody, R_lineBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}



function setup()
{
	createCanvas(800, 700);

	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	D_Sprite=createSprite(width/2, 650, 200, 20);
	D_Sprite.shapeColor=color('red');

	L_Sprite=createSprite(300, 610, 20, 100);
	L_Sprite.shapeColor=color('red');

	R_Sprite=createSprite(500, 610, 20, 100);
	R_Sprite.shapeColor=color('red');

	engine = Engine.create();
	world = engine.world;


	var PB_options =
	{
		isStatic: false,
		restitution: 0.6
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , PB_options);
	World.add(world, packageBody);
	

	var G_options =
	{
		isStatic: true
	}
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , G_options);
	World.add(world, ground);
	 

	var D_options =
	{
		isStatic: true,
		restitution: 0
	}

	D_lineBody = Bodies.rectangle(width/2, 650, 200, 20, D_options);
	World.add(world, D_lineBody);


	var L_options =
	{
		isStatic: true,
		restitution: 0
	}

	L_lineBody = Bodies.rectangle(300, 610, 20, 100, L_options);
	World.add(world, L_lineBody);


	var R_options =
	{
		isStatic: true,
		restitution: 0
	}

	R_lineBody = Bodies.rectangle(500, 610, 200, 100, R_options);
	World.add(world, R_lineBody);
  
}



function draw() 
{
  rectMode(CENTER);

  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  D_Sprite.x= D_lineBody.position.x 
  D_Sprite.y= D_lineBody.position.y 
  
  L_Sprite.x= L_lineBody.position.x 
  L_Sprite.y= L_lineBody.position.y 

  R_Sprite.x= R_lineBody.position.x 
  R_Sprite.y= R_lineBody.position.y 

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW)
 {
	Engine.run(engine);

	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
 }
 
}