const dateRange = document.getElementById("date-range");
const ageCalBtn = document.getElementById("calculate-age");
const spanResult = document.getElementById("result");

// console.log(now);

ageCalBtn.addEventListener("click", ageCalculator);

function ageCalculator() {
  const birthdate = new Date(dateRange.value);
  const dateNow = new Date();
  let ageNow = dateNow.getFullYear() - birthdate.getFullYear();
  const month = dateNow.getMonth() - birthdate.getMonth();

  if (month < 0 || (month === 0 && dateNow.getDate() < birth.getDate())) {
    ageNow--;
  }
  spanResult.innerHTML = `Your age is ${ageNow} ${
    ageNow > 1 ? "years" : "year"
  } old`;
}

const dateFormat = new Date();
const dateNow = dateFormat.toLocaleString("default", {
  month: "long",
  day: "numeric",
  weekday: "long",
});

console.log(dateNow);
