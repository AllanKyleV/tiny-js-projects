const countDisplay = document.querySelector("#count-display");
const increaseBtn = document.querySelector("#increase-btn");
const decreaseBtn = document.querySelector("#decrease-btn");
const resetBtn = document.querySelector("#reset-btn");

let count = 0;

function updateDisplay() {
    countDisplay.textContent = count;
}

increaseBtn.addEventListener("click", function() {
    count++;
    updateDisplay();
})

decreaseBtn.addEventListener("click", function() {
    count--;
    updateDisplay();
})

resetBtn.addEventListener("click", function() {
    count = 0;
    updateDisplay();
})