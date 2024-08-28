let canvas = document.getElementById("canvas");

function resizeCanvas(canvas){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas(canvas);

window.addEventListener("resize", resizeCanvas);
function mousePos(canvas, event){
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  return {x: x, y: y};
}

var m1down = false;
var prevPos = {x: null, y: null};
var drawnOn = false;
var brushColor = document.getElementById("color");
var color = '#000000';
var brushSize = document.getElementById("size");
var size = 5;
var img;

function setM1State(event){
  var flags = event.buttons !== undefined ? event.buttons : event.which;
  m1down = (flags & 1) === 1;
  prevPos = draw(event, prevPos);
}

canvas.addEventListener('mousedown', setM1State);
canvas.addEventListener('mousemove', setM1State);
canvas.addEventListener('mouseup', setM1State);
canvas.addEventListener('pointerdown', setM1State);
canvas.addEventListener('pointermove', setM1State);
canvas.addEventListener('pointerup', setM1State);

var save = document.getElementById("save");

function draw(event, prevPos){
  if(m1down){
    drawnOn = true;
    let pos = mousePos(canvas, event);
    let x = pos.x;
    let y = pos.y;
    let ctx = canvas.getContext('2d');
    if(prevPos.x !== null && prevPos.y !== null){
      ctx.lineWidth = size;
      ctx.beginPath();
      ctx.moveTo(prevPos.x, prevPos.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
      ctx.closePath();
    }
ctx.beginPath();
ctx.arc(pos.x, pos.y, size/5, 0, 2 * Math.PI, false);
ctx.fillStyle = color;
ctx.fill();
ctx.lineWidth = size/2.5;
ctx.strokeStyle = color;
ctx.stroke();
    ctx.closePath();
    //ctx.fillRect(x, y, 5, 5);
   img = canvas.toDataURL("image/png");
    save.href = (img);
    return pos;
  }
  else{
    return {x: null, y: null};
  }
}

// Event listener for the 'beforeunload' event
window.addEventListener('beforeunload', function (e) {

    if (drawnOn) {
        e.preventDefault();
        e.returnValue = '';
    }
});

document.getElementById("eraser").onclick = function(){
  color = "#FFFFFF";
  document.getElementById("eraser").style = "background-color: #c7c7c7; border-radius: 8px; width: 50px; height: 35px;"
  document.getElementById("brush").style = "background-color: #adadad; border-radius: 8px; width: 50px; height: 35px;"
}

document.getElementById("brush").onclick = function(){
  color = brushColor.value;
  document.getElementById("brush").style = "background-color: #c7c7c7; border-radius: 8px; width: 50px; height: 35px;"
  document.getElementById("eraser").style = "background-color: #adadad; border-radius: 8px; width: 50px; height: 35px;"
}

brushColor.addEventListener("change", function () {
        color = brushColor.value;
});

brushSize.addEventListener("change", function () {
  if(brushSize.value <= 20 && brushSize.value > 0){
        size = brushSize.value;
  }
  else if(brushSize.value > 20){
    alert("Sorry, we do not currently support brush sizes greater than 20 pixels.");
    brushSize.value = size;
  }
  else{
    alert("Your brush size must be greater than 0.");
    brushSize.value = size;
  }
});


