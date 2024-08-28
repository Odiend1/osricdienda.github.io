/*addEventListener("load", function(event) {
  var menuHidden = false;

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
  
//var contactButton = document.createElement("a");
var contactButton = document.getElementById("contact-me");
var openDialog = true;
contactButton.onclick = openContactDialog();
function openContactDialog(){
  if(openDialog) {
    if(!menuHidden && window.innerWidth >= 700) {
      document.getElementById('contact-dialog').showModal();
      setTimeout(confirmContactDialog, 500);
    }
    else window.location.href = "/contact";
  }
  openDialog = true;
}
function confirmContactDialog(){
  console.log("checking...")
   if(openDialog = true && !document.getElementById('contact-dialog').open){
     console.log("redirecting");
     window.location.href = "/contact";
   } 
}
function closeContactDialog(){document.getElementById('contact-dialog').close(); openDialog = false;};
contactButton.id = "contactme";
contactButton.href = "javascript:void(0);"
 /*
menu.appendChild(homeButton);
menu.appendChild(document.createElement("br"));
menu.appendChild(aboutButton);
menu.appendChild(document.createElement("br"));
menu.appendChild(projectsButton);
menu.appendChild(document.createElement("br"));
menu.appendChild(contactButton);
activateContactButtons();

function activateContactButtons(){
  if(document.getElementById("contactme") != null && document.getElementById("close-contact-dialog") != null && (window.location.pathname !== '/' || document.getElementById("mail-button") != null)){
    document.getElementById("contactme").onclick = openContactDialog;
    if(document.getElementById("mail-button") != null){
      document.getElementById("mail-button").onclick = openContactDialog;
    }
    document.getElementById('close-contact-dialog').onclick = closeContactDialog;
  }
  else{
    setTimeout(activateContactButtons, 100);
  }
}
  
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
  menuHidden = false;
}
else{
  menuDialog.hidden = false;
  menuHidden = true;
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
  activateContactButtons();
});
/*
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

*/