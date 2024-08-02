document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newTaskText = todoInput.value.trim();
        if (newTaskText !== '') {
            const newTask = document.createElement('li');
            newTask.contentEditable = 'true';
            newTask.innerHTML = `${newTaskText} <button class="delete-btn">Delete</button>`;

            todoList.appendChild(newTask);
            todoInput.value = '';
        }
    });

    todoList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const task = event.target.parentElement;
            todoList.removeChild(task);
        }
    });
});