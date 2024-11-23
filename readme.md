# 📝 Todo Application

Welcome to the **Todo Application**! This is a simple yet elegant Todo app built with **HTML**, **CSS**, and **JavaScript**. It allows you to add, edit, and delete tasks with custom popup dialogs that enhance user interaction. The app also uses the browser's **Local Storage** for data persistence, ensuring your tasks remain even after you close the browser.

🌟 **[Live Demo](https://hashimthepassionate.github.io/todo-application)**

## 📚 Table of Contents

- [📝 Todo Application](#-todo-application)
  - [📚 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🚀 How to Use](#-how-to-use)
  - [🛠️ Installation](#️-installation)
  - [🧐 Detailed Explanation](#-detailed-explanation)
    - [`index.html`](#indexhtml)
      - [Explanation:](#explanation)
    - [`style.css`](#stylecss)
      - [Explanation:](#explanation-1)
    - [**1. Reset Styles**](#1-reset-styles)
    - [**2. Body Styling**](#2-body-styling)
    - [**3. Header Styling**](#3-header-styling)
    - [**4. Container Styling**](#4-container-styling)
    - [**5. Heading Styling**](#5-heading-styling)
    - [**6. "Add Todo" Button Styling**](#6-add-todo-button-styling)
    - [**7. "Add Todo" Button Icon Styling**](#7-add-todo-button-icon-styling)
    - [**8. "Add Todo" Button Hover Effect**](#8-add-todo-button-hover-effect)
    - [**9. Main Section Styling**](#9-main-section-styling)
    - [**10. Todo List Styling**](#10-todo-list-styling)
    - [**11. Todo Item Styling**](#11-todo-item-styling)
    - [**12. Todo Item Hover Effect**](#12-todo-item-hover-effect)
    - [**13. Todo Text Styling**](#13-todo-text-styling)
    - [**14. Todo Item Buttons Styling**](#14-todo-item-buttons-styling)
    - [**15. "Edit" and "Delete" Button Colors**](#15-edit-and-delete-button-colors)
    - [**16. Button Hover Effects**](#16-button-hover-effects)
    - [**17. Popup Overlay Styling**](#17-popup-overlay-styling)
    - [**18. Popup Content Styling**](#18-popup-content-styling)
    - [**19. Fade-in Animation**](#19-fade-in-animation)
    - [**20. Popup Title Styling**](#20-popup-title-styling)
    - [**21. Input Field Styling**](#21-input-field-styling)
    - [**22. Placeholder and Focus Styling**](#22-placeholder-and-focus-styling)
    - [**23. Alert Popup Styles**](#23-alert-popup-styles)
    - [**24. General Button Styles**](#24-general-button-styles)
    - [**25. Popup Buttons Styling**](#25-popup-buttons-styling)
    - [**26. Delete Confirmation Popup Styles**](#26-delete-confirmation-popup-styles)
    - [**27. Responsive Styles**](#27-responsive-styles)
    - [`script.js`](#scriptjs)
      - [Explanation:](#explanation-2)
  - [📷 Screenshots](#-screenshots)
    - [Main Interface](#main-interface)
    - [Add Todo Popup](#add-todo-popup)
    - [Edit Todo Popup](#edit-todo-popup)
    - [Delete Confirmation Popup](#delete-confirmation-popup)
    - [Alert Popup](#alert-popup)
  - [🙏 Credits](#-credits)
  - [📄 License](#-license)

## ✨ Features

- **Add New Todos** 📝
- **Edit Existing Todos** ✏️
- **Delete Todos with Confirmation** ❌
- **Custom Themed Popup Dialogs** 🎨
- **Persistent Data Storage with Local Storage** 💾
- **Responsive and Modern Design** 📱
- **Smooth Animations and Transitions** ✨

## 🚀 How to Use

1. **Clone or Download** the repository to your local machine:

   ```bash
   git clone https://github.com/HashimThePassionate/todo-application.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-application
   ```

3. Open the `index.html` file in your web browser:

   ```bash
   open index.html
   ```

   Or simply double-click on the `index.html` file.

4. Start adding your tasks by clicking on the **Add Todo** button! 🎉

## 🛠️ Installation

No additional installations are required. The app is built using plain HTML, CSS, and JavaScript, and runs entirely in the browser.

## 🧐 Detailed Explanation

Let's dive into each file to understand how the app works.

### `index.html`

This file contains the structure of the web page, including the layout and the elements that the user interacts with.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Meta Tags -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Title -->
    <title>Todo Application</title>

    <!-- Google Fonts Preconnect -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <!-- Poppins Font -->
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap"
        rel="stylesheet"
    />

    <!-- Material Icons -->
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
    />

    <!-- Custom CSS -->
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <div class="container">
        <!-- Header Section -->
        <header>
            <h1>Todo Application</h1>
            <button id="add-todo-btn">
                <span class="material-symbols-outlined">add_circle</span> Add Todo
            </button>
        </header>

        <!-- Main Content -->
        <main>
            <ul id="todo-list"></ul>
        </main>

        <!-- Add/Edit Todo Popup -->
        <div class="popup" id="todo-popup">
            <div class="popup-content">
                <h2 id="popup-title">Add Todo</h2>
                <input
                    type="text"
                    id="todo-input"
                    placeholder="Please Enter Task ..."
                />
                <button id="save-todo-btn">Save</button>
                <button id="close-popup-btn">Cancel</button>
            </div>
        </div>

        <!-- Alert Popup -->
        <div class="popup" id="alert-popup">
            <div class="popup-content">
                <h2>Alert</h2>
                <p>Please enter a todo</p>
                <button id="close-alert-btn">OK</button>
            </div>
        </div>

        <!-- Delete Confirmation Popup -->
        <div class="popup" id="delete-popup">
            <div class="popup-content">
                <h2>Are you sure you want to delete this todo?</h2>
                <button id="confirm-delete-btn">Yes</button>
                <button id="cancel-delete-btn">No</button>
            </div>
        </div>
    </div>

    <!-- External JavaScript -->
    <script src="script.js"></script>
</body>

</html>
```

#### Explanation:

- **Header Section**: Contains the app title and the **Add Todo** button with an icon.
- **Main Content**: An unordered list (`<ul>`) with the `id="todo-list"` where the todos will be displayed dynamically.
- **Add/Edit Todo Popup**: A modal popup that appears when adding a new todo or editing an existing one.
- **Alert Popup**: Custom alert modal that appears when the user tries to save an empty todo.
- **Delete Confirmation Popup**: A confirmation modal that appears before deleting a todo.

### `style.css`

This file styles the app, making it visually appealing and responsive.

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    font-family: 'Poppins';
    background-color: #d9e6fc;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
  header {
      display: flex;
      flex-direction: column;
      align-items: center; /* Center the button and heading horizontally */
      justify-content: center;
  }
  
  .container{
      width: 600px;
      background-color: #fff;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      text-align: center;
  }
  h1{
      font-size: 36px;
      color:#0b57d0;
      margin-bottom: 10px;
  }
  #add-todo-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px; /* Adjust space between icon and text */
      padding: 8px 16px;
      border: none;
      background-color: #0b57d0; /* Your theme color */
      color: white;
      border-radius: 25px;
      cursor: pointer;
      font-size: 1rem; /* Adjust font size if needed */
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }
  
  #add-todo-btn .material-symbols-outlined {
      font-size: 1.2em; /* Adjust icon size if needed */
      display: flex;
      align-items: center;
  }
  #add-todo-btn:hover {
      background-color: #084a9c; /* Slightly darker shade on hover */
  }
  
  
  main {
      margin-top: 30px;
  }
  
  #todo-list {
      list-style: none;
      padding: 0;
      margin: 0;
  }
  
  #todo-list li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border: 2px solid #084a9c;
      margin-bottom: 15px;
      border-radius: 15px;
      transition: transform 0.3s;
  }
  #todo-list li:hover {
      transform: translateY(-5px);
  }
  
  #todo-list li span {
      font-size: 20px;
      color: #084a9c;
      flex: 1;
      text-align: left;
  }
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
  .edit-btn {
      background-color: #f1c40f;
  }
  .delete-btn {
      background-color: #e74c3c;
  }
  .edit-btn:hover {
      background-color: #f39c12;
  }
  .delete-btn:hover {
      background-color: #c0392b;
  }
  
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
  .popup-content {
      background: #fff;
      padding: 30px;
      border-radius: 20px;
      width: 90%;
      max-width: 400px;
      position: relative;
      animation: fadeIn 0.3s ease;
  }
  @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
  }
  
  #popup-title {
      font-size: 24px;
      color: #084298;
      margin-bottom: 20px;
  }
  #todo-input {
      width: 100%;
      padding: 12px;
      border: 1px solid #084298;
      border-radius: 5px;
      margin-bottom: 15px;
      font-size: 16px;
      color: #084298;;
  }
  #todo-input::placeholder {
      color: #084298;
  }
  #todo-input:focus {
      outline: 2px solid #084298; /* Adds a solid outline on focus */
      border: 1px solid #084298; /* Ensures the border color remains consistent */
  }


/* Alert Popup Styles */
#alert-popup .popup-content h2 {
    font-size: 24px;
    color: #084298;
    margin-bottom: 10px;
}

#alert-popup .popup-content p {
    font-size: 16px;
    color: #333;
    margin-bottom: 20px;
}

#close-alert-btn {
    background-color: #0b57d0;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.3s;
}

#close-alert-btn:hover {
    background-color: #084a9c;
}


button {
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    font-size: 14px;
    transition: background 0.3s;
}
button:hover {
    opacity: 0.9;
}

#save-todo-btn {
    background-color: #0b57d0;
    color: #fff;
    margin-right: 10px;
}
#close-popup-btn {
    background-color: #f83434;
    color: #fff;
}
.popup-content button {
    width: 25%;
}

/* Delete Confirmation Popup Styles */
#delete-popup .popup-content h2 {
    font-size: 24px;
    color: #084298;
    margin-bottom: 20px;
}

#delete-popup .popup-content button {
    width: 45%;
    margin: 5px;
}

#confirm-delete-btn {
    background-color: #e74c3c;
    color: #fff;
}

#cancel-delete-btn {
    background-color: #95a5a6;
    color: #fff;
}

/* Responsive Styles */
@media (max-width: 600px) {
    h1 {
        font-size: 28px;
    }

    #add-todo-btn {
        font-size: 0.9rem;
        padding: 8px 12px;
    }

    #todo-list li {
        flex-direction: column;
        align-items: center;
    }

    #todo-list li button {
        flex: 1 1 100%;
        margin-left: 0;
    }

    #todo-list li .todo-text,
    #todo-list li span {
        flex: 1 1 100%;
        margin-bottom: 10px;
        font-weight: 500;
        text-transform: uppercase;
    }
     .edit-btn {
      margin-bottom: 10px;
  }
    .popup-content {
        padding: 20px;
    }

    button {
        width: 100%;
    }

    .popup-content button {
        width: 100%;
        margin: 5px 0;
    }
}
```

#### Explanation:

Let's provide a detailed explanation of your CSS code, section by section.

---

### **1. Reset Styles**

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

- **Purpose**: Ensures consistent styling across different browsers by resetting default styles.
- **Explanation**:
  - `*` targets all elements.
  - `margin: 0;` and `padding: 0;` remove default spacing.
  - `box-sizing: border-box;` includes padding and border in the element's total width and height.

---

### **2. Body Styling**

```css
body {
    font-family: 'Poppins';
    background-color: #d9e6fc;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
```

- **Purpose**: Sets global font, background, and centers the main container.
- **Explanation**:
  - `font-family: 'Poppins';` applies the 'Poppins' font.
  - `background-color: #d9e6fc;` sets a calming light blue background.
  - `display: flex;`, `justify-content: center;`, `align-items: center;` center content horizontally and vertically.
  - `height: 100vh;` makes the body height equal to the viewport height.

---

### **3. Header Styling**

```css
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
```

- **Purpose**: Centers the header elements.
- **Explanation**:
  - `flex-direction: column;` stacks elements vertically.
  - `align-items: center;` centers elements horizontally.
  - `justify-content: center;` centers elements vertically within the header.

---

### **4. Container Styling**

```css
.container {
    width: 600px;
    background-color: #fff;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
}
```

- **Purpose**: Styles the main content area.
- **Explanation**:
  - `width: 600px;` sets the container's width.
  - `background-color: #fff;` gives a white background.
  - `padding: 20px;` adds internal spacing.
  - `border-radius: 15px;` rounds the corners.
  - `box-shadow: ...;` adds a subtle shadow effect.
  - `text-align: center;` centers text inside the container.

---

### **5. Heading Styling**

```css
h1 {
    font-size: 36px;
    color: #0b57d0;
    margin-bottom: 10px;
}
```

- **Purpose**: Styles the main heading.
- **Explanation**:
  - `font-size: 36px;` makes the heading prominent.
  - `color: #0b57d0;` applies a blue color.
  - `margin-bottom: 10px;` adds spacing below the heading.

---

### **6. "Add Todo" Button Styling**

```css
#add-todo-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 8px 16px;
    border: none;
    background-color: #0b57d0;
    color: white;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}
```

- **Purpose**: Styles the "Add Todo" button.
- **Explanation**:
  - `display: flex;` allows alignment of icon and text.
  - `gap: 5px;` adds space between icon and text.
  - `padding: 8px 16px;` sizes the button.
  - `background-color: #0b57d0;` sets the button's color.
  - `border-radius: 25px;` makes rounded edges.
  - `cursor: pointer;` changes the cursor on hover.
  - `box-shadow: ...;` adds depth.

---

### **7. "Add Todo" Button Icon Styling**

```css
#add-todo-btn .material-symbols-outlined {
    font-size: 1.2em;
    display: flex;
    align-items: center;
}
```

- **Purpose**: Adjusts the icon within the button.
- **Explanation**:
  - `font-size: 1.2em;` scales the icon.
  - `display: flex; align-items: center;` centers the icon vertically.

---

### **8. "Add Todo" Button Hover Effect**

```css
#add-todo-btn:hover {
    background-color: #084a9c;
}
```

- **Purpose**: Provides visual feedback on hover.
- **Explanation**:
  - Changes the background color to a darker blue.

---

### **9. Main Section Styling**

```css
main {
    margin-top: 30px;
}
```

- **Purpose**: Adds spacing above the main content.
- **Explanation**:
  - `margin-top: 30px;` creates space between the header and content.

---

### **10. Todo List Styling**

```css
#todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
}
```

- **Purpose**: Removes default list styles.
- **Explanation**:
  - Eliminates bullets and default spacing.

---

### **11. Todo Item Styling**

```css
#todo-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border: 2px solid #084a9c;
    margin-bottom: 15px;
    border-radius: 15px;
    transition: transform 0.3s;
}
```

- **Purpose**: Styles individual todo items.
- **Explanation**:
  - `display: flex;` arranges content in a row.
  - `justify-content: space-between;` spaces out elements.
  - `border: 2px solid #084a9c;` adds a border.
  - `transition: transform 0.3s;` enables hover animation.

---

### **12. Todo Item Hover Effect**

```css
#todo-list li:hover {
    transform: translateY(-5px);
}
```

- **Purpose**: Adds a hover effect.
- **Explanation**:
  - Moves the item upward slightly on hover.

---

### **13. Todo Text Styling**

```css
#todo-list li span {
    font-size: 20px;
    color: #084a9c;
    flex: 1;
    text-align: left;
}
```

- **Purpose**: Styles the text of todo items.
- **Explanation**:
  - `flex: 1;` allows the text to occupy available space.
  - `text-align: left;` aligns text to the left.

---

### **14. Todo Item Buttons Styling**

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

- **Purpose**: Styles the "Edit" and "Delete" buttons.
- **Explanation**:
  - `padding: 10px 15px;` sizes the buttons.
  - `border-radius: 20px;` rounds the buttons.
  - `transition: background 0.3s;` smooths color changes.
  - `margin-left: 10px;` spaces buttons from the text.

---

### **15. "Edit" and "Delete" Button Colors**

```css
.edit-btn {
    background-color: #f1c40f;
}

.delete-btn {
    background-color: #e74c3c;
}
```

- **Purpose**: Differentiates buttons by color.
- **Explanation**:
  - `.edit-btn` is yellow.
  - `.delete-btn` is red.

---

### **16. Button Hover Effects**

```css
.edit-btn:hover {
    background-color: #f39c12;
}

.delete-btn:hover {
    background-color: #c0392b;
}
```

- **Purpose**: Changes button colors on hover.
- **Explanation**:
  - Darkens the button color when hovered.

---

### **17. Popup Overlay Styling**

```css
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

- **Purpose**: Creates a modal backdrop.
- **Explanation**:
  - Covers the entire screen with a semi-transparent overlay.
  - `display: none;` hides the popup by default.

---

### **18. Popup Content Styling**

```css
.popup-content {
    background: #fff;
    padding: 30px;
    border-radius: 20px;
    width: 90%;
    max-width: 400px;
    position: relative;
    animation: fadeIn 0.3s ease;
}
```

- **Purpose**: Styles the popup box.
- **Explanation**:
  - Centers the content.
  - Adds padding and rounded corners.
  - Includes a fade-in animation.

---

### **19. Fade-in Animation**

```css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}
```

- **Purpose**: Animates the popup appearance.
- **Explanation**:
  - Starts transparent and moves upwards slightly.

---

### **20. Popup Title Styling**

```css
#popup-title {
    font-size: 24px;
    color: #084298;
    margin-bottom: 20px;
}
```

- **Purpose**: Styles the popup title.
- **Explanation**:
  - Makes the title prominent with spacing below.

---

### **21. Input Field Styling**

```css
#todo-input {
    width: 100%;
    padding: 12px;
    border: 1px solid #084298;
    border-radius: 5px;
    margin-bottom: 15px;
    font-size: 16px;
    color: #084298;;
}
```

- **Purpose**: Styles the input field.
- **Explanation**:
  - Full-width input with padding and blue border.
  - Rounded corners and spacing below.

---

### **22. Placeholder and Focus Styling**

```css
#todo-input::placeholder {
    color: #084298;
}

#todo-input:focus {
    outline: 2px solid #084298;
    border: 1px solid #084298;
}
```

- **Purpose**: Styles placeholder text and focus state.
- **Explanation**:
  - Placeholder matches theme color.
  - Adds outline on focus.

---

### **23. Alert Popup Styles**

```css
#alert-popup .popup-content h2 {
    font-size: 24px;
    color: #084298;
    margin-bottom: 10px;
}

#alert-popup .popup-content p {
    font-size: 16px;
    color: #333;
    margin-bottom: 20px;
}

#close-alert-btn {
    background-color: #0b57d0;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.3s;
}

#close-alert-btn:hover {
    background-color: #084a9c;
}
```

- **Purpose**: Styles the custom alert popup.
- **Explanation**:
  - Consistent styling with other popups.
  - Button changes color on hover.

---

### **24. General Button Styles**

```css
button {
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    font-size: 14px;
    transition: background 0.3s;
}
button:hover {
    opacity: 0.9;
}
```

- **Purpose**: Provides consistent styling for all buttons.
- **Explanation**:
  - Adds padding, rounded corners, and hover effect.

---

### **25. Popup Buttons Styling**

```css
#save-todo-btn {
    background-color: #0b57d0;
    color: #fff;
    margin-right: 10px;
}
#close-popup-btn {
    background-color: #f83434;
    color: #fff;
}
.popup-content button {
    width: 25%;
}
```

- **Purpose**: Styles the "Save" and "Cancel" buttons.
- **Explanation**:
  - Sets colors matching the theme.
  - Adjusts button widths for alignment.

---

### **26. Delete Confirmation Popup Styles**

```css
#delete-popup .popup-content h2 {
    font-size: 24px;
    color: #084298;
    margin-bottom: 20px;
}

#delete-popup .popup-content button {
    width: 45%;
    margin: 5px;
}

#confirm-delete-btn {
    background-color: #e74c3c;
    color: #fff;
}

#cancel-delete-btn {
    background-color: #95a5a6;
    color: #fff;
}
```

- **Purpose**: Styles the delete confirmation popup.
- **Explanation**:
  - Uses red for the confirm button to indicate caution.

---

### **27. Responsive Styles**

```css
@media (max-width: 600px) {
    h1 {
        font-size: 28px;
    }

    #add-todo-btn {
        font-size: 0.9rem;
        padding: 8px 12px;
    }

    #todo-list li {
        flex-direction: column;
        align-items: center;
    }

    #todo-list li button {
        flex: 1 1 100%;
        margin-left: 0;
    }

    #todo-list li .todo-text,
    #todo-list li span {
        flex: 1 1 100%;
        margin-bottom: 10px;
        font-weight: 500;
        text-transform: uppercase;
    }
     .edit-btn {
      margin-bottom: 10px;
  }
    .popup-content {
        padding: 20px;
    }

    button {
        width: 100%;
    }

    .popup-content button {
        width: 100%;
        margin: 5px 0;
    }
}
```

- **Purpose**: Makes the app responsive for mobile devices.
- **Explanation**:
  - **Heading**: Reduces font size on smaller screens.
  - **Add Todo Button**: Adjusts size and padding.
  - **Todo Items**:
    - Changes layout to vertical stacking.
    - Centers content for better mobile display.
  - **Buttons**:
    - Buttons become full-width for easier tapping.
    - Adjust margins for vertical spacing.
  - **Text Styling**:
    - Todo text becomes uppercase and slightly bolder.
  - **Popup Adjustments**:
    - Reduces padding to fit smaller screens.
    - Buttons inside popups become full-width.

---

### `script.js`

This file contains the JavaScript code that makes the app interactive.

```javascript
// Helper function to get elements by ID
let id = (id) => document.getElementById(id);

// DOM Elements
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

// Show Add Todo Popup
addtodobtn.addEventListener('click', () => {
    todopopup.style.display = 'flex';
    todoinput.value = '';
    editindex = null;
});

// Close Add/Edit Popup
closepopupbtn.addEventListener('click', () => {
    todopopup.style.display = 'none';
});

// Save Todo
savetodo.addEventListener('click', () => {
    let todotext = todoinput.value.trim();
    if (todotext) {
        if (editindex !== null) {
            // Update existing todo
            todos[editindex] = todotext;
        } else {
            // Add new todo
            todos.push(todotext);
        }
        // Save updated todos to localStorage
        localStorage.setItem('todos', JSON.stringify(todos));
        // Refresh the displayed list
        renderTodos();
        // Close the popup
        todopopup.style.display = 'none';
    } else {
        // Show the custom alert popup
        alertPopup.style.display = 'flex';
    }
});

// Close Alert Popup
closeAlertBtn.addEventListener('click', () => {
    alertPopup.style.display = 'none';
});

// Render Todos
function renderTodos() {
    todolist.innerHTML = '';
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

// Edit Todo
window.editTodo = function (i) {
    todoinput.value = todos[i];
    editindex = i;
    todopopup.style.display = 'flex';
};

// Delete Todo
window.deleteTodo = function (index) {
    deleteIndex = index;
    deletePopup.style.display = 'flex';
};

// Confirm Delete
confirmDeleteBtn.addEventListener('click', () => {
    if (deleteIndex !== null) {
        todos.splice(deleteIndex, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
        deletePopup.style.display = 'none';
        deleteIndex = null;
    }
});

// Cancel Delete
cancelDeleteBtn.addEventListener('click', () => {
    deletePopup.style.display = 'none';
    deleteIndex = null;
});

// Initial Load
renderTodos();
```

#### Explanation:

- **Helper Function**:
  - `id(id)`: Simplifies getting DOM elements by ID.
- **DOM Elements**:
  - **Add Todo Elements**: Buttons and input fields for adding or editing todos.
  - **Todo List**: The container where todos are displayed.
  - **Delete Confirmation Elements**: Elements related to the delete confirmation popup.
  - **Alert Popup Elements**: Elements related to the alert popup.
- **Data Variables**:
  - `todos`: An array to store todo items, initialized from `localStorage` or as an empty array.
  - `editindex`: Keeps track of the index of the todo being edited.
- **Event Listeners**:
  - **Add Todo Button Click**: Displays the add/edit popup and resets input and edit index.
  - **Close Add/Edit Popup**: Hides the add/edit popup.
  - **Save Todo Button Click**: Saves a new or edited todo, validates input, and shows an alert popup if empty.
  - **Close Alert Popup**: Hides the alert popup.
  - **Confirm Delete**: Deletes the selected todo after confirmation.
  - **Cancel Delete**: Cancels the delete operation and hides the delete popup.
- **Functions**:
  - **renderTodos()**: Renders the list of todos on the page.
  - **editTodo()**: Populates the input field with the selected todo text and displays the popup for editing.
  - **deleteTodo()**: Stores the index of the todo to be deleted and displays the delete confirmation popup.
- **Data Persistence**:
  - Uses `localStorage` to save and retrieve the `todos` array, ensuring data persistence across sessions.

## 📷 Screenshots

### Main Interface

![Main Interface](images/main-interface.png)

### Add Todo Popup

![Add Todo Popup](images/add-todo-popup.png)

### Edit Todo Popup

![Edit Todo Popup](images/edit-todo-popup.png)

### Delete Confirmation Popup

![Delete Confirmation Popup](images/delete-confirmation-popup.png)

### Alert Popup

![Alert Popup](images/alert-popup.png)

## 🙏 Credits

- **Author**: [Muhammad Hashim](https://github.com/hashimthepassionate)
- **Fonts**:
  - 'Poppins' from [Google Fonts](https://fonts.google.com/)
  - 'Material Symbols Outlined' from [Google Fonts](https://fonts.google.com/icons)
- **Icons**:
  - Material Symbols provided by Google.
- **Inspiration**:
  - The desire to create a simple yet functional Todo app with a clean user interface.
- **Special Thanks**:
  - To all open-source contributors who inspire us to build and share.

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.