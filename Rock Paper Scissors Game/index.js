const buttons = document.querySelectorAll("button");
const resultTextEl = document.getElementById("result-text");
const playerSpanEl = document.getElementById("player-score");
const computerSpanEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

// step 1 Create computer moved
function computerMovedPicker() {
  let moved = null;
  const picker = Math.floor(Math.random() * 3) + 1;

  switch (picker) {
    case 1:
      moved = "rock";
      break;
    case 2:
      moved = "paper";
      break;
    case 3:
      moved = "scissor";
      break;
    default:
      alert("No moved picked retry again");
      break;
  }

  return moved;
}

// step 2 compare your move to computer
function playRound(myMoved) {
  let result;
  const computerMoved = computerMovedPicker();

  if (myMoved === computerMoved) {
    result = "It's a tie!";
  } else if (
    (myMoved === "rock" && computerMoved === "scissor") ||
    (myMoved === "paper" && computerMoved === "rock") ||
    (myMoved === "scissor" && computerMoved === "paper")
  ) {
    playerScore++;
    result = `You win! ${myMoved} beats ${computerMoved}`;
  } else {
    computerScore++;
    result = `You lose! ${computerMoved} beats ${myMoved}`;
  }
  resultTextEl.textContent = result;
  playerSpanEl.textContent = playerScore;
  computerSpanEl.textContent = computerScore;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});
