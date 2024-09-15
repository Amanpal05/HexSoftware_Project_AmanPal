document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
        taskInput.value = '';

        const editBtn = li.querySelector('.edit-btn');
        const deleteBtn = li.querySelector('.delete-btn');

        editBtn.addEventListener('click', () => {
            const newTaskText = prompt('Edit task:', taskText);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                li.querySelector('span').textContent = newTaskText.trim();
            }
        });

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });
    };

    addBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            addTask();
        }
    });
});
