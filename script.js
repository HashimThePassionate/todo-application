let id = (id) => document.getElementById(id);
let btn = id('add-todo-btn')

let addtodobtn = id('add-todo-btn')
let todopopup = id('todo-popup');
let savetodo = id('save-todo-btn');
let closepopupbtn = id('close-popup-btn');
let todoinput = id('todo-input');
let todolist = id('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let editindex = null;

addtodobtn.addEventListener('click',()=>{
    todopopup.style.display = 'flex';
    todoinput.value = '';
    editindex = null;
});

closepopupbtn.addEventListener(
    'click', () => {
        todopopup.style.display = 'none';
    }
);

savetodo.addEventListener(
    'click', 
    () => {
        let todotext = todoinput.value.trim();
        if (todotext){
            if (editindex !== null){
                todos[editindex] = todotext
            }
            else{
                todos.push(todotext)
            }
        localStorage.setItem('todos',
            JSON.stringify(todos)
        )
        renderTodos();
        todopopup.style.display = 'none';
        }
        else{
            alert('Please enter a todo')
        }
    }
);

// Render Todos
function renderTodos() {
    todolist.innerHTML = ''; // Clear the existing list
    todos.forEach((todo, index) => {
        let li = document.createElement('li'); // Create a new list item
        li.innerHTML = `
            <span>${todo}</span>
            <div>
                <button class="edit-btn" onclick="editTodo(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
            </div>
        `;
        todolist.appendChild(li); // Add the list item to the todo list
    });
}

window.editTodo = function (i){
    todoinput.value = todos[i];
    editindex = i;
    todopopup.style.display = 'flex';
}

window.deleteTodo = function (index) {
    if (confirm('Are you sure you want to delete this todo?')) {
        todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
    }
};

// Initial Load
renderTodos();