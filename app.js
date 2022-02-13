const descriptionBox = document.getElementById("description");
const priorityBox = document.getElementById("priority");
const dueDateBox = document.getElementById("due-date");

const createButton = document.getElementById("create-button");
createButton.onclick = onCreateButtonClicked;
function onCreateButtonClicked() {
    const description = descriptionBox.value;
    const priority = priorityBox.value;
    const dueDate = dueDateBox.value;
    
    if(description === "" || priority === "" || dueDate === "") {
        return;
    }

    let newRow = createNewToDoRow(priority, description, dueDate);

    let toDoTable = document.querySelector('table#to-do-table tbody');
    toDoTable.appendChild(newRow); 
}

function createNewToDoRow(priority, description, dueDate) {
    let newRow = document.createElement("tr");

    let newColumns = [];

    newColumns[0] = document.createElement("td");
    let completedCheckbox = document.createElement("input")
    completedCheckbox.setAttribute("type", "checkbox");
    newColumns[0].appendChild(completedCheckbox);

    newColumns[1] = document.createElement("td");
    newColumns[1].innerHTML = priority;

    newColumns[2] = document.createElement("td");
    newColumns[2].innerHTML = description;

    newColumns[3] = document.createElement("td");
    newColumns[3].innerHTML = dueDate;

    newColumns[4] = document.createElement("td");
    let removeButton = document.createElement("button");
    removeButton.setAttribute("type", "button");
    removeButton.innerHTML = "Remove";
    removeButton.onclick = onRemoveButtonClicked;
    newColumns[4].appendChild(removeButton);

    newColumns.forEach(col => newRow.appendChild(col));

    return newRow;
}

function onRemoveButtonClicked() {
    const enclosingRow = this.parentElement.parentElement;
    enclosingRow.remove();
}

// Initialize our table with example to-do's
let toDoTable = document.querySelector('table#to-do-table tbody');
toDoTable.appendChild(createNewToDoRow("Medium", "Wash dishes", "2022-02-13")); 
toDoTable.appendChild(createNewToDoRow("Low", "Laundry", "2022-02-14")); 
toDoTable.appendChild(createNewToDoRow("High", "Get the Kids!!!", "2022-02-14")); 