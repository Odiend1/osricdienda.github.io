var menu = document.getElementById('menu');
var content = document.getElementById('content');
var codeNum = 0;

var planet = document.getElementById('planet');

planet.onclick = function(){
  window.location.href = "./blog/planets/J1407b/";
}

function resizeContainers(){
  ssp.style.width = planet.offsetWidth - 2 + "px";
  ssp.style.height = planet.offHeight - 2 + "px";
}

var ssp = document.getElementById('superscript+');
resizeContainers();

addEventListener("DOMContentLoaded", function(event) {
  resizeContainers();
});

addEventListener("load", (event) => {
  resizeContainers();
});


ssp.onclick = function(){
    window.location.href = "./superscript+/";
}
var menuClosing = true;
var openMenu = document.getElementById("open-menu");
var menuDialog = document.getElementById("menu-dialog")
var menuWrapper = document.getElementById("menu-wrapper");
menuDialog.style.left = menuWrapper.offsetLeft + "px";
openMenu.onclick = function(){
  menuDialog.showModal();
  menuClosing = false;
}
menu.addEventListener('click', (event) => {
  menuClosing = false;
})

document.addEventListener('click', (event) => {
  setTimeout(function(){if(menuClosing){menuDialog.close()} else{menuClosing = true}}, 10)
});

var nonDialogMenu;

if(window.innerWidth >= 700){
  nonDialogMenu = menu.cloneNode(true);
  nonDialogMenu.id = "nd-menu";
  document.getElementsByTagName("body")[0].insertBefore(nonDialogMenu, document.getElementsByTagName("body")[0].children[0]);
  openMenu.hidden = true;
  //menuDialog.hidden = true;
}
else{
  menuDialog.hidden = false;
}

window.addEventListener('resize', (event) => {
if(window.innerWidth >= 700){
  if(document.getElementsByTagName("body")[0].children[0].id !== "nd-menu") {
    nonDialogMenu = menu.cloneNode(true);
  nonDialogMenu.id = "nd-menu";
  document.getElementsByTagName("body")[0].insertBefore(nonDialogMenu, document.getElementsByTagName("body")[0].children[0]);
  }
  openMenu.hidden = true;
  menuDialog.close();
}
  else{
    if(document.getElementsByTagName("body")[0].children[0].id === "nd-menu"){ document.getElementsByTagName("body")[0].removeChild(document.getElementsByTagName("body")[0].children[0]);}
  openMenu.hidden = false;
    menuDialog.hidden = false;
  }
});

var homeButton = document.getElementById("tohome");
homeButton.onclick = function(){
  setTimeout(function(){menuClosing = true}, 1)
}

var aboutButton = document.getElementById("toabout");
aboutButton.onclick = function(){
  setTimeout(function(){menuClosing = true}, 1)
}

var projectsButton = document.getElementById("toprojects");
projectsButton.onclick = function(){
  setTimeout(function(){menuClosing = true}, 1)
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
        window.location.href = window.location.href + "blockbreaker"
      }
    else{
      codeNum = 0;
    }
  }
};