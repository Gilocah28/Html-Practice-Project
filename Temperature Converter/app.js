const celsiusInpt = document.getElementById("celsius");
const fahranhietInpt = document.getElementById("fahrenheit");
const kelvinInpt = document.getElementById("kelvin");

function degreeConverter(event) {
  const degree = event.target.id;
  switch (degree) {
    case "celsius":
      celsiusConverter();
      break;
    case "fahrenheit":
      fahrenheitConverter();
      break;
    case "kelvin":
      kelvinConverter();
      break;
    default:
      alert("Have error Converting");
  }
}

function celsiusConverter() {
  const celValue = Number(celsiusInpt.value);
  fahranhietInpt.value = celValue * 1.8 + 32;
  kelvinInpt.value = celValue + 273.15;
}

function fahrenheitConverter() {
  const fahranhietVal = Number(fahranhietInpt.value);
  celsiusInpt.value = fixedNumberDecimal(((fahranhietVal - 32) * 5) / 9);
  kelvinInpt.value = fixedNumberDecimal(
    ((fahranhietVal - 32) * 5) / 9 + 273.15
  );
}

function kelvinConverter() {
  const kelvinVal = number(kelvinInpt.value);
  celsiusInpt.value = fixedNumberDecimal(kelvinVal - 273.15);
  fahranhietInpt.value = fixedNumberDecimal(
    ((kelvinVal - 273.15) * 9) / 5 + 32
  );
}

function fixedNumberDecimal(num) {
  return num.toFixed(2);
}
