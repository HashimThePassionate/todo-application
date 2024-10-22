# 📝 Todo Application

Welcome to the **Todo Application**! This is a simple and beautiful Todo app built with HTML, CSS, and JavaScript. It allows you to add, edit, and delete tasks, with data persistence using the browser's local storage.

## 📚 Table of Contents

- [📝 Todo Application](#-todo-application)
  - [📚 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🚀 How to Use](#-how-to-use)
  - [🧐 Line-by-Line Explanation](#-line-by-line-explanation)
    - [`index.html`](#indexhtml)
    - [`style.css`](#stylecss)
    - [`script.js`](#scriptjs)
      - [Variable Declarations and Initializations](#variable-declarations-and-initializations)
      - [Event Listeners](#event-listeners)
      - [Functions](#functions)
      - [Additional Notes](#additional-notes)
  - [🙏 Credits](#-credits)

## ✨ Features

- Add new todos 📝
- Edit existing todos ✏️
- Delete todos ❌
- Responsive design 📱
- Smooth animations and transitions 🎨
- Data persistence with Local Storage 💾

## 🚀 How to Use

1. **Download or Clone** the repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Click on the "**+ Add Todo**" button to add new tasks.
4. Use the "**Edit**" and "**Delete**" buttons to manage your tasks.

Enjoy your organized task management! 🎉

## 🧐 Line-by-Line Explanation

### `index.html`

Let's delve into the structure of the HTML file.

```html
<!DOCTYPE html>
<html lang="en">
```

- **Line 1**: Declares the document as an HTML5 document.
- **Line 2**: Opens the `<html>` tag with the language attribute set to English.

```html
<head>
    <meta charset="UTF-8">
```

- **Line 3**: Opens the `<head>` section containing metadata and links.
- **Line 4**: Sets the character encoding to UTF-8 for proper text rendering.

```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- **Line 5**: Ensures responsive design on various devices by setting the viewport.

```html
    <title>Todo App</title>
```

- **Line 6**: Sets the title of the webpage, which appears on the browser tab.

```html
    <link rel="stylesheet" href="style.css">
</head>
```

- **Line 7**: Links the external CSS file `style.css` for styling the webpage.
- **Line 8**: Closes the `<head>` section.

```html
<body>
    <div class="container">
```

- **Line 9**: Opens the `<body>` where the visible content resides.
- **Line 10**: Creates a `<div>` with class `container` to wrap the entire app content.

```html
        <header>
            <h1>Todo Application</h1>
            <button id="add-todo-btn">+ Add Todo</button>
        </header>
```

- **Lines 11-14**: Defines the header containing the app title and the "Add Todo" button with an ID for JavaScript targeting.

```html
        <main>
            <ul id="todo-list"></ul>
        </main>
```

- **Lines 15-17**: Creates the main section with an unordered list to display todos. The list has an ID for JavaScript manipulation.

```html
    </div>
```

- **Line 18**: Closes the `container` `<div>`.

```html
    <!-- Popup Form for Adding/Editing Todo -->
    <div class="popup" id="todo-popup">
        <div class="popup-content">
```

- **Lines 19-21**: Adds a hidden popup modal for adding or editing todos. The modal has an ID for toggling visibility.

```html
            <h2 id="popup-title">Add Todo</h2>
            <input type="text" id="todo-input" placeholder="Enter your task...">
```

- **Lines 22-23**: The popup contains a title and an input field for the todo text.

```html
            <button id="save-todo-btn">Save</button>
            <button id="close-popup-btn">Cancel</button>
        </div>
    </div>
```

- **Lines 24-27**: Includes "Save" and "Cancel" buttons with IDs for event handling, and closes the popup elements.

```html
    <script src="script.js"></script>
</body>
</html>
```

- **Line 28**: Links the external JavaScript file `script.js` to add functionality.
- **Lines 29-30**: Closes the `<body>` and `<html>` tags, ending the document.

---

### `style.css`

Let's explore how the CSS styles enhance the appearance of the app.

```css
/* styles.css */
body, html {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #f4f7fc;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

- **Lines 1-9**: Resets default margins and paddings, sets a clean font, applies a light background color, and centers the content both vertically and horizontally.

```css
.container {
    width: 600px;
    background: #fff;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    text-align: center;
}
```

- **Lines 11-17**: Styles the main container with a fixed width, white background, rounded corners, padding, and a subtle shadow for depth.

```css
h1 {
    font-size: 36px;
    color: #0b57d0;
    margin-bottom: 20px;
}
```

- **Lines 19-22**: Styles the main heading with a larger font size and a blue color to make it stand out.

```css
#add-todo-btn {
    padding: 12px 30px;
    background-color: #0b57d0;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 30px;
    font-size: 16px;
    transition: background 0.3s;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
```

- **Lines 24-34**: Styles the "Add Todo" button with padding, background color, white text, rounded edges, and a hover effect with transition.

```css
#add-todo-btn:hover {
    background-color: #084298;
}
```

- **Lines 36-38**: Changes the button's background color on hover for interactivity.

```css
main {
    margin-top: 30px;
}
```

- **Lines 40-42**: Adds spacing above the main content area.

```css
#todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
}
```

- **Lines 44-48**: Removes default list styles and spacing from the unordered list.

```css
#todo-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #eee9e9;
    margin-bottom: 15px;
    border-radius: 15px;
    transition: transform 0.3s, box-shadow 0.3s;
}
```

- **Lines 50-59**: Styles each todo item as a flex container, adds padding, background color, spacing between items, rounded corners, and a smooth hover transition.

```css
#todo-list li:hover {
    transform: translateY(-5px);
}
```

- **Lines 61-64**: Adds a lifting effect on hover to indicate interactivity.

```css
.todo-text {
    font-size: 18px;
    color: #333;
    flex: 1;
}
```

- **Lines 66-70**: Styles the todo text with a readable font size and ensures it takes up available space.

```css
#todo-list li button {
    padding: 10px 15px;
    border: none;
    border-radius: 20px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.3s;
    margin-left: 10px;
}
```

- **Lines 72-81**: Styles the "Edit" and "Delete" buttons inside each todo item with padding, no border, rounded edges, and hover effects.

```css
.edit-btn {
    background-color: #f1c40f;
}
```

- **Lines 83-85**: Sets the background color for the "Edit" button.

```css
.delete-btn {
    background-color: #e74c3c;
}
```

- **Lines 87-89**: Sets the background color for the "Delete" button.

```css
.edit-btn:hover {
    background-color: #f39c12;
}
```

- **Lines 91-94**: Changes the "Edit" button's background color on hover.

```css
.delete-btn:hover {
    background-color: #c0392b;
}
```

- **Lines 96-99**: Changes the "Delete" button's background color on hover.

```css
/* Popup Styling */
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: none;
    justify-content: center;
    align-items: center;
}
```

- **Lines 101-111**: Styles the popup overlay to cover the entire viewport with a semi-transparent background. Initially hidden (`display: none`).

```css
.popup-content {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    position: relative;
    animation: fadeIn 0.3s ease;
}
```

- **Lines 113-122**: Styles the popup content with padding, rounded corners, maximum width, and a fade-in animation.

```css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}
```

- **Lines 124-127**: Defines the `fadeIn` animation for a smooth appearance effect.

```css
#popup-title {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
}
```

- **Lines 129-133**: Styles the popup title with a larger font size and spacing.

```css
#todo-input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 15px;
    font-size: 16px;
}
```

- **Lines 135-142**: Styles the input field within the popup for better usability.

```css
button {
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    font-size: 14px;
    transition: background 0.3s;
}
```

- **Lines 144-151**: General styles for buttons to ensure consistent appearance and interactivity.

```css
button:hover {
    opacity: 0.9;
}
```

- **Lines 153-156**: Slightly reduces opacity on hover for visual feedback.

```css
#save-todo-btn {
    background-color: #0b57d0;
    color: #fff;
    margin-right: 10px;
}
```

- **Lines 158-162**: Styles the "Save" button with a blue background and white text.

```css
#close-popup-btn {
    background-color: #ccc;
    color: #333;
}
```

- **Lines 164-167**: Styles the "Cancel" button with a grey background.

```css
.popup-content button {
    width: 48%;
}
```

- **Lines 169-172**: Sets the width of the buttons inside the popup to align them side by side.

---

### `script.js`

Let's dive deeper into the JavaScript code to understand how it makes the app interactive and functional.

#### Variable Declarations and Initializations

```javascript
let getById = (id) => document.getElementById(id);
```

- **Line 1**: Defines a helper arrow function `getById` that simplifies the process of selecting DOM elements by their `id`.

```javascript
let addTodoBtn = getById('add-todo-btn');
let todoPopup = getById('todo-popup');
let saveTodoBtn = getById('save-todo-btn');
let closePopupBtn = getById('close-popup-btn');
let todoInput = getById('todo-input');
let todoList = getById('todo-list');
```

- **Lines 2-7**: Uses the `getById` function to select and store references to various DOM elements:
  - `addTodoBtn`: The "+ Add Todo" button.
  - `todoPopup`: The popup modal for adding/editing todos.
  - `saveTodoBtn`: The "Save" button in the popup.
  - `closePopupBtn`: The "Cancel" button in the popup.
  - `todoInput`: The input field in the popup.
  - `todoList`: The unordered list where todos are displayed.

```javascript
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let editIndex = null;
```

- **Line 8**: Initializes the `todos` array by attempting to parse any existing todos from `localStorage`. If none are found, it defaults to an empty array.
- **Line 9**: Initializes `editIndex` to `null`, which will later be used to track the index of the todo being edited.

#### Event Listeners

```javascript
// Show popup
addTodoBtn.addEventListener('click', () => {
    todoPopup.style.display = 'flex';
    todoInput.value = '';
    editIndex = null;
});
```

- **Lines 11-15**: Adds a click event listener to the "Add Todo" button:
  - **When clicked**:
    - Displays the popup modal by setting its `display` style to `flex`.
    - Clears any text from the input field to ensure it's empty for new entries.
    - Resets `editIndex` to `null` to indicate that we're adding a new todo, not editing.

```javascript
// Close popup
closePopupBtn.addEventListener('click', () => {
    todoPopup.style.display = 'none';
});
```

- **Lines 17-20**: Adds a click event listener to the "Cancel" button in the popup:
  - **When clicked**:
    - Hides the popup modal by setting its `display` style to `none`.

```javascript
// Save Todo
saveTodoBtn.addEventListener('click', () => {
    let todoText = todoInput.value.trim();
    if (todoText) {
        if (editIndex !== null) {
            // Update existing todo
            todos[editIndex] = todoText;
        } else {
            // Add new todo
            todos.push(todoText);
        }
        // Save updated todos to localStorage
        localStorage.setItem('todos', JSON.stringify(todos));
        // Refresh the displayed list
        renderTodos();
        // Close the popup
        todoPopup.style.display = 'none';
    } else {
        alert('Please enter a task.');
    }
});
```

- **Lines 22-39**: Adds a click event listener to the "Save" button in the popup:
  - **When clicked**:
    - Retrieves the text from the input field and trims any whitespace.
    - Checks if the input is not empty:
      - **If editing** (`editIndex` is not `null`):
        - Updates the existing todo in the `todos` array at the specified `editIndex`.
      - **If adding** (`editIndex` is `null`):
        - Adds the new todo text to the `todos` array.
    - Saves the updated `todos` array to `localStorage` to persist the data.
    - Calls the `renderTodos()` function to update the displayed list.
    - Closes the popup modal.
  - **If input is empty**:
    - Displays an alert prompting the user to enter a task.

#### Functions

```javascript
// Render Todos
function renderTodos() {
    todoList.innerHTML = ''; // Clear the existing list
    todos.forEach((todo, index) => {
        let li = document.createElement('li'); // Create a new list item
        li.innerHTML = `
            <span>${todo}</span>
            <div>
                <button class="edit-btn" onclick="editTodo(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
            </div>
        `;
        todoList.appendChild(li); // Add the list item to the todo list
    });
}
```

- **Lines 41-52**: Defines the `renderTodos()` function responsible for displaying the todos on the page:
  - **Clears** the current list by setting `todoList.innerHTML` to an empty string.
  - **Iterates** over each todo in the `todos` array using `forEach`:
    - **Creates** a new `<li>` element for each todo.
    - **Sets** the inner HTML of the `<li>`:
      - `<span>` displays the todo text.
      - A `<div>` contains "Edit" and "Delete" buttons with `onclick` handlers that pass the current index.
    - **Appends** the `<li>` to the `todoList` in the DOM.

```javascript
// Edit Todo
window.editTodo = function (index) {
    todoInput.value = todos[index]; // Populate the input with the existing todo text
    editIndex = index; // Set the editIndex to the current todo's index
    todoPopup.style.display = 'flex'; // Show the popup for editing
};
```

- **Lines 54-59**: Defines the `editTodo()` function, attached to the global `window` object to be accessible from the inline `onclick` handler:
  - **Parameters**:
    - `index`: The index of the todo to edit.
  - **Functionality**:
    - Sets the `todoInput` value to the current todo text to allow editing.
    - Updates `editIndex` with the provided index to keep track of which todo is being edited.
    - Displays the popup modal for editing.

```javascript
// Delete Todo
window.deleteTodo = function (index) {
    if (confirm('Are you sure you want to delete this todo?')) {
        todos.splice(index, 1); // Remove the todo from the array
        localStorage.setItem('todos', JSON.stringify(todos)); // Update localStorage
        renderTodos(); // Refresh the displayed list
    }
};
```

- **Lines 61-68**: Defines the `deleteTodo()` function, also attached to the `window` object:
  - **Parameters**:
    - `index`: The index of the todo to delete.
  - **Functionality**:
    - Prompts the user for confirmation before deleting.
    - **If confirmed**:
      - Removes the todo from the `todos` array using `splice`.
      - Updates `localStorage` with the new array.
      - Calls `renderTodos()` to update the displayed list.
    - **If not confirmed**:
      - No action is taken.

```javascript
// Initial Load
renderTodos();
```

- **Line 70**: Calls the `renderTodos()` function when the script first loads to display any existing todos from `localStorage`.

#### Additional Notes

- **Data Persistence**:
  - **Local Storage** is used to store the todos array as a JSON string, allowing the data to persist even after the browser is closed or refreshed.
  - **JSON.parse()** and **JSON.stringify()** are used to convert between strings and JavaScript objects.

- **Global Functions**:
  - Functions like `editTodo` and `deleteTodo` are attached to the `window` object to make them accessible from the inline `onclick` attributes in the HTML generated by `renderTodos()`.

- **Event Delegation**:
  - Inline `onclick` handlers are used in the dynamically generated HTML. Alternatively, event delegation could be implemented for better practice.

- **User Experience Enhancements**:
  - **Input Validation**: Ensures that empty todos cannot be added.
  - **Confirmation Prompt**: Adds a confirmation step before deleting a todo to prevent accidental deletions.

- **Possible Improvements**:
  - **Use Event Listeners**: Attach event listeners to buttons instead of inline `onclick` handlers for better separation of concerns.
  - **Modular Code**: Break the code into smaller functions or modules for maintainability.
  - **Error Handling**: Add more robust error handling for edge cases.

---

## 🙏 Credits

- **Author**: [Muhammad Hashim](#)
- **Icons**: Emojis from [Emojipedia](https://emojipedia.org/)
- **Fonts**: 'Poppins' from [Google Fonts](https://fonts.google.com/)
