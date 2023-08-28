"use strict";
const tasks = [];
function addTask(task) {
    const newTask = {
        id: tasks.length + 1,
        task: task,
        done: false,
    };
    tasks.push(newTask);
    updateTaskList();
}
function markTaskAsDone(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.done = true;
    }
    updateTaskList();
}
function markTaskAsUndone(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.done = false;
        updateTaskList();
    }
}
function updateTaskList() {
    const taskListElement = document.getElementById('taskList');
    if (taskListElement) {
        taskListElement.innerHTML = '';
        tasks.forEach(task => {
            const status = task.done ? '[x]' : '[ ]';
            const listItem = document.createElement('li');
            listItem.innerText = `${status} ${task.task}`;
            listItem.dataset.id = task.id.toString();
            listItem.addEventListener('click', () => {
                if (task.done) {
                    markTaskAsUndone(task.id);
                }
                else {
                    markTaskAsDone(task.id);
                }
            });
            taskListElement.appendChild(listItem);
        });
    }
}
const addTaskButton = document.getElementById("addTaskButton");
if (addTaskButton) {
    addTaskButton.addEventListener("click", () => {
        const newTaskInput = document.getElementById("newTaskInput");
        if (newTaskInput) {
            const newTaskText = newTaskInput.value;
            if (newTaskText.trim() !== "") {
                addTask(newTaskText);
                newTaskInput.value = "";
            }
        }
    });
}
addTask("Läs en bok");
