const passLength = document.querySelector("#length");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");

// Libraries
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

// generate lowercase.
function getLowerCase(letters, limit) {
    // loop the letters limit times.
    let result = [];
    
    for (let i = 0; i < limit; i++) {
        result.push(letters[getRandom(letters)]);
    }
    
    return result.join('');
}
