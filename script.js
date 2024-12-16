console.log("    ___           _        ____  _                _       " + "\n" +
"   / _ \\ ___ _ __(_) ___  |  _ \\(_) ___ _ __   __| | __ _ " + "\n" +
"  | | | / __| '__| |/ __| | | | | |/ _ \\ '_ \\ / _` |/ _` |" + "\n" +
"  | |_| \\__ \\ |  | | (__  | |_| | |  __/ | | | (_| | (_| |" + "\n" +
"   \\___/|___/_|  |_|\\___| |____/|_|\\___|_| |_|\\__,_|\\__,_|");

var content = document.getElementById('content');
var codeNum = 0;
var body = document.getElementsByTagName("body")[0];
const d = new Date();

/*var portrait = document.getElementById("portrait");
portrait.onclick = function(){
  console.log(portrait.src === window.location.href + "assets/portrait.jpeg")
  if(portrait.src === window.location.href + "assets/portrait.jpeg"){
    document.getElementById("about-me").show()
    //oldImageHeight = portrait.height;
    //portrait.src = "./assets/portrait_extended.jpeg";
    /*function incrementOpacity(attempt){
      if(attempt == 1) portrait.style.opacity = "0";
      if(portrait.height !== oldImageHeight){
      if(parseFloat(portrait.style.opacity) < 1) {
        portrait.style.opacity = parseFloat(portrait.style.opacity) + 0.01 + "";
        setTimeout(function(){incrementOpacity(attempt+1)}, 10);
      }
      }
      else{
        setTimeout(function(){incrementOpacity(attempt+1)}, 10);
      }
    }
    incrementOpacity(1);
  }
  else{
    portrait.src = "./assets/portrait.jpeg";
  }
}*/

var starCanvas = document.getElementById("star-canvas");
var planetCanvas = document.getElementById("planet-canvas");
starCanvas.width = window.innerWidth;
starCanvas.height = window.innerHeight;
planetCanvas.width = window.innerWidth;
planetCanvas.height = window.innerHeight;
var starCtx = starCanvas.getContext("2d");
var planetCtx = planetCanvas.getContext("2d");
function drawStar(){
  starCtx.strokeStyle = "#ffffff";
  let r = Math.floor(Math.random()*3) < 2 ? Math.random() * 20 + 235 : 0;
  let g = Math.floor(Math.random()*2) == 0 ? Math.random() * 30 + 190 : 0;
  let b = Math.min(255-r);
  starCtx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  starCtx.beginPath();
  let x = Math.random() * starCanvas.width;
  let y = Math.random() * starCanvas.height;
  starCtx.arc(x, y, Math.random() * (starCanvas.width+starCanvas.height)/1500, 0, Math.PI * 2);
  starCtx.fill();
  starCtx.stroke();
}
function drawPlanet(){
  planetCtx.strokeStyle = "#ffffff";
  let r = Math.random() * 100;
  let g = Math.random() * 100 + 100;
  let b = Math.random() * 55 + 200;
  if(b < 230){
    r = Math.random() * 25 + 235;
    g = Math.random() * 55 + 200;
    b = 0;
  }
  planetCtx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  planetCtx.beginPath();
  let x = Math.random() * planetCanvas.width;
  let y = Math.random() * planetCanvas.height;
  planetCtx.arc(x, y, Math.random() * (planetCanvas.width+planetCanvas.height)/300, 0, Math.PI * 2);
  planetCtx.fill();
  planetCtx.stroke();
}
function loadBackgroundStars(){
  starCtx.strokeStyle = "#ffffff";
  planetCtx.strokeStyle = "#ffffff";
  for(var i = 0; i < (starCanvas.width + starCanvas.height)/9; i++){
    drawStar();
  }
  for(var i = 0; i < (planetCanvas.width + planetCanvas.height)/90; i++) {
    // MAKE NEW CANVAS FOR PLANETS AND BLUR THAT ONE
    drawPlanet();
  }
}
window.addEventListener("load", (event) => {
  starCanvas.width = document.body.getBoundingClientRect().width;
  starCanvas.height = document.body.getBoundingClientRect().height;
  planetCanvas.width = document.body.getBoundingClientRect().width;
  planetCanvas.height = document.body.getBoundingClientRect().height;
  loadBackgroundStars();
})

addEventListener("resize", (event) => {
  starCanvas.width = window.innerWidth;
  starCanvas.height = window.innerHeight;
  planetCanvas.width = document.body.getBoundingClientRect().width;
  planetCanvas.height = document.body.getBoundingClientRect().height;
  loadBackgroundStars();
})

var slideshow = document.getElementById('slideshow');

slideshow.onclick = function(){
  window.location.href = "./blog/planets/J1407b/";
}

slideshow.style.width = window.innerHeight > 541.6 ? '541.6px' : window.innerHeight + "px";

var slideshowImage = document.getElementById("slideshow-image");
slideshowImage.style.height = window.innerHeight > 541.6 ? '181.275px' : window.innerHeight/541.6*181.275 + "px";

function resizeContainers(containerWidth, imageHeight){
  
  var style = window.getComputedStyle(slideshow)
  var width = style.getPropertyValue('width');
  slideshow.style.width = containerWidth;
  if(541 > window.innerWidth) slideshow.style.width = window.innerWidth - 20 + "px"
  else slideshow.style.width = "541.6px"
  if(body.clientWidth < parseInt(slideshow.style.width)) slideshow.style.width = body.clientWidth - 2 + "px";
  slideshowImage.style.height = imageHeight;
}

addEventListener("DOMContentLoaded", function(event) {
  var containerWidth = window.innerWidth < window.getComputedStyle(slideshow).getPropertyValue('width') ? window.getComputedStyle(slideshow).getPropertyValue('width') : window.innerWidth;
  var imageHeight = window.innerWidth < window.getComputedStyle(slideshow).getPropertyValue('width') ?window.getComputedStyle(slideshowImage).getPropertyValue('height') : window.innerWidth/window.getComputedStyle(slideshowImage).getPropertyValue('width')*window.getComputedStyle(slideshowImage).getPropertyValue('height');
  resizeContainers(containerWidth, imageHeight);
  //setTimeout(function(){if(parseInt(slideshow.style.width) < 300 && window.innerWidth > 300) window.location.reload();}, 8000);
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
    //if(500 > window.innerWidth) {slideshow.style.width = (window.innerWidth - 20).toString() + "px";}
    if(body.clientWidth < parseInt(slideshow.style.width)) slideshow.style.width = body.clientWidth - 2 + "px";
  }, 3000);
}

var menuButton = document.getElementById("menu-button");
var menuIcon = document.getElementById("menu-icon");
var closeMenuButton = document.getElementById("close-menu");
var menuContent = document.getElementById("menu-content");
function reEnableScrolling(){
  if(!menuButton.classList.contains("expand-menu")){
    menuContent.classList.remove("fade-in");
    menuContent.style.display = "none";
    menuButton.classList.remove("expand-menu");
    menuIcon.hidden = false;
    closeMenuButton.style.display = "none";
    document.getElementById("content").style.overflowY = "";
    setTimeout(reEnableScrolling, 1000);
  }
  else{
    setTimeout(reEnableScrolling, 100);
  }
}
menuButton.onclick = function(){
  if(!menuButton.classList.contains("expand-menu")) {
    menuButton.classList.add("expand-menu");
    menuIcon.hidden = true;
    closeMenuButton.style.display = "inline-block";
    document.getElementById("content").style.overflowY = "hidden";
    setTimeout(function(){
      if(menuButton.classList.contains("expand-menu")){
        menuContent.classList.add("fade-in");
        menuContent.style.display = "block";
      }
    }, 1000)
  }
  reEnableScrolling();
}
closeMenuButton.onclick = function(){
  if(menuButton.classList.contains("expand-menu")){
    menuContent.classList.remove("fade-in");
    menuContent.style.display = "none";
    menuButton.classList.remove("expand-menu");
    menuIcon.hidden = false;
    closeMenuButton.style.display = "none";
    document.getElementById("content").style.overflowY = "";
  }
  reEnableScrolling();
}

var menuLinks = document.getElementsByClassName("menu-link");
for(var i = 0; i < menuLinks.length; i++){
  menuLinks.item(i).onclick = function(){
    if(menuButton.classList.contains("expand-menu")){
      menuContent.classList.remove("fade-in");
      menuContent.style.display = "none";
      menuButton.classList.remove("expand-menu");
      menuIcon.hidden = false;
      closeMenuButton.style.display = "none";
      document.getElementById("content").style.overflowY = "";
    }
  }
}

window.addEventListener("scroll", function(event){
  document.getElementById("logo").style.opacity = Math.min((window.scrollY-280)/105, 1);
})

 function headerFormat(){
   if(window.innerWidth >= 700){
     menuButton.style.display = "none";
     document.getElementById("header").style.backdropFilter = "blur(1px)";
     document.getElementById("header").style.webkitBackdropFilter = "blur(1px)";
     headerLinks = document.getElementsByClassName("header-link");
     for(var i = 0; i < headerLinks.length; i++){
       if(headerLinks.item(i).innerHTML !== "Awards") headerLinks.item(i).style.display = "inline-block";
     }
   }
   else{
     menuButton.style.display = "inline-block";
     document.getElementById("header").style.backdropFilter = "none";
     document.getElementById("header").style.webkitBackdropFilter = "none";
     headerLinks = document.getElementsByClassName("header-link");
     for(var i = 0; i < headerLinks.length; i++){
       headerLinks.item(i).style.display = "none";
     }
   }
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
  try{
    headerFormat();
  }
  catch(e){}
});

window.addEventListener("resize", (event) => {
  try{
    resizeContainers(containerWidth, imageHeight);
  } catch(e){}
  try{
    headerFormat();
  }
  catch(e){}
});

var slides = [{h1: "Osric's Featured Planet", h2: "J1407b", image: "./blog/planets/J1407b/j1407b.jpg", href: "./blog/planets/J1407b/"},  {h1: "National Science Bowl", h2: "Regional Champion and National Competitor", image: "./assets/scibowl_stage.jpg", href: "./science-bowl/"}, {h1: "Messier Catalog API", h2: "Complete data and images for all 110 Messier objects.", image: "./messier-api/images/M31.jpg", href: "./messier-api/"}, {h1: "Superscript+", h2: "TX District 15 Congressional App Challenge Winner", image: "./superscript+/Superscript+ Updated Simple.png", href: "./superscript+/"}]
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
    slideshow.onclick = function(){window.location.href = slides[Array.from(slideRadios).indexOf(radio)].href};
    learnMoreButton.href = slides[Array.from(slideRadios).indexOf(radio)].href;
    try{
      slideshow.style.width = containerWidth;
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

document.getElementById("year").innerHTML = d.getFullYear();