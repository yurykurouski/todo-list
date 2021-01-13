import checkTask from './check-task.js';
import deleteTask from './delete-task.js';
import editTask from './edit-task.js';


const todoList = document.querySelector('.todo-list ol');
// const backgrTextEmpty = document.getElementById('textEmpty');

let tasks = [];

export default function addTask(event) { //* вешаем обрабытия сабмит на форму
  event.preventDefault(); // сброс стандартного поведения отправки формы

  // if (tasks) backgrTextEmpty.innerHTML = '';

  const formData = new FormData(event.target); // * Получаем все поля формы. FormData - стандар2тный класс от джса, структура данных

  const todoText = formData.get('text'); //* получаем текст из инпута

  if (!todoText) {
    return;
  }

  const newTask = {
    text: todoText,
    checked: false
  }

  tasks = [...tasks, newTask]; // *здесь добавляю в массив задач задачу

  const newToDo = document.createElement('li');

  todoList.appendChild(newToDo);

  newToDo.innerHTML = `
    <input type='checkbox' id='chkBox${tasks.length - 1}'>
    <span class='todoText'>${todoText}</span> 
    <button id='editBtn${tasks.length - 1}' class='smallTaskIcon' title='Edit this task'><i class="fas fa-edit"></i> </button>
    <button id='delBtn${tasks.length - 1}' class='smallTaskIcon smallDelBtn' title='Delete this task'><i class="fas fa-trash"></i> </button>
  `;

  const checkBox = document.getElementById(`chkBox${tasks.length - 1}`);
  const editBtn = document.getElementById(`editBtn${tasks.length - 1}`);
  const deleteButton = document.getElementById(`delBtn${tasks.length - 1}`);

  checkBox.addEventListener('change', checkTask);
  deleteButton.addEventListener('click', deleteTask);
  editBtn.addEventListener('click', editTask);

  event.target.reset(); // очищаем форму
}