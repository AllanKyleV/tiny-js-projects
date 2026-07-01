const billAmount = document.querySelector("#bill-amount");
const tipPercentage = document.querySelector("#tip-percentage");
const calcBtn = document.querySelector("#calc-btn");
const tipDisplay = document.querySelector("#tip-display");
const resultDisplay = document.querySelector("#result-display");

// Tip Calculator 
// Enter bill amount
//         ↓
// Enter tip percentage
//         ↓
// Click "Calculate"
//         ↓
// See:
// - Tip amount
// - Total bill

// Pseudocode:
// Accept inputs; bill amount, and tip percentage.
// Calculate N% of bill + bill. Formula; tip percentage * bill amount + bill amount.

// function getTip(tipPercentage, billAmount) {
//     return Number(tipPercentage) / 100 * Number(billAmount);
// }

// function getTotal(tipPercentage, billAmount) {
//     // Convert input to Number. And to percentage.
//     let percentage = Number(tipPercentage) / 100;

//     // Convert bill input to Number. And return result.
//     let bill = Number(billAmount);
//     return percentage * bill + bill;
// }

// Refactored:

// Get the tip amount.
function getTip(bill, tip) {
    return tip / 100 * bill;
};

// Get the total amount.
function getTotal(bill, tip) {
    return bill + getTip(bill, tip);
};

calcBtn.addEventListener("click", (e) => {
    // Prevent refreshing the display.
    e.preventDefault();

    // Convert the inputs to Numbers.
    const bill = Number(billAmount.value);
    const tip = Number(tipPercentage.value);

    // If input has no value, display note:

    // Display tip total.
    tipDisplay.textContent = getTip(bill, tip)

    // Calculate total.
    resultDisplay.textContent = getTotal(bill, tip);
});

// Additional features.
// ✨ Round the result to 2 decimal places.
// ✨ Don't allow negative values.
// ✨ Show an error if inputs are empty.
// ✨ Add preset buttons like 10%, 15%, and 20% instead of requiring the user to type the percentage.