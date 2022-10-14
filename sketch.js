var bg;
var apple,appleImage;
var banana,bananaImage;
var melon,melonImage;
var orange,orangeImage;
var monkey,monkeyImage;
var rabbit,rabbitImage;
var hippo,hippoImage;
var sqi,sqiImage;
var appleGroup,bananaGroup,orangeGroup,melonGroup;
var gameState="play";
var gameOver;



function preload(){
  bg=loadImage("jungle.jpg");
appleImage=loadImage("apple2.png");
bananaImage=loadImage("banana2.png");
melonImage=loadImage("melon2.png");
orangeImage=loadImage("orange2.png");
monkeyImage=loadImage("monkey.png");
rabbitImage=loadImage("rabbit.png");
hippoImage=loadImage("hippo.png");
sqiImage=loadImage("sqi.png");
gameOver=loadImage("gameover.jpeg");
}



function setup() {
  createCanvas(1920, 975);

appleGroup=createGroup();
bananaGroup=createGroup();
melonGroup=createGroup();
orangeGroup=createGroup();


}




function draw() {
image(bg,0,0,width,height);
if(gameState==="play"){


spawnApple();
spawnBanana();
spawnMelon();
spawnOrange();


monkey=createSprite(712,770,20,20);
monkey.addImage(monkeyImage);
monkey.scale=0.5;


rabbit=createSprite(237,770,20,20);
rabbit.addImage(rabbitImage);
rabbit.scale=0.45;


hippo=createSprite(1187,770,20,20);
hippo.addImage(hippoImage);
hippo.scale=0.45;

sqi=createSprite(1662,770,20,20);
sqi.addImage(sqiImage);
sqi.scale=0.45;

if(keyDown("a")){
apple.destroy();
}

if(keyDown("b")){
  banana.destroy();
  }
  if(keyDown("m")){
    melon.destroy();
    }

    if(keyDown("o")){
      orange.destroy();
      }

if(appleGroup.isTouching(rabbit)||bananaGroup.isTouching(monkey)||melonGroup.isTouching(hippo)||orangeGroup.isTouching(sqi)){
gameState="end";
}

}
//if(appleGroup.y>675||bananaGroup.y>675||orangeGroup.y>675||melonGroup.y>675){

//console.log("Harsh");
//appleGroup.destroy();
//bananaGroup.destroy();
//orangeGroup.destroy();
//melonGroup.destroy();

//}


if(gameState==="end"){

background(gameOver );
stroke("black");
fill("black");
textSize(60);
text("Game Over! Take The L!",580,300);
text("GameCreator:Harsh Shah",580,500);

}


drawSprites();
}

function spawnApple(){
if(frameCount%55===0){
  apple=createSprite(random(0,475),20,10,10);
  apple.addImage(appleImage);
apple.velocityY=7;
appleGroup.add(apple);
}
}

function spawnBanana(){
  if(frameCount%50===0){
banana=createSprite(random(475,950),20,10,10);
banana.addImage(bananaImage);
banana.velocityY=6;
bananaGroup.add(banana);
  }
}



function spawnMelon(){
    if(frameCount%65===0){
  melon=createSprite(random(950,1425),20,10,10);
  melon.addImage(melonImage);
  melon.velocityY=6;
melonGroup.add(melon);
    }
  }

  function spawnOrange(){
    if(frameCount%70===0){
  orange=createSprite(random(1425,1900),20,10,10);
  orange.addImage(orangeImage);
  orange.velocityY=7;
  orangeGroup.add(orange);
    }
  }



  