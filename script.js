console.log("    ___           _        ____  _                _       " + "\n" +
"   / _ \\ ___ _ __(_) ___  |  _ \\(_) ___ _ __   __| | __ _ " + "\n" +
"  | | | / __| '__| |/ __| | | | | |/ _ \\ '_ \\ / _` |/ _` |" + "\n" +
"  | |_| \\__ \\ |  | | (__  | |_| | |  __/ | | | (_| | (_| |" + "\n" +
"   \\___/|___/_|  |_|\\___| |____/|_|\\___|_| |_|\\__,_|\\__,_|");

var content = document.getElementById('content');
var codeNum = 0;
var body = document.getElementsByTagName("body")[0];

var planet = document.getElementById('planet');

planet.onclick = function(){
  window.location.href = "./blog/planets/J1407b/";
}

planet.style.width = window.innerHeight > 541.6 ? '541.6px' : window.innerHeight + "px";

var slideshowImage = document.getElementById("slideshow-image");
slideshowImage.style.height = window.innerHeight > 541.6 ? '181.275px' : window.innerHeight/541.6*181.275 + "px";

function resizeContainers(containerWidth, imageHeight){
  
  var style = window.getComputedStyle(planet)
  var width = style.getPropertyValue('width');
  planet.style.width = containerWidth;
  if(541 > window.innerWidth) planet.style.width = window.innerWidth - 20 + "px"
  else planet.style.width = "541.6px"
  if(body.clientWidth < parseInt(planet.style.width)) planet.style.width = body.clientWidth - 2 + "px";
  slideshowImage.style.height = imageHeight;
}

addEventListener("DOMContentLoaded", function(event) {
  var containerWidth = window.innerWidth < window.getComputedStyle(planet).getPropertyValue('width') ? window.getComputedStyle(planet).getPropertyValue('width') : window.innerWidth;
  var imageHeight = window.innerWidth < window.getComputedStyle(planet).getPropertyValue('width') ?window.getComputedStyle(slideshowImage).getPropertyValue('height') : window.innerWidth/window.getComputedStyle(slideshowImage).getPropertyValue('width')*window.getComputedStyle(slideshowImage).getPropertyValue('height');
  resizeContainers(containerWidth, imageHeight);
  //setTimeout(function(){if(parseInt(planet.style.width) < 300 && window.innerWidth > 300) window.location.reload();}, 8000);
  autoSlideshow();
  try{
    Array.from(slideRadios).forEach(radio => {
      if(radio.checked){
        slideshowInterrupted--;
        radio.click();
      }
    })
  } catch(e){}
});

addEventListener("pageshow", function(event){
  try{
    Array.from(slideRadios).forEach(radio => {
      if(radio.checked){
        slideshowInterrupted--;
        radio.click();
      }
    })
  } catch(e){}
})

function autoSlideshow(){
  setTimeout(function(){
    Array.from(slideRadios).forEach(radio => {
      if(radio.checked){
        slideshowInterrupted--;
        radio.click();
      }
    })
    if(slideshowInterrupted < 2){
      slideshowInterrupted--;
      slideRight.click();
    }
    autoSlideshow();
    //if(500 > window.innerWidth) {planet.style.width = (window.innerWidth - 20).toString() + "px";}
    if(body.clientWidth < parseInt(planet.style.width)) planet.style.width = body.clientWidth - 2 + "px";
  }, 3000);
}

addEventListener("load", (event) => {
  try{
    resizeContainers(containerWidth, imageHeight);
    autoSlideshow();
    Array.from(slideRadios).forEach(radio => {
      if(radio.checked){
        slideshowInterrupted--;
        radio.click();
      }
    })
  }
  catch(e){}
});

window.addEventListener("resize", (event) => {
  try{
    resizeContainers(containerWidth, imageHeight);
  } catch(e){}
});

var slides = [{h1: "Osric's Featured Planet", h2: "J1407b", image: "./blog/planets/J1407b/j1407b.jpg", href: "./blog/planets/J1407b/"}, {h1: "Messier Catalog API", h2: "Complete data and images for all 110 Messier objects.", image: "./messier-api/images/M31.jpg", href: "./messier-api/"}, {h1: "Superscript+", h2: "TX District 15 Congressional App Challenge Winner", image: "./superscript+/Superscript+ Updated Simple.png", href: "./superscript+/"}]
if(window.innerWidth < 541) slides[0].h2 += "<br>&nbsp;";
var slideshowH1 = document.getElementById("slideshow-h1");
var slideshowH2 = document.getElementById("slideshow-h2");
var slideRadios = document.getElementsByClassName("slide-radio");
var learnMoreButton = document.getElementById("learn-more");
var currentSlide = 0;
var slideshowInterrupted = 0;
Array.from(slideRadios).forEach(radio => {
  radio.onclick = function(){
    Array.from(slideRadios).forEach(r => {
      r.checked = false;
    })
    radio.checked = true;
    currentSlide = Array.from(slideRadios).indexOf(radio);
    slideshowInterrupted++;
    slideshowH1.innerHTML = slides[Array.from(slideRadios).indexOf(radio)].h1;
    slideshowH2.innerHTML = slides[Array.from(slideRadios).indexOf(radio)].h2;
    slideshowImage.src = slides[Array.from(slideRadios).indexOf(radio)].image;
    planet.onclick = function(){window.location.href = slides[Array.from(slideRadios).indexOf(radio)].href};
    learnMoreButton.href = slides[Array.from(slideRadios).indexOf(radio)].href;
    try{
      planet.style.width = containerWidth;
      slideshowImage.style.height = imageHeight;
    }
    catch(e){}
  }
})
Array.from(slideRadios)[0].click()


var slideLeft = document.getElementById("slideshow-left");
var slideRight = document.getElementById("slideshow-right");
slideLeft.onclick = function(){
    currentSlide--;
    if(currentSlide < 0) currentSlide = Array.from(slideRadios).length - 1;
    Array.from(slideRadios)[currentSlide].click();
}
slideRight.onclick = function(){
    currentSlide++;
    if(currentSlide > Array.from(slideRadios).length - 1) currentSlide = 0;
    Array.from(slideRadios)[currentSlide].click();
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
        window.location.href = "https://" + window.location.hostname + "/blockbreaker";
      }
    else{
      codeNum = 0;
    }
  }
};