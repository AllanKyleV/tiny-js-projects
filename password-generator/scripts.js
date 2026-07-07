const passLength = document.querySelector("#length");
const uppercaseChecked = document.querySelector("#uppercase");
const lowercaseChecked = document.querySelector("#lowercase");
const numbersChecked = document.querySelector("#numbers");
const symbolsChecked = document.querySelector("#symbols");

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

let allChars = [...uppercase, ...lowercase, ...number, ...symbol];
 
console.log(allChars);