const createButton = document.getElementById("create-button");
createButton.onclick = onCreateButtonClicked;
function onCreateButtonClicked() {
    const desc = descriptionBox.value;
    const priority = priorityBox.value;
    const date = dueDateBox.value;
    
    if(desc === "" || priority === "" || date === "") {
        return;
    }

    console.log("got here");

    let newRow = document.createElement("tr");

    let newColumns = [];

    newColumns[0] = document.createElement("td");
    let completedCheckbox = document.createElement("input")
    completedCheckbox.setAttribute("type", "checkbox");
    newColumns[0].appendChild(completedCheckbox);

    newColumns[1] = document.createElement("td");
    newColumns[1].innerHTML = priority;

    newColumns[2] = document.createElement("td");
    newColumns[2].innerHTML = desc;

    newColumns[3] = document.createElement("td");
    newColumns[3].innerHTML = date;

    newColumns[4] = document.createElement("td");
    let removeButton = document.createElement("button");
    removeButton.setAttribute("type", "button");
    removeButton.innerHTML = "Remove";
    newColumns[4].appendChild(removeButton);

    newColumns.forEach(col => newRow.appendChild(col));

    let list = document.querySelector('table#to-do-table tbody');
    list.appendChild(newRow); 
}

const descriptionBox = document.getElementById("description");
const priorityBox = document.getElementById("priority");
const dueDateBox = document.getElementById("due-date");

        /*<tr>
            <td>
                <input type="checkbox" id="item1">
            </td>  
            <td>High</td>
            <td>Make the App</td>
            <td>2-15-22</td>
            <td>
                <button type="button">Remove</button>
            </td> 
          </tr> */