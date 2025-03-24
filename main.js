document.addEventListener("DOMContentLoaded", () => {
  let timer = 0;
  let timerInterval = null;

  const timerDisplay = document.getElementById("timerDisplay");
  const startButton = document.getElementById("startTimer");
  const stopButton = document.getElementById("stopTimer");
  const resetButton = document.getElementById("resetTimer");

  startButton.addEventListener("click", () => {
    if (!timerInterval) {
      timerInterval = setInterval(() => {
        timer++;
        timerDisplay.innerHTML = timer;
      }, 1000);
    }
  });

  stopButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
  });

  resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timer = 0;
    timerDisplay.innerHTML = timer;
  });
});
