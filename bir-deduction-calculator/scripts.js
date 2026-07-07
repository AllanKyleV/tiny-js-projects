// Input
const input = document.getElementById("input");
const calculateBtn = document.getElementById("calculate");

// Goods & Supplies
const grossSupplies = document.getElementById("gross-supplies");
const ewtSupplies = document.getElementById("ewt-supplies");
const vatSupplies = document.getElementById("vat-supplies");
const netAmountSupplies = document.getElementById("net-amount-supplies");

// Meals & Snacks
const grossMeals = document.getElementById("gross-meals");
const ewtMeals = document.getElementById("ewt-meals");
const vatMeals = document.getElementById("vat-meals");
const netAmountMeals = document.getElementById("net-amount-meals");

// Get deductions.
function getDeduction(gross, percentage, isVat = true) {
    const baseAmount = isVat ? gross / 1.12 : gross;
    return Number((baseAmount * percentage).toFixed(2));
}

// Get net amount for supplies.
function getSuppliesNetAmount(gross) {
    const ewt = getDeduction(gross, 0.01);
    const finalVat = getDeduction(gross, 0.05);

    return Number((gross - ewt - finalVat).toFixed(2));
}

// Get net amount for meals.
function getMealsNetAmount(gross) {
    const ewt = gross * 0.02;
    const finalVat = gross * 0.03;

    return Number((gross - ewt - finalVat).toFixed(2));
}

// Calculate.
calculateBtn.addEventListener("click", () => {
    // Gross. 
    const gross = Number(input.value);

    // Display data on Goods & Supplies.
    grossSupplies.textContent = gross;
    ewtSupplies.textContent = getDeduction(gross, 0.01)
    vatSupplies.textContent = getDeduction(gross, 0.05);
    netAmountSupplies.textContent = getSuppliesNetAmount(gross);

    // Display data on Meals & Snacks.
    grossMeals.textContent = gross;
    ewtMeals.textContent = getDeduction(gross, 0.02, false);
    vatMeals.textContent = getDeduction(gross, 0.03, false);
    netAmountMeals.textContent = getMealsNetAmount(gross);
})