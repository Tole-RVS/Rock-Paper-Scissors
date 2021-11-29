const buttonRock = document.getElementById('rock');
const buttonPaper = document.getElementById('paper');
const buttonSciss = document.getElementById('sciss');
const yourChoise = document.getElementById("youChose");
const button = document.getElementById("button");
const computer = document.getElementById("computer");
const won = document.getElementById("won");
const reset = document.getElementById("reset")

let index
let yourNum

function changeRock() {
  yourChoise.innerHTML="Rock"
  yourNum = 0
}

function changePaper() {
  yourChoise.innerHTML="Paper"
  yourNum = 1
}

function changeSciss() {
  yourChoise.innerHTML="Scissors"
  yourNum = 2
}

function random() {
  index = Math.random() * 3;
  index = Math.floor(index);

  if (index==0) {
    computer.innerHTML="Rock"
  } else if (index==1) {
    computer.innerHTML="Paper"
  } else {
    computer.innerHTML="Scissors"
  }

  if (index==yourNum) {
    won.innerHTML="Tie!"
  }else if (index==0 && yourNum==1) {
    won.innerHTML="You won!"
  }else if (index==0 && yourNum==2) {
    won.innerHTML="You lost!"
  }else if (index==1 && yourNum==0) {
    won.innerHTML="You lost!"
  }else if (index==2 && yourNum==0) {
    won.innerHTML="You won!"
  }else if (index==1 && yourNum==2) {
    won.innerHTML="You won!"
  }else if (index==2 && yourNum==1) {
    won.innerHTML="You lost!"
  }
}

function resetAll() {
  won.innerHTML=""
  computer.innerHTML=""
  yourChoise.innerHTML=""
}




reset.addEventListener("click", resetAll)
buttonRock.addEventListener("click", changeRock);
buttonPaper.addEventListener("click", changePaper);
buttonSciss.addEventListener("click", changeSciss);
button.addEventListener("click", random)
