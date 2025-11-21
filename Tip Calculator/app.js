const amountInput = document.getElementById("amount");
const tipInput = document.getElementById("tip");
const btnCalcu = document.getElementById("calculate");
const totalCon = document.getElementById("tip-total");

function currencyConverter(total) {
  return `$${total.toFixed(2)}`;
}

function inputChecker() {
  const amount = Number(amountInput.value);
  const tipAmount = Number(tipInput.value);

  if (amount && tipAmount) {
    tipCalculator(amount, tipAmount);
  } else {
    alert("Please input on the field!");
  }
}

function tipCalculator(amount, tip) {
  const total = (amount / 1000) * tip;
  totalCon.innerHTML = currencyConverter(total);
  amountInput.value = "";
  tipInput.value = "";
}

btnCalcu.addEventListener("click", inputChecker);
