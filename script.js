var content = document.getElementById('content');
var codeNum = 0;

var planet = document.getElementById('planet');
var ssp = document.getElementById('superscript+');


planet.onclick = function(){
  window.location.href = "./blog/planets/J1407b/";
}

ssp.onclick = function(){
    window.location.href = "./superscript+/";
}

function resizeContainers(){
  
  var style = window.getComputedStyle(planet)
  var width = style.getPropertyValue('width');
  ssp.style.width = width;
  
  //ssp.style.width = planet.offsetWidth - 2 + "px";
  //ssp.style.height = planet.offsetHeight - 2 + "px";
}

addEventListener("DOMContentLoaded", function(event) {
  resizeContainers();
});

addEventListener("load", (event) => {
  resizeContainers();
});

window.addEventListener("resize", (event) => {
  resizeContainers();
});



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
        window.location.href = window.location.href + "blockbreaker"
      }
    else{
      codeNum = 0;
    }
  }
};