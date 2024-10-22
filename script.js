let getById = (id) => document.getElementById(id);
let addTodoBtn = getById('add-todo-btn');
let todoPopup = getById('todo-popup');
let saveTodoBtn = getById('save-todo-btn');
let closePopupBtn = getById('close-popup-btn');
let todoInput = getById('todo-input');
let todoList = getById('todo-list');
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let editIndex = null;

// Show popup
addTodoBtn.addEventListener('click', () => {
    todoPopup.style.display = 'flex';
    todoInput.value = '';
    editIndex = null;
});

// Close popup
closePopupBtn.addEventListener('click', () => {
    todoPopup.style.display = 'none';
});

// Save Todo
saveTodoBtn.addEventListener('click', () => {
    let todoText = todoInput.value.trim();
    if (todoText) {
        if (editIndex !== null) {
            todos[editIndex] = todoText;
        } else {
            todos.push(todoText);
        }
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
        todoPopup.style.display = 'none';
    }
});

// Render Todos
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        let li = document.createElement('li');
        li.innerHTML = `
            <span>${todo}</span>
            <div>
                <button class="edit-btn" onclick="editTodo(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
            </div>
        `;
        todoList.appendChild(li);
    });
}


// Edit Todo
window.editTodo = function (index) {
    todoInput.value = todos[index];
    editIndex = index;
    todoPopup.style.display = 'flex';
};

// Delete Todo
window.deleteTodo = function (index) {
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
};

// Initial Load
renderTodos();
