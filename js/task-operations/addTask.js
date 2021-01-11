import checkTask from './checkTask.js';
import deleteTask from './deleteTask.js';

const todoList = document.querySelector('.todo-list ol');
const backgrTextEmpty = document.getElementById('textEmpty');

let tasks = [];

export default function addTask(event) { //* вешаем обрабытия сабмит на форму
  event.preventDefault(); // сброс стандартного поведения отправки формы

  if (tasks) backgrTextEmpty.innerHTML = '';

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
  newToDo.innerHTML = `<input type='checkbox' id=chkBox${tasks.length - 1}> <span>${todoText}</span> <button id='delBtn${tasks.length - 1}'><i class="fas fa-trash-alt" class='delete-btn'></i> </button>`;

  const checkBox = document.getElementById(`chkBox${tasks.length - 1}`);

  checkBox.addEventListener('change', checkTask);

  const deleteButton = document.getElementById(`delBtn${tasks.length - 1}`);

  deleteButton.addEventListener('click', deleteTask);

  event.target.reset(); // очищаем форму
}