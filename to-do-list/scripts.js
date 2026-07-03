const input = document.querySelector("#task-input");
const addTask = document.querySelector("#add-task");
const ul = document.querySelector("#list");

// Add task.
addTask.addEventListener("click", (e) => {
    e.preventDefault();
    // Create element.
    const li = document.createElement("li");
    li.textContent = input.value;

    // Check if empty.
    if (input.value === "") {
        alert("Input must not be empty. Silly!")
    } else {
        // Add element.
        ul.append(li);
    }
})

// If the task is created, also add complete 