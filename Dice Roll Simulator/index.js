const rollResultData = [];
const ulElement = document.getElementById("roll-result");
const diceElement = document.getElementById("dice");
const btnRoll = document.getElementById("rolling");

// Generate number for roll number
function rollGenerator() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

// generate roll result
function roll() {
  const rollResult = rollGenerator();
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

// create span element
function spanElement() {
  const diceRoll = roll();
  const rollNumbering = `Roll ${rollResultData.length + 1}:`;

  diceElement.innerHTML = `<span>${diceRoll}</span>`;

  const data = {
    rollNumber: rollNumbering,
    rollResult: diceRoll,
  };

  rollResultData.push(data);
  updateRollList();
}

function updateRollList() {
  let list = "";

  rollResultData.forEach((data) => {
    list += `
    <li>
        <p>${data.rollNumber}</p>
        <span>${data.rollResult}</span>
    </li> `;
  });

  ulElement.innerHTML = list;
}

function rollDice() {
  diceElement.classList.add("roll");

  setTimeout(() => {
    diceElement.classList.remove("roll");
    spanElement();
  }, 1500);
}

btnRoll.addEventListener("click", rollDice);
