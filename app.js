const displayComputerChoice = document.getElementById("computer-choice");
const displayUserChoice = document.getElementById("user-choice");
const displayResult = document.getElementById("result");
const choices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

choices.forEach((choices) =>
  choices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    displayUserChoice.innerHTML = userChoice;
    makeComputerChoice();
    getResult();
  })
);

function makeComputerChoice() {
  const randomNumber = Math.floor(Math.random() * choices.length + 1);
  console.log(randomNumber);

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  displayComputerChoice.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "User wins!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "Computer wins!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "User wins!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "Computer wins!";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "User wins!";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "Computer wins!";
  }
  displayResult.innerHTML = result;
}
