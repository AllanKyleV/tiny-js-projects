const countDisplay = document.querySelector("#count-display");
const increaseBtn = document.querySelector("#increase-btn");
const decreaseBtn = document.querySelector("#decrease-btn");
const resetBtn = document.querySelector("#reset-btn");

let count = 0;

increaseBtn.addEventListener("click", function() {
    count++;
    countDisplay.textContent = count;
})

decreaseBtn.addEventListener("click", function() {
    count--;
    countDisplay.textContent = count;
})

resetBtn.addEventListener("click", function() {
    count = 0;
    countDisplay.textContent = count;
})