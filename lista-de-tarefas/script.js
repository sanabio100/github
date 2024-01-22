function addTask() {
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list-item');

    if (taskInput.value.trim() !== '') {
        var newTask = createTaskElement(taskInput.value);
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

function handleTaskCompletion(task) {
    var completedTasks = document.getElementById('completed-tasks');
    var taskList = document.getElementById('task-list-item');

    var checkbox = task.querySelector('input[type="checkbox"]');
    var timestamp = task.querySelector('.timestamp');

    if (checkbox.checked) {
        timestamp.textContent = 'Concluída em: ' + getFormattedTimestamp();
        task.classList.add('completed-task');
        completedTasks.insertBefore(task, completedTasks.firstChild);
    } else {
        timestamp.textContent = '';
        task.classList.remove('completed-task');
        taskList.appendChild(task);
    }
}

function createTaskElement(taskText) {
    var newTask = document.createElement('div');
    newTask.className = 'task';
    
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        handleTaskCompletion(newTask);
    });

    var taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;

    var timestamp = document.createElement('span');
    timestamp.className = 'timestamp';

    newTask.appendChild(checkbox);
    newTask.appendChild(taskTextElement);
    newTask.appendChild(timestamp);

    return newTask;
}

function getFormattedTimestamp() {
    var now = new Date();
    var formattedDate = now.toLocaleDateString();
    var formattedTime = now.toLocaleTimeString();
    return formattedDate + ' às ' + formattedTime;
}

document.getElementById('add-task-btn').addEventListener('click', addTask);
