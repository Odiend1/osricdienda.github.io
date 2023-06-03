var ttt = document.getElementById("tic-tac-toe");

var expanded = [];
ttt.style.height="52px";
if(window.innerWidth < 500){
  ttt.style.width = "95%";
}

ttt.onclick = function(){
  if(!expanded.includes(ttt)){
    ttt.style.height = parseInt(ttt.style.height.substring(0, ttt.style.height.length - 2)) * 10 + "px";
    expanded.push(ttt);
    ttt.getElementsByTagName("iframe")[0].hidden = false;
  }
  else{
    ttt.style.height = parseInt(ttt.style.height.substring(0, ttt.style.height.length - 2)) / 10 + "px";
    expanded.splice(expanded.indexOf(ttt), 1);
    ttt.getElementsByTagName("iframe")[0].hidden = true;
  }
}