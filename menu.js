addEventListener("load", function(event) {
//document.getElementsByTagName('body')[0].innerHTML = "<button id='open-menu'><img src='/assets/menu_icon.png' height='30px' width='30px' style='padding:1px; padding-top:3px;'></button> <div id='menu-wrapper'> <dialog id='menu-dialog'> <div id='menu'> <a id='tohome' href='/#home'>Home</a> <br> <a id='toabout' href='/#about'>About</a> <br> <a id='toprojects' href='/projects'>Projects</a> </div> </dialog> </div>" + document.getElementsByTagName('body')[0].innerHTML;
var menuWrapper = document.createElement("div");
menuWrapper.id = "menu-wrapper";
var menuDialog = document.createElement("dialog");
menuDialog.id = "menu-dialog";
var menu = document.createElement("div");
menu.id = "menu";
var homeButton = document.createElement("a");
homeButton.innerHTML = "Home";
homeButton.id = "tohome";
homeButton.href = "/#home";
var aboutButton = document.createElement("a");
aboutButton.innerHTML = "About";
aboutButton.id = "toabout";
aboutButton.href = "/#about";
var projectsButton = document.createElement("a");
projectsButton.innerHTML = "Projects";
projectsButton.id = "toprojects";
projectsButton.href = "/projects";
menu.appendChild(homeButton);
menu.appendChild(document.createElement("br"));
menu.appendChild(aboutButton);
menu.appendChild(document.createElement("br"));
menu.appendChild(projectsButton);
menuDialog.appendChild(menu);
menuWrapper.appendChild(menuDialog);
var openMenu = document.createElement("button");
openMenu.id = "open-menu";
var openMenuIcon = document.createElement("img");
openMenuIcon.src = "/assets/menu_icon.png";
openMenuIcon.alt = "Menu"
openMenuIcon.width = 30;
openMenuIcon.height = 30;
openMenuIcon.style.padding = "1px";
openMenuIcon.style.paddingTop = "3px";
openMenu.appendChild(openMenuIcon);
  
document.getElementsByTagName("body")[0].insertBefore(menuWrapper, document.getElementsByTagName("body")[0].children[0])
document.getElementsByTagName("body")[0].insertBefore(openMenu, document.getElementsByTagName("body")[0].children[0])

menu = document.getElementById('menu');
var menuClosing = true;
openMenu = document.getElementById("open-menu");
menuDialog = document.getElementById("menu-dialog")
menuWrapper = document.getElementById("menu-wrapper");
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

homeButton = document.getElementById("tohome");
homeButton.onclick = function(){
  setTimeout(function(){menuClosing = true}, 1)
}

aboutButton = document.getElementById("toabout");
aboutButton.onclick = function(){
  setTimeout(function(){menuClosing = true}, 1)
}

projectsButton = document.getElementById("toprojects");
projectsButton.onclick = function(){
  setTimeout(function(){menuClosing = true}, 1)
}
    });