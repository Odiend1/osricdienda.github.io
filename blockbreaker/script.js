var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var x = window.innerWidth/2;
var y = 300;
var dx = -1;
var dy = 1;
var vx = 0;
var vy = 3;
var playerx = window.innerWidth/2 - 75;
var movingLeft = false;
var movingRight = false;
var gameover = false;
var won = false;
var updateTime = 10;
boop = document.getElementById("boop");
boop.volume = 1/3;

class Block{
  constructor(x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
  }
}
var blocks = [];
// Generates blocks
for(var blockx of Array(Math.floor(window.innerWidth/100)).keys())  {
    var blocky = 100;
    blockx = blockx*100 + (window.innerWidth - Math.floor(window.innerWidth/100)*100)/Math.floor(window.innerWidth/100) +18.75
  ctx.beginPath();
  ctx.rect(blockx, blocky, 75, 25);
  var blockColor = "#ff00c3";
  ctx.fillStyle = blockColor;
  ctx.fill();
    blocks.push(new Block(blockx, blocky, blockColor));
  }
for(var blockx of Array(Math.floor(window.innerWidth/100) - 1).keys())  {
    var blocky = 140;
    blockx = blockx*100 + (window.innerWidth - Math.floor(window.innerWidth/100)*100)/Math.floor(window.innerWidth/100) + 18.75 + 50
  ctx.beginPath();
  ctx.rect(blockx, blocky, 75, 25);
  var blockColor = "#ff00ff";
  ctx.fillStyle = blockColor;
  ctx.fill();
    blocks.push(new Block(blockx, blocky, blockColor));
  }
for(var blockx of Array(Math.floor(window.innerWidth/100) - 2).keys())  {
    var blocky = 180;
    blockx = blockx*100 + (window.innerWidth - Math.floor(window.innerWidth/100)*100)/Math.floor(window.innerWidth/100) + 18.75 + 50 + 50
  ctx.beginPath();
  ctx.rect(blockx, blocky, 75, 25);
  var blockColor = "violet";
  ctx.fillStyle = blockColor;
  ctx.fill();
    blocks.push(new Block(blockx, blocky, blockColor));
  }

function update(){
  updateTime = 10;
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw background
  ctx.fillStyle = "#000029";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the ball
  ctx.fillStyle = "cyan";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Draw player paddle
  ctx.fillStyle = "gray";
  ctx.beginPath();
  ctx.rect(playerx, canvas.height - 50, 150, 25);
  ctx.fill();

  // Draw blocks
  blocks.forEach(block => {
    ctx.beginPath();
    ctx.rect(block.x, block.y, 75, 25);
    ctx.fillStyle = block.color;
    ctx.fill();
  })
    
  if(movingLeft) playerx-=10;
  if(movingRight) playerx+=10;
  
  x+= vx * dx;
  y+= vy * dy;
  if(x > canvas.width - 10 || x < 10){
    dx*= -1;
    vy += 1/16;
  }
  if(y > canvas.height - 10 || y < 10){
    dy*= -1;
    vy += 1/16;
  }

  //The following code segment is an abomination
  
  if(x > playerx && x - 151 < playerx && y <= canvas.height - 35 && y > canvas.height - 60){
    boop.play();
    if(y > canvas.height - 53 - 1/3) y -= 2;
    dy*= -1;
    if(-1*(playerx+75-x) == 0) x++;
    vx = (playerx+75-x)/(-1*(playerx+75-x)) + vx + Math.floor(Math.random()*6) - 3;
    if(vx !== 0){
    if(Math.abs(vx) > 6){
      var buffer = Math.floor(Math.random()*12) - 6;
      if(vx > 0){
        while(buffer < 0){
          buffer = Math.floor(Math.random()*12) - 6;
        }
      }
      else{
        while(buffer > 0){
          buffer = Math.floor(Math.random()*12) - 6;
        }
      }
      vx = vx - buffer;
    }
    }
    vy += 1/16;
  }
  blocks.forEach(block => {
    if(x > block.x && x - 76 < block.x && y <= block.y + 25 && y > block.y){
      boop.play();
    dy*= -1;
    if(-1*(block.x+37.5-x) == 0) x++;
    vx = (block.x+37.5-x)/(-1*(block.x+37.5-x)) + vx + Math.floor(Math.random()*6) - 3;
    if(vx !== 0){
    if(Math.abs(vx) > 6){
      var buffer = Math.floor(Math.random()*12) - 6;
      if(vx > 0){
        while(buffer < 0){
          buffer = Math.floor(Math.random()*12) - 6;
        }
      }
      else{
        while(buffer > 0){
          buffer = Math.floor(Math.random()*12) - 6;
        }
      }
      vx = vx - buffer;
    }
    }
    vy += 1/16;

    blocks.splice(blocks.indexOf(block), 1);
    ctx.clearRect(block.x, block.y, 75, 25);
  }
  })
  if(vy > 5) vy = 5;

  if(blocks.length == 0){
    if(!won){
      won = true;
      setTimeout(function(){alert("You win!")}, 50);
    }
  }

  // Gameover
  if(y >= window.innerHeight - 9 && !won) {
    //Blur effect
    setTimeout(function(){document.body.style.filter = "blur(2px)"}, 250);
    setTimeout(function(){document.body.style.filter = "blur(4px)"}, 500);
    setTimeout(function(){document.body.style.filter = "blur(8px)"}, 750);
    setTimeout(function(){document.body.style.filter = "blur(16px)"}, 1000);
    setTimeout(function(){document.body.style.filter = "blur(24px)"}, 1250);
    setTimeout(function(){document.body.style.filter = "blur(32px)"}, 1500);
    setTimeout(function(){alert("Game over!")}, 1750);
    gameover = true;
  }
  
  if(!gameover){
    setTimeout(function(){
      update();
    }, updateTime);
  }
}

setTimeout(function(){
  update();
}, 10);

document.onkeydown = function (e) {
    e = e || window.event;
    if(e.key == 'ArrowLeft'){
      movingLeft = true;
    }
  if(e.key == 'ArrowRight'){
      movingRight = true;
    }
};

document.onkeyup = function (e) {
    e = e || window.event;
    if(e.key == 'ArrowLeft'){
      movingLeft = false;
    }
  if(e.key == 'ArrowRight'){
      movingRight = false;
    }
};
