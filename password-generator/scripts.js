const passLength = document.querySelector("#length");
const uppercaseChecked = document.querySelector("#uppercase");
const lowercaseChecked = document.querySelector("#lowercase");
const numbersChecked = document.querySelector("#numbers");
const symbolsChecked = document.querySelector("#symbols");
const generateBtn = document.querySelector("#generate-btn");
const displayPassword = document.querySelector("#display-pass");

// Libraries
const letters = [
  "a", "b", "c", "d", "e", "f", "g",
  "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u",
  "v", "w", "x", "y", "z"
];

// Get random.
function getRandom(array) {
    return Math.floor(Math.random() * array.length)
}

// Generate lowercase.
function getLowerCase(letters, limit) {
    // loop the letters limit times.
    let result = [];
    
    for (let i = 0; i < limit; i++) {
        result.push(letters[getRandom(letters)]);
    }
    
    return result.join('');
}

// Generate uppercase.
function getUpperCase(letters, limit) {
    return getLowerCase(letters, limit).toUpperCase();
}

// Generate numbers 
function getNumbers(limit) {
    let result = [];
    for (let i = 0; i < limit; i++) {
        result.push(Math.floor(Math.random() * 10).toString());
    }
    return result.join('');
}

// Generate Symsbols
const symbols = "!@#$%^&*()-_=+[]{}|\\:;\"'<>,.?/";

function getSymbols(symbols, limit) {
    let result = [];
    for (let i = 0; i < limit; i++) {
        result.push(symbols[getRandom(symbols)]);
    }
    return result.join('');
}

const limit = 10;

// All characters.
let uppercase = getUpperCase(letters, limit);
let lowercase = getLowerCase(letters, limit);
let number = getNumbers(limit);
let symbol = getSymbols(symbols, limit);

// Get final password.
function generatePassword(allChars, limit) {
    let result = [];

    for (let i = 0; i < limit; i++ ) {
        result.push(allChars[getRandom(allChars)])
    }

    return result.join('');
}

// Generate button.
generateBtn.addEventListener("click", () => {
    // Validation.
    if (passLength.value === "") alert("Enter the desired password length.");

    let allChars = [];

    // Check boxes.
    if (uppercaseChecked.checked) allChars.push(...uppercase);
    if (lowercaseChecked.checked) allChars.push(...lowercase);
    if (numbersChecked.checked) allChars.push(...number);
    if (symbolsChecked.checked) allChars.push(...symbol);

    displayPassword.textContent = generatePassword(allChars, passLength.value);
});