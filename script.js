let id = (id) => document.getElementById(id);
let addtodobtn = id('add-todo-btn');
let todopopup = id('todo-popup');
let savetodo = id('save-todo-btn');
let closepopupbtn = id('close-popup-btn');
let todoinput = id('todo-input');
let todolist = id('todo-list');

let deletePopup = id('delete-popup');
let confirmDeleteBtn = id('confirm-delete-btn');
let cancelDeleteBtn = id('cancel-delete-btn');
let deleteIndex = null;

let alertPopup = id('alert-popup');
let closeAlertBtn = id('close-alert-btn');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let editindex = null;

addtodobtn.addEventListener('click', () => {
    todopopup.style.display = 'flex';
    todoinput.value = '';
    editindex = null;
});

closepopupbtn.addEventListener('click', () => {
    fadeOutPopup(todopopup);
});

savetodo.addEventListener('click', () => {
    let todotext = todoinput.value.trim();
    if (todotext) {
        if (editindex !== null) {
            todos[editindex] = todotext;
        } else {
            todos.push(todotext);
        }
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
        fadeOutPopup(todopopup);
    } else {
        // Show the custom alert popup
        alertPopup.style.display = 'flex';
    }
});

// Close the alert popup
closeAlertBtn.addEventListener('click', () => {
    fadeOutPopup(alertPopup);
});

// Render Todos
function renderTodos() {
    todolist.innerHTML = '';
    if (todos.length > 0) {
        todolist.style.display = 'block'; // Show the list if there are items
    } else {
        todolist.style.display = 'none'; // Hide the list if it's empty
    }

    todos.forEach((todo, index) => {
        let li = document.createElement('li');
        li.innerHTML = `
            <span>${todo}</span>
            <div>
                <button class="edit-btn" onclick="editTodo(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
            </div>
        `;
        todolist.appendChild(li);
    });
}

window.editTodo = function (i) {
    todoinput.value = todos[i];
    editindex = i;
    todopopup.style.display = 'flex';
};

window.deleteTodo = function (index) {
    deleteIndex = index;
    deletePopup.style.display = 'flex';
};

confirmDeleteBtn.addEventListener('click', () => {
    if (deleteIndex !== null) {
        todos.splice(deleteIndex, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
        fadeOutPopup(deletePopup);
        deleteIndex = null;
    }
});

cancelDeleteBtn.addEventListener('click', () => {
    fadeOutPopup(deletePopup);
});

// Function to fade out the popup
function fadeOutPopup(popup) {
    popup.classList.add('fade-out');
    popup.addEventListener('animationend', () => {
        popup.style.display = 'none';
        popup.classList.remove('fade-out'); // Remove the class so it can be reused
    }, { once: true });
}

// Initial Load
renderTodos();
