const inputToggle = document.getElementById("toggle");
const bodyEl = document.body;

function checkedToggle() {
  const isToggle = inputToggle.checked;

  if (isToggle) {
    bodyEl.style.backgroundColor = "black";
  } else {
    bodyEl.style.backgroundColor = "white";
  }
}

inputToggle.addEventListener("input", checkedToggle);
