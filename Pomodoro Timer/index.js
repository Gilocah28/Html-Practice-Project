// get all element here !!!!
const timerDisplay = document.getElementById("timerDisplay");
const startBtn = document.getElementById("start");
const stoptBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Display the timer
let minutes = 1;
let second = 0;
let intervalID;

function displayTimer() {
  const secondStringFormat = `${second < 10 ? "0" + second : second}`;
  const minuteStringFormat = `${minutes < 10 ? "0" + minutes : minutes}`;
  timerDisplay.innerHTML = `${minuteStringFormat}:${secondStringFormat}`;
}

// start the timer
function startTimer() {
  intervalID = setInterval(function () {
    if (minutes === 0 && second === 0) {
      stopTimer();
      document.body.style.backgroundColor = "red";
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
startBtn.addEventListener("click", startTimer);

// stop the timer
function stopTimer() {
  clearInterval(intervalID);
}

// reset the time

//excute all code or press the button
