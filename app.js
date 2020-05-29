const input = document.querySelector(".todo_input");
const todoItems = document.querySelector(".todo_list");
const addTodo = document.querySelector(".add");


//add todo item
const add = () => {
    if (input.value) {
        todoItems.innerHTML += `<li 
    class="todo_item" 
    id=${Date.now()}>
    
        <label class="checkbox_container">
            <input class="done" type="checkbox">
            <span class="checkmark"></span>
            <span class="todo_value">${input.value}</span>
        </label>
               
        <span class="delete material-icons">delete</span>
    </li>`;

        input.value = "";
    }
}

addTodo.onclick = add;

input.onkeydown = (e) => {
    e.key === "Enter" && add()
};


//delete todo item
todoItems.onclick = (e) => {
    e.target.classList.contains("delete") && e.target.parentElement.remove()
};
