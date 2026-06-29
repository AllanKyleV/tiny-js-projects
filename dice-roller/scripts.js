const diceDisplay = document.querySelector("#dice-display");
const rollBtn = document.querySelector("#roll-btn");

// Ahh.. roll dice, another function that requires Math.random

// function rollDice() {
//     return Math.floor(Math.random() * 6);
// }
// Should not return 0 value

// Probalbly don't need an array.
// let diceValues = [1, 2, 3, 4, 5, 6];

// function rollDice(diceValues) {
//     return Math.floor(Math.random() * diceValues.length)
// }

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

rollBtn.addEventListener("click", () => {
    // diceDisplay.textContent = array[rollDice(array)];
    diceDisplay.textContent = rollDice();
});