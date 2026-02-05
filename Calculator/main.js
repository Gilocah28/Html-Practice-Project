const buttons = document.querySelectorAll("button");
const currentDisplay = document.querySelector(".current-operand");
const previousDisplay = document.querySelector(".previous-operand");

let currentValue = null;
let previousValue = null;
let result = null;
let operatorType = null;

const operatorMap = {
  addition: "+",
  subtract: "-",
  multiply: "×",
  divide: "÷",
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.number) {
      if (currentDisplay.textContent === "0") {
        currentDisplay.textContent = button.dataset.number;
      } else {
        currentDisplay.textContent += button.dataset.number;
      }
    } else if (button.dataset.float) {
      if (
        currentDisplay.textContent === "" ||
        currentDisplay.textContent.includes(".")
      ) {
        return;
      } else {
        currentDisplay.textContent += button.dataset.float;
      }
    } else if (button.dataset.operator) {
      if (currentDisplay.textContent === "") return;

      if (previousValue !== null && currentDisplay.textContent !== "") {
        calculateData(operatorType);
      }

      operatorType = operatorMap[button.dataset.operator];
      previousDisplay.textContent = `${currentDisplay.textContent} ${operatorType}`;
      previousValue = parseFloat(currentDisplay.textContent);
      currentDisplay.textContent = "";
    } else if (button.dataset.equals) {
      if (currentDisplay.textContent === "") return;
      // call calculator fn
      calculateData(operatorType);
    } else if (button.dataset.delete) {
      currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
    } else if (button.dataset.reset) {
      currentValue = null;
      previousValue = null;
      result = null;
      operatorType = null;
      currentDisplay.textContent = "";
      previousDisplay.textContent = "";
    }
  });
});

function calculateData(operandType) {
  currentValue = parseFloat(currentDisplay.textContent);
  switch (operandType) {
    case "+":
      result = previousValue + currentValue;
      break;
    case "-":
      result = previousValue - currentValue;
      break;
    case "×":
      result = previousValue * currentValue;
      break;
    case "÷":
      

      result = previousValue / currentValue;
      break;
    default:
      break;
  }
  currentDisplay.textContent = result; // show result for chaining
  previousValue = result; // store result for next operation
  previousDisplay.textContent = "";
  currentValue = null;
  operatorType = null;
}
