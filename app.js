const createButton = document.getElementById("create-button");
createButton.onclick = onCreateButtonClicked;
function onCreateButtonClicked() {
    console.log(descriptionBox.value);
    console.log(priorityBox.value);
    console.log(dueDateBox.value);
    const desc = descriptionBox.value;
    const priority = priorityBox.value;
    const date = dueDateBox.value;
    
    if(desc === "") {
        return;
    }
    console.log("I got here");
}

const descriptionBox = document.getElementById("description");
const priorityBox = document.getElementById("priority");
const dueDateBox = document.getElementById("due-date");

