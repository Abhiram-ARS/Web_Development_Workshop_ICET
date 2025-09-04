function addTask() {
    let taskInput = document.getElementById("taskInput")
    let taskList = document.getElementById("taskList")
    let taskText = taskInput.value.trim()

    if(taskText === ""){
        alert("Please enter a Task")
        console.log("blank")
        return
    }

    let listItem = document.createElement("listItem")
    listItem.innerHTML =` ${taskText} <button class="deleteBtn" onclick="deleteTask(this)">❌</button><br>`
    taskList.appendChild(listItem)
    taskInput.value = "";
}

function deleteTask(buttonElement) {
    let taskList = document.getElementById("taskList")
    let listItem = buttonElement.parentElement;
    taskList.removeChild(listItem)
}
