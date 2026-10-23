/* =========================================
   DOM ELEMENTS
   Select the timer display and control buttons
========================================= */

const startEl = document.querySelector("#start");
const stopEl = document.querySelector("#stop");
const resetEl = document.querySelector("#reset");
const time = document.querySelector("#timer");


/* =========================================
   TIMER STATE
   Store the initial time, remaining time,
   and active interval ID
========================================= */

const INITIAL_TIME = 1500; // 25 minutes in seconds
let timeRemaining = INITIAL_TIME;
let intervalId = null;


/* =========================================
   TIME FORMATTING
   Convert remaining seconds into MM:SS format
========================================= */

const formatTime = (timeRemaining) => {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = Math.floor(timeRemaining % 60);

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};


/* =========================================
   TIMER CONTROLS
   Stop the countdown and clear the interval
========================================= */

const stopTimer = () => {
  clearInterval(intervalId);
  intervalId = null;
};


/* =========================================
   DISPLAY UPDATE
   Render the formatted time in the UI
========================================= */

const render = (formatTime) => (time.textContent = formatTime);


/* =========================================
   START BUTTON
   Begin the countdown if it isn't already running
========================================= */

const handleStartClick = () => {
  // Prevent multiple countdown intervals from running
  if (intervalId != null) {
    return;
  }

  intervalId = setInterval(() => {
    // Stop the countdown when it reaches zero
    if (timeRemaining <= 0) {
      stopTimer();
      return;
    }

    timeRemaining--;
    render(formatTime(timeRemaining));
  }, 1000);
};


/* =========================================
   RESET BUTTON
   Stop the countdown and restore the initial time
========================================= */

const handleResetClick = () => {
  stopTimer();
  timeRemaining = INITIAL_TIME;
  time.textContent = "25:00";
};


/* =========================================
   STOP BUTTON
   Pause the countdown without resetting the time
========================================= */

const handleStopClick = () => {
  stopTimer();
};


/* =========================================
   EVENT LISTENERS
   Connect each button to its handler
========================================= */

startEl.addEventListener("click", handleStartClick);
stopEl.addEventListener("click", handleStopClick);
resetEl.addEventListener("click", handleResetClick);


/* =========================================
   INITIAL RENDER
   Display the starting time when the page loads
========================================= */

render(formatTime(timeRemaining));