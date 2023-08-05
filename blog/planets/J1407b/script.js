var text = document.getElementById('text');

if(window.innerWidth >= 700){
  text.style.paddingLeft = "120px";
  text.style.paddingRight = "120px";
}
else{
  text.style.paddingLeft = "0px";
  text.style.paddingRight = "0px";
}

window.addEventListener("resize", function(){
  if(window.innerWidth >= 700){
    text.style.paddingLeft = "120px";
    text.style.paddingRight = "120px";
  }
  else{
    text.style.paddingLeft = "0px";
    text.style.paddingRight = "0px";
  }
})