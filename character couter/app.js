const textAreaEl = document.getElementById("textarea");
const CharEl = document.querySelector(".character-counter");
const remainingEl = document.querySelector(".remaining");

const maxLength = textAreaEl.maxLength;
function firstLoad() {
  remainingEl.textContent = maxLength;
}
firstLoad();

textAreaEl.addEventListener("keyup", () => {
  const keyCounter = textAreaEl.value.length;
  CharEl.textContent = keyCounter;

  remainingEl.textContent = maxLength;

  const remaining = maxLength - keyCounter;

  remainingEl.textContent = remaining;
});
