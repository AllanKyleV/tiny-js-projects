const inputNote = document.querySelector('#input-note');
const addBtn = document.querySelector('#add-btn');
const retrieveBtn = document.querySelector('#retrieve-btn');
const list = document.querySelector('#display-note');
const clear = document.querySelector('#clear-btn');
const downloadNote = document.querySelector('#download-note');
const a = document.querySelector('a');

// This is our notes.
let notes = JSON.parse(localStorage.getItem('notes')) || [];

addBtn.addEventListener('click', () => {
  if (inputNote.value !== '') {
    notes.push(inputNote.value);
  }
  localStorage.setItem('notes', JSON.stringify(notes));
  inputNote.value = '';
})

retrieveBtn.addEventListener('click', () => {
  list.textContent = JSON.parse(localStorage.getItem('notes'));
})

clear.addEventListener('click', () => {
  localStorage.clear();
})

// Blob.
// Mini-project: Add a Download Note button that saves the note from the previous project as a .txt file.
downloadNote.addEventListener('click', () => {
  const blob = new Blob([notes.join('\n')], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  downloadNote.href = url;
  downloadNote.download = 'message.txt';
});

// 