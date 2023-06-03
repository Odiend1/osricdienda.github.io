var restart = document.getElementById('restart');
var game = document.getElementById('game');

restart.onclick = function(){
  game.src = "game.html?difficulty=\"medium\"";
}

/*function adjustMargin(){
  if(window.innerWidth < 2625/8){
    game.style.marginLeft = window.innerWidth/100 + "px";
  }
  else if(window.innerWidth < 2625/4){
    game.style.marginLeft = window.innerWidth/3.5 + "px";
  }
  else{
    game.style.marginLeft = "225px";
  }
}*/

//adjustMargin();
//addEventListener("resize", (event) => {adjustMargin()});