const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const calcBtn = document.querySelector("#calc-btn");
const bmiResult = document.querySelector("#bmi-result");
const bmiStatus = document.querySelector("#bmi-status");

// Create a function that takes inputs; height and weight.
// The formula is: BMI = weight / (height in meters × height in meters)
// Get the data from the input. And convert them into Numbers.
// Round off the decimal using Math.ceil() function.

function getBMI(heightCm, weightKg) {
    
    // Convert height to Number, and convert cm to meters.
    let height = Number(heightCm) / 100;

    // Squared the height.
    let heightSquared = height * height;

    // Convert the weight to Number.
    let weight = Number(weightKg);

    // Round off the result into 1 demimal place.
    return Math.ceil(weight / heightSquared * 10) / 10;
}

// BMI Status.
// | BMI          | Status      |
// | ------------ | ----------- |
// | Below 18.5   | Underweight |
// | 18.5 – 24.9  | Normal      |
// | 25 – 29.9    | Overweight  |
// | 30 and above | Obese       |

function getStatus(result) {
    if (result < 18.5) return "Underweight";
    if (result <= 24.9) return "Normal";
    if (result <= 29.9) return "Overweight";
    if (result >= 30) return "Obese";
}

calcBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Alert empty inputs and prevent an input that is not an actual number. Also, accept zero.
    if (height.value == "" || weight.value == "") {
        alert("Please enter both height and weight.");
    } else if (bmiResult.textContent === "NaN") {
        alert("Please input numbers only!")
    } else if (height.value <= 0 || weight.value <= 0) {
        alert("Inputs must be more than zero!")
    }

    bmiResult.textContent = getBMI(height.value, weight.value)

    bmiStatus.textContent = getStatus(getBMI(height.value, weight.value));
});

// Project #4 Improvements
// - [ ] Calculate BMI only once
// - [ ] Improve NaN validation
// - [ ] Fix BMI boundary conditions
// - [ ] Use <label> elements