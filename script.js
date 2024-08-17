
let inputField = document.getElementById('inputField');
let addButton = document.getElementById('addToDo');
let todoList = document.getElementById('toDoContainer');

addButton.addEventListener('click', ()=> {
    if(inputField.value === "") {
        alert('Please enter a task');   
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputField.value;
        li.style.cursor = 'pointer';
        li.addEventListener('click', ()=> {
            li.style.textDecoration = 'line-through';
        })
        li.addEventListener('dblclick', ()=> {
            li.remove(li);
        })
        todoList.appendChild(li);
        inputField.value = "";
    }
})