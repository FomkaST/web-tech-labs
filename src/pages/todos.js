import Auth from "../services/auth.js";
import location from "../services/location.js";
import loading from "../services/loading.js";
import Todo from "../services/todo.js";

const init = async () => {
    loading.start()
    const { ok: isLogged } = await Auth.me()

    if (!isLogged) {
        return location.login()
    }

    const response = await Todo.getAll()
    const todos = response.data || response

    renderTodos(todos)
    loading.stop()
}

function renderTodos(todos) {
    const todoList = document.getElementById('todo-list')
    todoList.innerHTML = ''

    if (!todos.length) {
        todoList.innerHTML = '<h3>Нет задач</h3>'
        return
    }

    todos.forEach(todo => {
        const card = createTodoCard(todo)
        todoList.appendChild(card)
    })
}

function createTodoCard(todo) {
    const card = document.createElement('div')
    card.classList.add('todo-card')

    const title = document.createElement('h3')
    title.classList.add('todo-title')
    title.innerText = `ID: ${todo.id} - ${todo.description}`

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('todo-checkbox')
    checkbox.checked = todo.completed

    checkbox.onclick = async () => {
        const newStatus = !todo.completed;
        const response = await updateTodo(todo.id, newStatus);

        if (response.ok) {
            todo.completed = newStatus;
            init();
        } else {
            checkbox.checked = todo.completed;
        }
    };

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-btn')
    deleteButton.innerText = 'Удалить'
    
    deleteButton.onclick = () => deleteTodo(todo.id)

    card.appendChild(checkbox);
    card.appendChild(title);
    card.appendChild(deleteButton);

    return card
}

async function deleteTodo(id) {
    await Todo.delete(id)
    init()
}

async function updateTodo(id, completed) {
    return await Todo.update(id, completed)
}

async function addTodo(event) {
    event.preventDefault();

    const input = document.getElementById('new-todo-description');
    const description = input.value.trim();

    if (!description) {
        alert('Описание задачи не может быть пустым.');
        return;
    }

    loading.start();

    await Todo.create(description);
    input.value = '';

    init();

    loading.stop();
}

function createAddTodoForm() {
    const form = document.createElement('form')
    form.classList.add('todo-form')

    const input = document.createElement('input')
    input.id = 'new-todo-description'
    input.type = 'text'
    input.placeholder = 'Описание задачи'
    input.classList.add('todo-input')

    const button = document.createElement('button')
    button.type = 'submit'
    button.classList.add('todo-submit-btn')
    button.innerText = 'Добавить'

    form.appendChild(input)
    form.appendChild(button)

    form.addEventListener('submit', addTodo)

    return form
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init)
} else {
    init()
}

const form = createAddTodoForm()
document.getElementById('todos-container').appendChild(form)
