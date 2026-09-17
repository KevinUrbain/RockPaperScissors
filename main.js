// =========================================================
// 1. ELEMENTS SELECTION
// =========================================================

const choices = ["rock", "paper", "scissors"];

//Scores display
const computerDisplayScore = document.querySelector("#computer-score");
const humanDisplayScore = document.querySelector("#player-score");
const resultDisplay = document.querySelector(".result-display");

//buttons Node List
const choicesButtons = document.querySelectorAll("#rock, #paper, #scissors");

// =========================================================
// 2. STATE
// =========================================================
let round = 0;
const maxRound = 5;
let humanScore = 0;
let computerScore = 0;

// =========================================================
// 3. DOMAIN LOGIC
// =========================================================

function findRandomIndex() {
  return Math.floor(Math.random() * choices.length);
}

function getComputerChoice() {
  const index = findRandomIndex();
  return choices[index];
}

function playOneRound(human, computer) {
  if (human === "rock" && computer === "paper") {
    computerScore++;
  } else if (human === "rock" && computer === "scissors") {
    humanScore++;
  } else if (human === "paper" && computer === "scissors") {
    computerScore++;
  } else if (human === "paper" && computer === "rock") {
    humanScore++;
  } else if (human === "scissors" && computer === "paper") {
    humanScore++;
  } else if (computer === "scissors" && human === "rock") {
    computerScore++;
  } else if (computer === "rock" && human === "scissors") {
    computerScore++;
  } else if (computer === "paper" && human === "scissors") {
    humanScore++;
  }

  round++;
}

// =========================================================
// 4. VISUAL RENDERING
// =========================================================

function displayToScreen() {
  const result = document.querySelector("#result");

  result.textContent = `round ${round}`;

  computerDisplayScore.textContent = `${computerScore}`;
  humanDisplayScore.textContent = `${humanScore}`;
}

function endGame() {
  const result = document.querySelector("#result");

  if (humanScore > computerScore) {
    result.textContent = "The winner is YOU !";
  } else if (humanScore === computerScore) {
    result.textContent = "It's a Tie";
  } else {
    result.textContent = "The winner is COMPUTER";
  }

  const restart = document.createElement("button");
  restart.textContent = "Restart";
  result.appendChild(restart);

  restart.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    round = 0;

    humanDisplayScore.textContent = humanScore;
    computerDisplayScore.textContent = computerScore;
    resultDisplay.innerHTML = "<p id='result'> Let's make a choice !</p>";
  });
}

//=====================================events

choicesButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (round >= maxRound) {
      return;
    }

    const humanSelection = e.target.id;
    const computerSelection = getComputerChoice();
    playOneRound(humanSelection, computerSelection);

    displayToScreen();

    if (round === maxRound) {
      endGame();
    }
  });
});
