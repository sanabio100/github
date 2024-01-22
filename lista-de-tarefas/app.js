document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskDescriptionInput = document.getElementById('taskDescription');
    const pendingList = document.getElementById('pendingList');
    const completedList = document.getElementById('completedList');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const taskDescription = taskDescriptionInput.value;

        if (taskDescription) {
            addTask(taskDescription);
            taskDescriptionInput.value = '';
        }
    });

    function addTask(description) {
        const taskItem = document.createElement('li');
        const currentTime = new Date().toLocaleString();

        taskItem.innerHTML = `
            ${description}
            <span>${currentTime}</span>
            <button onclick="completeTask(this)">Concluir</button>
            <button onclick="removeTask(this)">Remover</button>
        `;

        pendingList.appendChild(taskItem);
    }

    window.completeTask = function (button) {
        const taskItem = button.parentNode;
        completedList.appendChild(taskItem);
        button.remove(); // Remove "Concluir" button after completion
    };

    window.removeTask = function (button) {
        const taskItem = button.parentNode;
        taskItem.remove();
    };
});
