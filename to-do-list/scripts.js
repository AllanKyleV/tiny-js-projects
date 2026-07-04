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
        const content = document.createElement("span")
        const completeBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");

        // Get text content.
        content.textContent = inputTask.value;
        completeBtn.textContent = "Completed";
        deleteBtn.textContent = "Delete";

        // Append.
        ul.append(li);
        li.append(content);
        li.append(completeBtn);
        li.append(deleteBtn);

        // Clear Input.
        inputTask.value = "";

        // Click complete.
        completeBtn.addEventListener("click", () => {

            if (content.style.textDecoration === "line-through") {
                content.style.textDecoration = "none";
                completeBtn.textContent = "Completed";
            } else {
                content.style.textDecoration = "line-through";
                completeBtn.textContent = "Undo";
            }
        });

        // Delete task.
        deleteBtn.addEventListener("click", () => {
            li.remove();
        })
    }
});