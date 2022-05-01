let list = document.getElementById('todo-list');
let addButton = document.getElementById('todo-add');
let addInput = document.getElementById('todo-input');
let deleteBtn = document.querySelector('.delete');

const create = function() {
    let text = addInput.value
    if (text === "") {
        return;
    }

    let li = document.createElement('li')
    let checkbox = document.createElement('input')
    checkbox.classList.add('checkbox')
    checkbox.type = 'checkbox'

    let task = document.createElement('p')
    task.classList.add('task')
    task.textContent = text;

    let remove = document.createElement('span')
    remove.classList.add('remove')
    remove.innerHTML = '&cross;'

    li.appendChild(checkbox)
    li.appendChild(task)
    li.appendChild(remove)
    list.appendChild(li)

    addInput.value = ""
}

const showEditInput = function(taskElement) {
    let editInput = document.querySelector(".editInput")

    if (editInput) {
        editInput.remove()
    }

    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'editTodo';
    input.value = taskElement.textContent;
    input.classList.add('editInput')

    taskElement.parentElement.appendChild(input)
    input.focus()
}

const removeTodo = function(remove){
    remove.parentElement.remove();
}

const toggleComplete = function(inputElement) {
    if (inputElement.checked === false) {
        inputElement.parentElement.classList.remove('complete')
    } else {
        inputElement.parentElement.classList.add('complete')
    }
}

const updateTodo = function(){

    let editInput = document.querySelector(".editInput");

    if (!editInput) {
        return;
    }
    let newText = editInput.value;

    if (newText !== ''){
        let txt = editInput.parentElement.querySelector('.task')
        txt.textContent = newText;
    }
    editInput.remove()
}

list.addEventListener('click', function(event){
    event.stopPropagation()
    switch (event.target.tagName) {
        case 'P':
            showEditInput(event.target);
            break;
        case 'SPAN':
            removeTodo(event.target);
            break;
    }
})

document.addEventListener('click', updateTodo)

list.addEventListener('change', function(event) {
    if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
        toggleComplete(event.target);
    }
})

list.addEventListener('keypress', function(event){
    if (event.target.tagName === 'INPUT' && event.target.type === 'text' && event.key === 'Enter') {
        updateTodo();
    }
})

addButton.addEventListener('click', function(event){
    event.stopPropagation();
    create();
})

addInput.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        create()
    }
})

deleteBtn.addEventListener('click', function(event){
    let ul = document.getElementById('todo-list')
    ul.innerHTML = '';
})