// Timer display elements
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// Buttons
const startBtn = document.querySelector(".start-btn");
const pauseBtn = document.querySelector(".pause-btn");
const resetBtn = document.querySelector(".reset");

// Count down.
let timeLeft = 25 * 60;
let interval;

// Update timer.
function updateTimer() {
    // Convert hours, and minutes into seconds.
    const hour = Math.floor(timeLeft / 3600);
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;

    hours.textContent = hour.toString().padStart(2, "0");
    minutes.textContent = min.toString().padStart(2, "0");
    seconds.textContent = sec.toString().padStart(2, "0");
}

// Start timer.
const startTimer = () => {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Times up!");
            timeLeft = 25 * 60;
            updateTimer(); 
        }
    }, 1000)
}

startBtn.addEventListener("click", () => {
    startTimer()
})