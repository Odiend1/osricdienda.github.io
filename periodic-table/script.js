var cells = document.getElementsByTagName('td');
var elementCells = document.getElementsByClassName('element-cell');

function addAtomicNumbers(){
  for(var i = 0; i < elementCells.length; i++){
    var atomicNumberLabel = document.createElement('label');
    atomicNumberLabel.setAttribute('class', 'atomic-number');
    atomicNumberLabel.innerHTML = elementCells.item(i).id.split("-")[1];
    elementCells.item(i).appendChild(atomicNumberLabel);
  }
}

function timeToString(time) {
  let hours = Math.floor(time / 3600000);
  let minutes = Math.floor((time % 3600000) / 60000);
  let seconds = Math.floor((time % 60000) / 1000);
  let milliseconds = Math.floor((time % 1000) / 10);

  return (
      (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
      (minutes > 9 ? minutes : "0" + minutes) + ":" +
      (seconds > 9 ? seconds : "0" + seconds)
  );
}

var timeText = document.getElementById('time');
let startTime = 0;
let elapsedTime = 0;
let timerInterval;  

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function () {
      elapsedTime = Date.now() - startTime;
      timeText.textContent = timeToString(elapsedTime);
  }, 1000);
}

var elementData = rawElementData.elements;
var elementNames = [];
for(var i = 0; i < elementData.length; i++){
  elementNames.push(elementData[i].name.toLowerCase());
}
addAtomicNumbers();

var startButton = document.getElementById('start-button');
var settingsContainer = document.getElementById('settings-container');
var inputContainer = document.getElementById('input-container');
var gameInput = document.getElementById('game-input');
var scoreText = document.getElementById('score');
var currentElementNumber = 1;
var elementsAnsweredNum = 0;
var elementsAnswered = [];
var settings = {requireElementsInOrder: true, showSymbols: false, showColors: true, randomElements: false, randomElementsMin: 1, randomElementsMax: 118};
var randomMinInput = document.getElementById('random-element-min');
var randomMaxInput = document.getElementById('random-element-max');
var hintButton = document.getElementById("hint-button");
var hintText = document.getElementById("hint-text");
var hint = "";
var hintsGiven = 0;

document.getElementById('show-colors').onclick = function(){
  if(!this.checked){
    settings.showColors = false;
    for(var i = 0; i < elementCells.length; i++){
      elementCells.item(i).classList.add('no-color');
    }
  }
  else{
    settings.showColors = true;
    for(var i = 0; i < elementCells.length; i++){
      elementCells.item(i).classList.remove('no-color');
    }
  }
}
document.getElementById('elements-in-order').onclick = function(){
  if(this.checked){
    document.getElementById('random-elements').checked = false;
    document.getElementById('random-range-div').hidden = true;
  }
  else if(document.getElementById('random-elements').checked){
    document.getElementById('random-range-div').hidden = false;
  }
}
document.getElementById('random-elements').onclick = function(){
  if(this.checked){
    document.getElementById('elements-in-order').checked = false;
    document.getElementById('random-range-div').hidden = false;
  }
  else{
    document.getElementById('random-range-div').hidden = true;
  }
}
function rangeOverflow(el){
  el.value = parseInt(el.value);
  if(el.id == "random-element-max" && el.value == 0){
    el.value = 118;
  }
  else if(el.value < 1){
    el.value = 1;
  }
  else if(el.value > 118){
    el.value = 118;
  }
}
randomMinInput.addEventListener('change', function(){rangeOverflow(randomMinInput)})
randomMaxInput.addEventListener('change', function(){rangeOverflow(randomMaxInput)})

startButton.onclick = function(){
  settings.requireElementsInOrder = document.getElementById('elements-in-order').checked;
  settings.showSymbols = document.getElementById('show-symbols').checked;
  settings.randomElements = document.getElementById('random-elements').checked;
  if(settings.randomElements){
    settings.randomElementsMin = parseInt(randomMinInput.value);
    settings.randomElementsMax = parseInt(randomMaxInput.value);
    if(settings.randomElementsMin >= settings.randomElementsMax){
      alert("Invalid random element range!");
      return;
    }
    scoreText.textContent = "Score: " + elementsAnsweredNum + "/" + (settings.randomElementsMax - settings.randomElementsMin + 1);
  }
  settingsContainer.hidden = true;
  inputContainer.hidden = false;
  if(!settings.showSymbols){
    for(var i = 0; i < elementCells.length; i++){
      elementCells.item(i).innerHTML = "";
    }
    addAtomicNumbers();
  }
  else{
    for(var i = 0; i < elementCells.length; i++){
      elementCells.item(i).classList.add("unanswered");
    }
  }
  if(settings.randomElements) {
    do{
      currentElementNumber = Math.floor(Math.random()*(settings.randomElementsMax - settings.randomElementsMin + 1)) + settings.randomElementsMin;
    } while(currentElementNumber < settings.randomElementsMin || currentElementNumber > settings.randomElementsMax)
  }
  if(settings.requireElementsInOrder || settings.randomElements){
    document.getElementById("element-" + currentElementNumber).classList.add("highlighted-cell");
    if(!settings.showColors){
      document.getElementById("element-" + currentElementNumber).classList.add('yellow-highlighted-cell');
    }
  }
  startStopwatch();
  gameInput.focus();
}

gameInput.addEventListener('input', function(){
  if(gameInput.value.toLowerCase() === elementNames[currentElementNumber - 1] || (!settings.requireElementsInOrder && !settings.randomElements && elementNames.includes(gameInput.value.toLowerCase()))){
    elementsAnswered.push(currentElementNumber);
    var submittedElement = gameInput.value.toLowerCase();
    if(settings.requireElementsInOrder || settings.randomElements){
      document.getElementById("element-" + currentElementNumber).classList.remove("highlighted-cell");
      if(!settings.showColors){
        document.getElementById("element-" + currentElementNumber).classList.remove('yellow-highlighted-cell');
      }
    }
    else{
      currentElementNumber = elementNames.indexOf(submittedElement) + 1
    }
    gameInput.classList.add('correct-input');
    document.getElementById("element-" + currentElementNumber).classList.add('correct-input');
    setTimeout(function(){
      gameInput.classList.remove('correct-input')
      document.getElementById("element-" + currentElementNumber).classList.remove('correct-input')
    }, 334);
    gameInput.value = "";
    if(settings.showSymbols){
      document.getElementById("element-" + currentElementNumber).classList.remove("unanswered");
    }
    elementsAnsweredNum++;
    scoreText.textContent = "Score: " + elementsAnsweredNum + "/" + (!settings.randomElements ? 118 : settings.randomElementsMax - settings.randomElementsMin + 1);
    if(!settings.showSymbols) document.getElementById("element-" + currentElementNumber).innerHTML = elementData[currentElementNumber - 1].symbol + document.getElementById("element-" + currentElementNumber).innerHTML; // showing symbol after correct
    if(settings.requireElementsInOrder) currentElementNumber++;
    else if(settings.randomElements && elementsAnsweredNum < (settings.randomElementsMax - settings.randomElementsMin + 1)){
      do{
        currentElementNumber = Math.floor(Math.random()*(settings.randomElementsMax - settings.randomElementsMin + 1)) + settings.randomElementsMin;
      } while(elementsAnswered.includes(currentElementNumber) || currentElementNumber < settings.randomElementsMin || currentElementNumber > settings.randomElementsMax)
    }
    if(elementsAnsweredNum == 118 || (settings.randomElements && elementsAnsweredNum >= (settings.randomElementsMax - settings.randomElementsMin + 1))){
      clearInterval(timerInterval);
      gameInput.value = "You win!";
      gameInput.disabled = true;
      for(let i = 0; i < elementCells.length; i++){
        let elNum = i;
        setTimeout(function(){
          if(!settings.showColors) elementCells.item(elNum).classList.remove("no-color");
          elementCells.item(elNum).style.filter = "saturate(1000%)";
        }, i*10);
      }
      setTimeout(function(){
        document.body.innerHTML.append += `<script src="https://run.confettipage.com/here.js" data-confetticode="U2FsdGVkX1+ignqi7OK4M1psB2Am0PQY98yDsCb1KXpk+tDyAenMc1AFKo5gT+SXNX6posrD8j5ltwVy8/S+k7gY+7DqchSUW/hmmHbpiBgpUYSNUw21h1bjbywE8HkO8vub/ESPiN/ZafRoSwo3SkQYr9TG2XruPsN/BwXnn2NIRVU1O0U21MHDUSFNLVNwvjLQIWdm87Z6qFtaGQCzrYXAbOBUBsCI/k0e7aYTSX6csB0UFZnboWL2PmxbGj3z7zUEEQC0SI2cwk3yBQzX3QYmSOtN+rGcA2Uwb7Zyvq/OxzB0pJtGCbTZp2a80dGkQ/jnKjmgx71WB0eAbe/lZgbOyyulYu6kNi8Zv4pWerj2dE4cZu8us536aB7KOiaeEqEjIGfm/VZasjtUiKgKWP5d0wdNAMEHYR3z2zmFZhT9OYkZCTRVx/YNuNoeGe4HsBsDdvO3cg8yG9/cR2HSayzlpdaAZYrw731FPCsomupG2o/zYOrg7iJ5w1NX3DWPsK+T1d9v4CAkQ92AQWI2c4BxQHeazoy0q0cHNyuh8V6yr3hp/FhJ2X6W+/G3bauP4NidQ0oHlqMJOVCck+HprTutNSQurhnC+FSc7RetT9/usidSyv6mKlZ/9mH4xac8+7K/8o2N/RzhWKtFDmeIi+zgzRGAA+uuxlFqjGcgGDCfCHxzn8PVQ7l5PPC+yC70"></script>`;
      }, 1180)
    }
    else{
      if(settings.requireElementsInOrder || settings.randomElements) document.getElementById("element-" + currentElementNumber).classList.add("highlighted-cell");
      if(!settings.showColors){
        document.getElementById("element-" + currentElementNumber).classList.add('yellow-highlighted-cell');
      }
      hintsGiven = 0;
      hint = "";
      hintButton.innerHTML = "Get a Hint";
      hintText.innerHTML = "";
      gameInput.focus();
    }
  }
})

hintButton.onclick = function(){
  if(settings.requireElementsInOrder || settings.randomElements){
    var currentElementName = elementNames[currentElementNumber - 1];
    if(hintsGiven < currentElementName.length){
      if(hintsGiven == 0){
        for(var i = 0; i < currentElementName.length; i++){
          hint += "_ "
        }
        hint = hint.slice(0, -1);
      }
      hint = hint.substring(0, (hintsGiven)*2) + currentElementName.charAt(hintsGiven) + hint.substring((hintsGiven)*2+1); 
      hint = hint.toUpperCase();
      hintText.innerHTML = hint;
      hintsGiven++;
      hintButton.innerHTML = "Hint " + hintsGiven + "/" + currentElementName.length;
    }
  }
  gameInput.focus();
}

// Experimental resizing
/*
addEventListener('load', (event) => {
  for(let i = 0; i < elementCells.length; i++){
    elementCells.item(i).clientHeight = elementCells.item(i).clientWidth;
  }
})*/