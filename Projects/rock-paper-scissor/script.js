let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let resetbtn=document.querySelector("#resetbutton")

const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#compscore");
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  // generate random no.
  const randIdx = Math.floor(Math.random() * 3); // 3 means 0->2 value random
  // rock, paper,scissors
  return options[randIdx];
};

const reset=()=>{
     userScorePara.innerText="0"
     compScorePara.innerText="0"
}

const drawGame = () => {
  msg.innerText = "Draw,Play again !!";
  msg.style.backgroundColor = "yellow";
  msg.style.color = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    console.log("you win");
    userScorePara.innerText = userScore;
    msg.innerText = `You win, Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you loose");
    msg.innerText = `You Loose , ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  }
};

const playGame = (userChoice) => {
  
  // generate com choice
  const compChoice = genCompChoice();
   
  if (userChoice === compChoice) {
    // draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

resetbtn.addEventListener("click",reset)