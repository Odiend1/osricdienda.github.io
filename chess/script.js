var menu = document.getElementById('menu');

if(window.innerWidth < 700){
  menu.hidden = true;
  const elements = document.getElementsByClassName('chess');

  for(let i = 0; i < elements.length; i++) {
    elements[i].style.width = '100%';
  }
}
