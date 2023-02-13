var menu = document.getElementById('menu');
var codeNum = 0;

if(window.innerWidth < 700){
  menu.hidden = true;
}

var planet = document.getElementById('planet');

planet.onclick = function(){
  window.location.href = "./blog/planets/J1407b/";
}
