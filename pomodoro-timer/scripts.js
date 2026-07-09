// Timer display elements
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// Buttons
const startBtn = document.querySelector(".start-btn");
const pauseBtn = document.querySelector(".pause-btn");
const resetBtn = document.querySelector(".reset");

// Count down
const defaultTime = 25 * 60;
let timeLeft = defaultTime;
let interval = null;

// Update timer
function updateTimer() {
    const hour = Math.floor(timeLeft / 3600);
    const min = Math.floor((timeLeft % 3600) / 60);
    const sec = timeLeft % 60;

    hours.textContent = hour.toString().padStart(2, "0");
    minutes.textContent = min.toString().padStart(2, "0");
    seconds.textContent = sec.toString().padStart(2, "0");
}

// Start timer
function startTimer() {
    if (interval) return;

    interval = setInterval(() => {
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(interval);
            interval = null;
            alert("Time's up!");
            timeLeft = defaultTime;
        }

        updateTimer();
    }, 1000);
}

function pauseTimer() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
}

function resetTimer() {
    pauseTimer();
    timeLeft = defaultTime;
    updateTimer();
}

updateTimer();

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);