const inputTask = document.querySelector('#input-task');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('#list-container');
const downloadTask = document.querySelector('#download-task');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function updateStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    list.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            updateStorage();
            renderTasks();
        });

        li.appendChild(removeButton);
        list.appendChild(li);
    });
}

addBtn.addEventListener('click', () => {
    const value = inputTask.value.trim();
    if (value !== '') {
        tasks.push(value);
        updateStorage();
        renderTasks();
    }

    inputTask.value = '';
});

renderTasks();

downloadTask.addEventListener('click', () => {
    const text = tasks.join('\r\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    downloadTask.href = url;
    downloadTask.download = 'tasks.txt';

    setTimeout(() => URL.revokeObjectURL(url), 1000);
});