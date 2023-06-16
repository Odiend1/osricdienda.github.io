var menu = document.getElementById('menu');
var codeNum = 0;

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

var width;
var height;

function resizeContainers(){
  if(width === undefined || height === undefined) var style = window.getComputedStyle(planet)
  if(width === undefined) width = style.getPropertyValue('width');
  if(height === undefined) var height = style.getPropertyValue('height');
  ssp.style.width = width;
  osmosis.style.width = width;
}

addEventListener("DOMContentLoaded", function(event) {
  resizeContainers();
});

addEventListener("load", (event) => {
  resizeContainers();
});

addEventListener("resize", (event) => {
  resizeContainers();
});

addEventListener("load", function(event){
  planet.remove();
});
