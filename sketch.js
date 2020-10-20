var canvas,backGroundImage,playerCount,form,player,game,database;
var gameState = 0;


function setup(){
  database = firebase.database();
  canvas = createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();
  

}

function draw(){
  background("white");
    drawSprites();
  
}
