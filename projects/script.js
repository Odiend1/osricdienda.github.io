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
  window.location.href = "/projects/osmosis/"
}

var messier = document.getElementById('messier-api');
messier.onclick = function(){
  window.location.href = "/messier-api/"
}

var width;
var height;

function resizeContainers(){
  var style = window.getComputedStyle(planet)
  width = style.getPropertyValue('width');
  height = style.getPropertyValue('height');
  console.log(width)
  ssp.style.width = parseInt(width.slice(0, -2)) * 0.75 + "px";
  osmosis.style.width = parseInt(width.slice(0, -2)) * 0.75 + "px";
  messier.style.width = parseInt(width.slice(0, -2)) * 0.75 + "px";
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
  // planet.remove();
});
