var menu = document.getElementById('menu');
var codeNum = 0;

if(window.innerWidth < 700){
  menu.hidden = true;
}

var planet = document.getElementById('planet');

planet.onclick = function(){
  window.location.href = "/blog/planets/J1407b/";
}

var ssp = document.getElementById('superscript+');
ssp.onclick = function(){
  window.location.href = "/superscript+/";
}

var osmosis = document.getElementById('osmosis');
osmosis.onclick = function(){
  window.location.href = "./osmosis/"
}

function resizeContainers(){
  ssp.style.width = planet.offsetWidth - 2 + "px";
  ssp.style.height = planet.offHeight - 2 + "px";
  osmosis.style.width = planet.offsetWidth - 2 + "px";
  osmosis.style.height = planet.offHeight - 2 + "px";
}

resizeContainers();

addEventListener("DOMContentLoaded", function(event) {
  resizeContainers();
});

addEventListener("load", (event) => {
  resizeContainers();
});

addEventListener("resize", (event) => {
  resizeContainers();
});

planet.remove();

