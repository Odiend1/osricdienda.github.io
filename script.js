var menu = document.getElementById('menu');
var codeNum = 0;

if(window.innerWidth < 700){
  menu.hidden = true;
}

document.onkeydown = function (e) {
    e = e || window.event;
  if(e.key == 'ArrowUp'){
      if(codeNum == 0 || codeNum == 1){
        codeNum++;
      }
    else{
      codeNum = 0;
    }
    }
  if(e.key == 'ArrowDown'){
     if(codeNum == 2 || codeNum == 3){
        codeNum++;
      }
    else{
      codeNum = 0;
    }
    }
    if(e.key == 'ArrowLeft'){
      if(codeNum == 4 || codeNum == 6){
        codeNum++;
      }
    else{
      codeNum = 0;
    }
    }
  if(e.key == 'ArrowRight'){
      if(codeNum == 5 || codeNum == 7){
        codeNum++;
      }
    else{
      codeNum = 0;
    }
  }
  if(e.key == 'b'){
      if(codeNum == 8){
        codeNum++;
      }
    else{
      codeNum = 0;
    }
    }
  if(e.key == 'a'){
      if(codeNum == 9){
        window.location.href = "https://osricdienda.com/blockbreaker"
      }
    else{
      codeNum = 0;
    }
  }
};