var text = document.getElementById("text");
var ui = document.getElementById("ui");
var filename = document.getElementById("filename");

var save = document.getElementById("save");

text.style.height = window.innerHeight - ui.style.height;

function download(filename, text) {
  if(filename == ".txt") {
    filename = "notes.txt";
  }
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function downloadDoc(){
  download(filename.value + ".txt", text.value);
}