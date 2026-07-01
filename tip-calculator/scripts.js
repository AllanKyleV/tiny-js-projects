const billAmount = document.querySelector("#bill-amount");
const tipPercentage = document.querySelector("#tip-percentage");
const calcBtn = document.querySelector("#calc-btn");
const tipDisplay = document.querySelector("#tip-display");
const resultDisplay = document.querySelector("#result-display");
const errorDisplay = document.querySelector("#error-display");

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

// Get the tip amount.
function getTip(bill, tip) {
    return tip / 100 * bill;
};

// Get the total amount.
function getTotal(bill, tip) {
    return bill + getTip(bill, tip);
};

// Validation.
// Inputs are must. No negative values.
function validation(bill, tip) {

    if (bill === "" || tip === "") return "Inputs are must."
    if (bill < 0 || tip < 0) return "No negative values"
}

calcBtn.addEventListener("click", (e) => {
    // Prevent refreshing the display.
    e.preventDefault();

    // Convert the inputs to Numbers.
    const bill = Number(billAmount.value);
    const tip = Number(tipPercentage.value);

    // Validation.
    errorDisplay.textContent = validation(billAmount.value, tipPercentage.value);

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