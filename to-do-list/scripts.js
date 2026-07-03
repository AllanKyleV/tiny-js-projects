const inputTask = document.querySelector("#input-task");
const addTaskBtn = document.querySelector("#create-task-btn");
const ul = document.querySelector("#list-container");

addTaskBtn.addEventListener("click", (e) => {
    // Prevent refreshing the display.
    e.preventDefault();

    // Validate the input.
    if (inputTask.value === "") {
        alert("Input Must Not Be Empty!")
    } else {
        // Proceed.

        // Create task with buttons.
        const li = document.createElement("li");
        const completeBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");

        // Get text content and Append.
        li.textContent = inputTask.value;
        completeBtn.textContent = "Completed";
        deleteBtn.textContent = "Delete";
        ul.append(li);
        ul.append(completeBtn);
        ul.append(deleteBtn);

        // Clear Input.
        inputTask.value = "";
    }
});

