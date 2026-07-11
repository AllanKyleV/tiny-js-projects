const inputNote = document.querySelector("#input-note");
const addBtn = document.querySelector("#add-btn");
const retrieveBtn = document.querySelector("#retrieve-btn");
const list = document.querySelector("#display-note");

// // Add note, display when retrieved in clicked.
// addBtn.addEventListener("click", () => {

//     // To set a key value pairs.
//     localStorage.setItem("notes", inputNote.value);
//     inputNote.value = "";
// })

// retrieveBtn.addEventListener("click", () => {
//     // To retrieve the key.
//     list.textContent = localStorage.getItem("notes")
// })

// Set an array to be stored.
// Add items to array from input as add button clicked.
// convert the array as an array of storage items using JSON and stringify.
// Read/retrieve the array by parsing.

let notes = JSON.parse(localStorage.getItem("notes")) || [];

addBtn.addEventListener("click", () => {
    if (inputNote.value !== "") notes.push(inputNote.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    inputNote.value = "";
})

retrieveBtn.addEventListener("click", () => {
    list.textContent =  JSON.parse(localStorage.getItem("notes"));
})