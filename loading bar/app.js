const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");

let idx = 0;
function updateLoading() {
  counterEl.textContent = `${idx}%`;
  barEl.style.width = `${idx}%`;
  idx++;
  if (idx <= 100) {
    setTimeout(updateLoading, 50);
  }
}

updateLoading();
