const inputText = document.querySelector("#input-text");
const displayChar = document.querySelector("#display-char");
const displayWord = document.querySelector("#display-word");
const displayLine = document.querySelector("#display-line");

// Count the number of character in the string.
function countCharacter(str) {
    return str.split(' ').join('').length;
}

// Count Words.
function countWord(str) {
    // Spaces not count.
    const cleanStr = str.trim();
    if (cleanStr === "") return 0;
    
    return cleanStr.split(/\s+/).length;
}

// Set character limit.
function limitChar(count) {
    return count >= 200 ? "red" : "black";
} 

// Count the lines.
function countLines(str) {
    if (str === "") return 0;

    return str.split("\n").length;
}

// To update counter.
function updateCount() {
    const text = inputText.value;

    displayChar.textContent = countCharacter(text);
    displayWord.textContent = countWord(text);
    displayChar.style.color = limitChar(countCharacter(text));
    displayLine.textContent = countLines(text);
}


// Update.
inputText.addEventListener("input", updateCount);
updateCount();