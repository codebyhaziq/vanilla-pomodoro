const startEl = document.querySelector("#start");
const stopEl = document.querySelector("#stop");
const resetEl = document.querySelector("#reset");
const time = document.querySelector("#timer");
let timeLeft = 1500;
let intervalId = null;
const stopTimer = () => {
    clearInterval(intervalId)
    intervalId = null;
}
const handleStartClick = () => {
  if (intervalId != null) {
    return;
  }
  intervalId = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(intervalId);
      return;
    }
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = Math.floor(timeLeft % 60);
    time.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }, 1000);
};
startEl.addEventListener("click", handleStartClick);
const handleStopClick = () => {
  stopTimer()
};
stopEl.addEventListener("click", handleStopClick);
const handleResetClick = () => {
  stopTimer()
  timeLeft = 1500;
  time.textContent = "25:00";
};
resetEl.addEventListener("click", handleResetClick);
