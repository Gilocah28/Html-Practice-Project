// get all element here !!!!
const timerDisplay = document.getElementById("timerDisplay");
const startBtn = document.getElementById("start");
const stoptBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Display the timer
let minutes = 25;
let second = 0;
let intervalID = null;

function displayTimer() {
  const secondStringFormat = `${second < 10 ? "0" + second : second}`;
  const minuteStringFormat = `${minutes < 10 ? "0" + minutes : minutes}`;
  timerDisplay.innerHTML = `${minuteStringFormat}:${secondStringFormat}`;
}

// start the timer
function startTimer() {
  startBtn.disabled = true;
  startBtn.style.opacity = 0.7;
  intervalID = setInterval(function () {
    if (minutes === 0 && second === 0) {
      stopTimer();
      minutes = 25;
      second = 0;
      displayTimer();
      return;
    } else if (second === 0) {
      minutes--;
      second = 60;
    }

    second--;
    displayTimer();
  }, 1000);
}

// stop the timer
function stopTimer() {
  clearInterval(intervalID);
  intervalID = null;
  startBtn.disabled = false;
  startBtn.style.opacity = 1;
}

// reset the time
function resetTimer() {
  clearInterval(intervalID);
  minutes = 25;
  second = 0;
  intervalID = null;
  displayTimer();
  startBtn.disabled = false;
  startBtn.style.opacity = 1;
}

//excute all code or press the button
startBtn.addEventListener("click", startTimer);
stoptBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
