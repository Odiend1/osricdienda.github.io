var board = document.getElementById("board");
var s1 = document.getElementById("section1");
var s2 = document.getElementById("section2");
var s3 = document.getElementById("section3");
var s4 = document.getElementById("section4");
var s5 = document.getElementById("section5");
var s6 = document.getElementById("section6");
var s7 = document.getElementById("section7");
var s8 = document.getElementById("section8");
var s9 = document.getElementById("section9");

var sections = [s1, s2, s3, s4, s5, s6, s7, s8, s9];

s3.src = "x.png";
var filled = [s3]

var turn = 1;
var isMove = true;
gameOver = false;

var wins = [[s1, s2, s3], [s4, s5, s6], [s7, s8, s9], [s1, s4, s7], [s2, s5, s8], [s3, s6, s9], [s1, s5, s9], [s3, s5, s7]];

var xWins = [[s3, s2, s6, s9, s5], [s3, s1, s6, s9, s5], [s3, s4, s5, s7, s1], [s3, s7, s1, s2, s9], [s3, s8, s1, s2, s5], [s3, s9, s2, s1, s5], [s3, s6, s2, s1, s5], [s3, s5, s7, s1, s9], [s3, s5, s7, s9, s1]]
var draws = []

var difficulty = window.location.href.split("?")[1].split("=")[1]

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}


function move(){
  var played = false;

  // Check for player wins
  for(var win of wins){
    var winSpacesFilled = 0;
    var winSpaces = [];
    for(i = 0; i < filled.length/2; i++){
      if(win.includes(filled[i*2])) { winSpacesFilled++; winSpaces.push(filled[i*2]);}
    }
    if(winSpacesFilled >= 2){
      played = true;
      if(!filled.includes(win[0]) && filled.indexOf(win[1]) % 2 === 0 && filled.indexOf(win[2]) % 2 === 0) {win[0].src = "x.png"; filled.push(win[0]); gameOver = true}
      else if(!filled.includes(win[1]) && filled.indexOf(win[0]) % 2 === 0 && filled.indexOf(win[2]) % 2 === 0) {win[1].src = "x.png"; filled.push(win[1]); gameOver = true}
      else if(!filled.includes(win[2]) && filled.indexOf(win[0]) % 2 === 0 && filled.indexOf(win[1]) % 2 === 0) {win[2].src = "x.png"; filled.push(win[2]); gameOver = true}
      else played = false;
      if(played) {setTimeout(function(){alert("GG!")}, 250); break;};
    }
  }

  if(played) return;

  // Check for best move that isn't a win
  for(var win of xWins){
    if(arraysEqual(filled, win.slice(0, filled.length))){
      win[turn * 2 - 2].src = "x.png"
      filled.push(win[turn * 2 - 2])
      isMove = true;
      played = true;
      break;
    }
  }

  if(played) return;

  // Block opponent win
  for(var win of wins){
    var winSpacesFilled = 0;
    var winSpaces = [];
    for(i = 0; i < filled.length/2; i++){
      if(win.includes(filled[i*2+1])) { winSpacesFilled++; winSpaces.push(filled[i*2+1]);}
    }
    if(winSpacesFilled >= 2){
      played = true;
      if(!filled.includes(win[0])) {win[0].src = "x.png"; filled.push(win[0])}
      else if(!filled.includes(win[1])) {win[1].src = "x.png"; filled.push(win[1])}
      else if(!filled.includes(win[2])) {win[2].src = "x.png"; filled.push(win[2])}
      else played = false;
      if(played) break;
    }
  }

  isMove = true;
  
}

// Allow player to plot 
sections.forEach((s) => {
  s.onclick = function(){
    if(!filled.includes(s) && isMove && !gameOver){
      isMove = false;
      s.src = "o.png";
      filled.push(s);
      turn++;
      setTimeout(move, 1000);
    }
  }
})

