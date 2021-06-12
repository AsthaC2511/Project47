const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//gamestates
var INTRO=1;
var STORY=2;
var PLAY=3;
var RESTART=4;
var END=0;
var gameState=INTRO;

var kai,kai1,kai_running,kai_jumping ,kai_frozen,soldiers;
var space1,ground;
var SoldierGroup,CoinGroup,soldier_running,coin_rotating;
var AirObstaclegroup,obstacle1,obstacle2,obstacle3;
var stop_watch,coin_image;
var restart_image,life_image,restart_button,replay_button;
var BoxGroup,box1_image,box2_image,box3_image;
var winning_image,ending_image;
var awesome_image,excellent_image,amazing_image;
var quote_image;
var text2_image;
var trophy_image,endingText_image;
var coinSound,jumpSound,levelUpSound,BoxDestroySound,lifeLostSound,restartSound,startSound,rocketSound,winSound,endSound;


var count=0;
var survivalTime=0;

function preload()
{
  kai1=loadAnimation("kai1.png");
  kai_running=loadAnimation("kai2.png","kai4.png","kai3.png");
  kai_jumping=loadAnimation("kai5.png");
  kai_frozen=loadAnimation("kai2.png");

  space1=loadAnimation("background.png");
  space2=loadAnimation("background2.png");
  space3=loadAnimation("background3.png");
  ending_image=loadAnimation("ending.png");
  winning_image=loadAnimation("winning.png");

  quote_image=loadImage("quote.png");
  text2_image=loadImage("text2.png");

  soldier_running=loadAnimation("soldier4.png","soldier1.png","soldier2.png","soldier3.png","soldier5.png","soldier6.png");
  coin_rotating=loadAnimation("coin1.png","coin2.png","coin3.png","coin4.png","coin5.png","coin6.png");
  coin_image=loadImage("coin1.png");
  box1_image=loadImage("box3.png");
  box2_image=loadImage("boxes1.png");
  box3_image=loadImage("boxes2.png");

  stop_watch=loadImage("stopwatch.png");
  story_image=loadImage("story1.png");

  restart_image=loadImage("restart.png");
  restart_button=loadImage("restartbutton.png");
  life_image=loadImage("heart.png");
 
  story_image2=loadImage("story2.jpg");
  intro_text=loadImage("text.png");
  intro1=loadImage("intro.jpg");
  intro_button=loadImage("introbutton.png");

  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");

  

  trophy_image=loadImage("trophy.png");

  awesome_image=loadImage("awesome.png");
  excellent_image=loadImage("excellent.png");
  amazing_image=loadImage("amazing.png");

  endingText_image=loadImage("ending text.png");
  replay_button=loadImage("replayButton.png");
  

  coinSound=loadSound("coin.mp3.wav");
  jumpSound=loadSound("jump.wav");
  levelUpSound=loadSound("levelUp.wav");
  boxDestroySound=loadSound("box.wav");
  lifeLostSound=loadSound("lifelost.wav");
  restartSound=loadSound("restart.wav");
  
  rocketSound=loadSound("rocket.mp3");
  winSound=loadSound("win.wav");
  endSound=loadSound("end.wav");
  startSound=loadSound("start.wav");
  
}

function setup() 
{
	createCanvas(1600, 600);
	engine = Engine.create();
	world = engine.world;

//Create the Bodies Here.
  story1=createSprite(800,300,1600,600);
  story1.addImage(story_image);
  story1.scale=0.79;
  
  blank_intro=createSprite(800,300,1600,600);
  blank_intro.addImage(intro1);
  blank_intro.scale=2.8;
  
  button1=createSprite(800,500,100,100);
  button1.addImage(intro_button);
  button1.scale=0.5;

  text1=createSprite(700,250,800,400);
  text1.addImage(intro_text);

  story2=createSprite(800,300,1600,600);
  story2.addImage(story_image2);
  story2.scale=2;

  quote=createSprite(400,300,40,40);
  quote.addImage(quote_image);
  quote.scale=1.5;
  
  text2=createSprite(1100,500,40,40);
  text2.addImage(text2_image);
  text2.scale=0.8;
  
 
  
  backGround=createSprite(800,300,1600,600);
  backGround.addAnimation("space1",space1);
  backGround.addAnimation("space2",space2);
  backGround.addAnimation("space3",space3);
  
  backGround.scale=1.5;
  backGround.velocityX=-4;
  backGround.x=backGround.width/2;

  stopWatch=createSprite(990,50,40,40);
  stopWatch.addImage(stop_watch);
  stopWatch.scale=0.4;

  coinImage=createSprite(160,50,40,40);
  coinImage.addImage(coin_image);
  coinImage.scale=0.8;
  
  backGround2=createSprite(800,300,1600,600);
  backGround2.addAnimation("ending_image",ending_image);
  backGround2.addAnimation("winning_image",winning_image);
  backGround2.scale=2; 
  
  endingText=createSprite(700,250,800,400);
  endingText.addImage(endingText_image);

  replayButton=createSprite(800,500,40,40);
  replayButton.addImage(replay_button);
  replayButton.scale=0.5;

  awesome=createSprite(800,200,40,40);
  awesome.addImage(awesome_image);
  awesome.scale=1.5;

  excellent=createSprite(800,200,40,40);
  excellent.addImage(excellent_image);
  excellent.scale=1.5;

  amazing=createSprite(800,300,40,40);
  amazing.addImage(amazing_image);
  amazing.scale=0.5;

  life1=createSprite(760,50,40,40);
  life1.addImage(life_image);
  life1.scale=0.5;

  life2=createSprite(820,50,40,40);
  life2.addImage(life_image);
  life2.scale=0.5;

  restartImage=createSprite(800,300,1600,600);
  restartImage.addImage(restart_image);
  restartImage.scale=0.4;

  restartButton=createSprite(800,500,40,40);
  restartButton.addImage(restart_button);
  restart_image.scale=1.5;

  kai=createSprite(100,590,100,200);
  kai.addAnimation("kai_standing",kai1);
  kai.addAnimation("kai_running",kai_running);
  kai.addAnimation("kai_jumping",kai_jumping);
  kai.addAnimation("kai_frozen",kai_frozen);
  kai.scale=0.8;

  ground=createSprite(800,580,1600,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  invisibleGround=createSprite(800,595,1600,10);
  invisibleGround.visible=false;

  trophy=createSprite(1500,515,40,40);
  trophy.addImage(trophy_image);
  trophy.scale=1.5;

//creating obstacle and coin group
  SoldierGroup=createGroup();
  CoinGroup=createGroup();
  AirObstacleGroup=createGroup();
  BoxGroup=createGroup();

  Engine.run(engine);

}

function draw() {
  
  background(255);
//gameState is INTRO

  
    
if(gameState===INTRO)
 { 
    startSound.play();
   
    text1.visible=true;
    button1.visible=true;

    kai.visible=false;
    backGround.visible=false;
    SoldierGroup.visible=false;
    story1.visible=false;
    story2.visible=false;
    stopWatch.visible=false;
    coinImage.visible=false;
    restartImage.visible=false;
    life1.visible=false;
    life2.visible=false;
    restartButton.visible=false;
    trophy.visible=false;
    awesome.visible=false;
    amazing.visible=false;
    excellent.visible=false;
    quote.visible=false;
    text2.visible=false;
    endingText.visible=false;
    backGround2.visible=false;
    replayButton.visible=false;
    survivalTime=0;
  
 if(mousePressedOver(button1))
 {
    story1.visible=true;

    button1.visible=false;
    blank_intro.visible=false;
    text1.visible=false;
    story2.visible=false;
    stopWatch.visible=false;
    coinImage.visible=false;
    restartImage.visible=false;
    life1.visible=false;
    life2.visible=false;
    restartButton.visible=false;
    trophy.visible=false;
    awesome.visible=false;
    excellent.visible=false;
    quote.visible=false;
    text2.visible=false;
    endingText.visible=false;
    backGround2.visible=false;
    replayButton.visible=false;
    amazing.visible=false;
    survivalTime=0;
    //changing gameState
    gameState=STORY;
 }
}  
//gameState chnages to STORY
if(gameState===STORY ){

 if(keyDown("ENTER"))
 {
    //images that need to visible
    story2.visible=true;
    quote.visible=true;
    text2.visible=true;
    //images that dont need to be visible
    story1.visible=false;
    blank_intro.visible=false;
    button1.visible=false;
    text1.visible=false;
    stopWatch.visible=false;
    coinImage.visible=false;
    restartImage.visible=false;
    life1.visible=false;
    life2.visible=false;
    restartButton.visible=false;
    trophy.visible=false;
    awesome.visible=false;
    excellent.visible=false;
    endingText.visible=false;
    backGround2.visible=false;
    replayButton.visible=false;
    amazing.visible=false;
    
 }


 if(keyDown("space"))
 {
  //changing gameState to PLAY
    gameState=PLAY;
 }
}
//gameState changes to PLAY
if(gameState===PLAY){

  
   spawnBoxes();
    spawnObstacles();
    spawnCoins();
    spawnAirObstacles();
  
    //survivalTime=Math.ceil(frameCount/30);
    survivalTime=survivalTime+Math.round(getFrameRate()/60);
    story2.visible=false;
    restartImage.visible=false;
    kai.visible=true;
    stopWatch.visible=true;
    backGround.visible=true;
    SoldierGroup.visible=true;
    CoinGroup.visible=true;
    BoxGroup.visible=true;
    coinImage.visible=true;
    life1.visible=true;
    life2.visible=true;
    restartButton.visible=false;
    
    trophy.visible=false;
    awesome.visible=false;
    excellent.visible=false;
    amazing.visible=false;
    quote.visible=false;
    text2.visible=false;
    endingText.visible=false;
    backGround2.visible=false;
    replay_button.visible=false;
    
if(kai.collide(invisibleGround))
 {
    kai.changeAnimation("kai_running");
 } 

 if(keyDown("space") && kai.isTouching(ground))
 {
    jumpSound.play();
    kai.changeAnimation("kai_jumping");
    kai.velocityY=-28;
 } 

 if(keyDown("d")){
    boxDestroySound.play();
    BoxGroup.destroyEach();
 }

if(survivalTime<100)
 {
   //changing background image
    backGround.changeAnimation("space1",space1);
    backGround.scale=2;
 }

if(survivalTime>101 && survivalTime<200)
 {
   //changing background image and scaling it to fit canvas
    backGround.changeAnimation("space2",space2);
    backGround.scale=0.8;
    if(survivalTime>101 && survivalTime<103){
       levelUpSound.play();
    }
 }

 if(survivalTime>49 && survivalTime<55){
    excellent.visible=true;
 }

 if(survivalTime>149 && survivalTime<155){
    awesome.visible=true;
 }

 if(survivalTime>249 && survivalTime<255){
    amazing.visible=true;
 }

if(survivalTime>201 && survivalTime<300)
 {
   //changing background image and scaling it to fit canvas
    backGround.changeAnimation("space3",space3);
    backGround.scale=2.8;
    if(survivalTime>201 && survivalTime<203){
       levelUpSound.play();
    }
 }
 if(survivalTime>295){
   CoinGroup.destroyEach();
   SoldierGroup.destroyEach();
   AirObstacleGroup.destroyEach();
   BoxGroup.destroyEach();
 }
 
 if(survivalTime>300){
    trophy.visible=true;
   
   ground.velocityX=0;
   kai.velocityX=8;
   
   if(kai.isTouching(trophy)){
      survivalTime=300;
      
     kai.velocityY=0;
      kai.velocityX=0;
      kai.changeAnimation("kai_frozen");
      if(keyDown("RIGHT_ARROW")){
        
     backGround2.visible=true;
      backGround2.changeAnimation("winning_image",winning_image);
      
      backGround.visible=false;
      winSound.play();
      
         gameState=END;
      }
   }
   
 }

if((SoldierGroup.isTouching(kai)||BoxGroup.isTouching(kai)||AirObstacleGroup.isTouching(kai))&&kai.scale>0.6)
 {
   //changing the size of kai giving a second chance to continue
   lifeLostSound.play();
    life1.lifetime=0;
    kai.scale=0.6;
    SoldierGroup.destroyEach();
    BoxGroup.destroyEach();
    AirObstacleGroup.destroyEach();
    
    
 }
 
if(kai.scale<0.7&&(SoldierGroup.isTouching(kai)||BoxGroup.isTouching(kai)||AirObstacleGroup.isTouching(kai)))
 {
    
   
    kai.scale=0;
    life2.lifetime=0;
    CoinGroup.destroyEach();
    BoxGroup.destroyEach();
    SoldierGroup.destroyEach();
    AirObstacleGroup.destroyEach();
    backGround.visible=false;
    gameState=RESTART;
  
 }
 
 


if(CoinGroup.collide(kai))
 {
    count=count+1;
    coinSound.play();
 }

if(backGround.x<0)
 {
    backGround.x=backGround.width/2;
 }

if(ground.x<0)
 {
    ground.x=ground.width/2;
 }

 }

 if(gameState===RESTART){
    console.log(gameState);
   // restartSound.play();
   kai.velocityY=kai.velocityY+1;
   kai.x=100;
   kai.y=590;
   kai.collide(invisibleGround);
    restartImage.visible=true;
    restartButton.visible=true;
    story1.visible=false;
    if(mousePressedOver(restartButton) ){
      reset();
    }
} 

if(gameState===END){
   
   kai.visible=false;
   trophy.visible=false;
   stop_watch.visible=false;
   coin_image.visible=false;
   life1.lifetime=0;
   life2.lifetime=0;
  
   
   if(keyDown("ENTER")){
    endSound.play();
    backGround2.changeAnimation("ending_image");
    backGround2.scale=1.5;
     endingText.visible=true;
     replayButton.visible=true;
     
     if(mousePressedOver(replayButton)){
     replay();
   }
   }

   

}


  
kai.velocityY=kai.velocityY+1;
kai.collide(invisibleGround);


drawSprites();

// giving text in different gameStates
if(gameState===STORY )
 {
    fill("white");
    textSize(30);
    text("Press Enter to continue...",1200,580);
 }

if(gameState===PLAY )
 {
    fill("white");
    textSize(35);
    textFont("Georgia");
    text("Coins Collected:"+count,200,65);
    text("Survival Time:"+survivalTime,1040,65);
    text("Lives left",580,65);
   //  if(life1.visible!=false){
   //     text("1 Life Left",560,65);
   if(survivalTime>0 && survivalTime<20){
      fill("white");
      textSize(35);
      textFont("Georgia");
    text("press'd' to break the boxes",400,150);


 }
 if(survivalTime>20 && survivalTime<100)
 {
   fill("white");
   textSize(45);
   textFont("Georgia");
 text("Stage 1",700,150);
 }

 if(survivalTime>101 &&survivalTime<200){
   fill("white");
   textSize(45);
   textFont("Georgia");
 text("Stage 2",700,150);

 }

 if(survivalTime>201 && survivalTime<299){
   fill("white");
   textSize(45);
   textFont("Georgia");
 text("Final Stage",700,150);
 }
if(kai.isTouching(trophy)){
 fill("black");
   textSize(45);
   textFont("Georgia");
   text("press the right arrow key to finish the game",200,550);
   if(keyDown(RIGHT_ARROW)){
   gameState=END;
   }
}
   


}

   if(gameState===END){
       fill("white");
       textSize(45);
       textFont("Georgia");
       text("press enter...",1000,500);
       if(mousePressedOver(replayButton)){
         replay();
       }
    }

 if(gameState===RESTART){
   fill("white");
   textSize(35);
   textFont("Georgia");
   text("Oops!! Looks like you ran out of lives...",450,65);
   text("No worries, click on the restart icon below to start again",400,100);

    }
    
 }
 




function spawnBoxes(){

   if(frameCount% 250===0)
   {
      boxes=createSprite(1600,515,20,50);
      boxes.velocityX=-(8+2*count/100);
      boxes.scale=1;
      boxes.lifetime=200;
      rand=Math.round(random(1,3));

      switch(rand){
         case 1:
            boxes.addImage(box1_image);
            break;
         
         case 2:
            boxes.addImage(box2_image);
            break;

         case 3:
            boxes.addImage(box3_image);
            break;
      }
      BoxGroup.add(boxes);
   }
}

function spawnObstacles(){

if(frameCount % 450 === 0) 
 {
    soldiers=createSprite(1600,515,20,50);
    soldiers.addAnimation("soldier_running",soldier_running);
    soldiers.scale=0.5;
    soldiers.velocityX =-(9+2*count/50);
    //assign scale and lifetime to the obstacle           
    soldiers.lifetime =200;
    //add each obstacle to the group
    SoldierGroup.add(soldiers);
 }
}

function spawnCoins(){

if(frameCount %20===0)
 {
    coins=createSprite(1600,random(280,560),100,200);
    coins.addAnimation("coin_rotating",coin_rotating);
    coins.scale=0.8;
    coins.velocityX=-8;
    coins.lifetime=190;
    CoinGroup.add(coins);
 }
}

function spawnAirObstacles(){

if(frameCount %600===0)
 {
    rocketSound.play();
    AirObstacles=createSprite(1600,random(100,270),100,200);
    AirObstacles.velocityX=-(18+2*count/500);
    AirObstacles.scale=0.5;
    AirObstacles.lifetime=200;
    rand=Math.round(random(1,3));

    switch(rand)
    {
      case 1:
        AirObstacles.addImage("obstacle_image",obstacle1);
        break;

      case 2:
        AirObstacles.addImage("obstacle_image",obstacle2);
        break;

      case 3:
        AirObstacles.addImage("obstacle_image",obstacle3);
        break;
    }
      AirObstacles.addAnimation("obstacle"+rand);
      AirObstacleGroup.add(AirObstacles);
 }
}

function reset(){
   console.log("inreset")
   gameState=PLAY;

      kai.scale=0.8;
      restartButton.visible=false;
      SoldierGroup.destroyEach();
      CoinGroup.destroyEach();
      AirObstacleGroup.destroyEach();
      
      survivalTime=0;
      count=0;
       
       life1=createSprite(760,50,40,40);
  life1.addImage(life_image);
  life1.scale=0.5;

  life2=createSprite(820,50,40,40);
  life2.addImage(life_image);
  life2.scale=0.5;
}

function replay(){
   
   kai.x=100;
   

   backGround2.visible=false;
   endingText.visible=false;
   replayButton.visible=false;
   SoldierGroup.destroyEach();
      CoinGroup.destroyEach();
      AirObstacleGroup.destroyEach();
      life1.lifetime=-1;
      life2.lifetime=-1;
      survivalTime=0;
      count=0;
   gameState=PLAY;
}




