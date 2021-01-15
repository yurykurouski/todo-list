import checkTask from './check-task.js';
import deleteTask from './delete-task.js';
import editTask from './edit-task.js';

import taskList from '../tasks.js';

const todoList = document.querySelector('.todo-list ol');

function generateId(tasks) { // *получаем массив со всеми идентификаторами таска
  const ids = tasks.map(task => {
    return task.id;
  });

  if (!ids.length) { // если пустой массив начинаем нумерацию с единицы
    return 1;
  }

  const maxId = Math.max(...ids); // находим максимальный айди

  return maxId + 1; //возвращаем норвый, который будет польше максимального на единицу
}

export function createTask(task) {
  const newToDo = document.createElement('li');

  newToDo.setAttribute('id', `${task.id}`);

  todoList.appendChild(newToDo);

  newToDo.innerHTML = `
  <input type='checkbox' id='chkBox${task.id}'>
  <span class='todoText'>${task.text}</span> 
  <button id='editBtn${task.id}' class='fas fa-edit' ></button>
  <button id='delBtn${task.id}' class='fas fa-trash' ></button>
`;

  const checkBox = document.getElementById(`chkBox${task.id}`);
  const editBtn = document.getElementById(`editBtn${task.id}`);
  const deleteButton = document.getElementById(`delBtn${task.id}`);

  checkBox.addEventListener('change', checkTask);
  deleteButton.addEventListener('click', deleteTask);
  editBtn.addEventListener('click', editTask);
}

export default function addTask(event) { //* вешаем обрабытия сабмит на форму
  event.preventDefault(); // сброс стандартного поведения отправки формы

  const formData = new FormData(event.target); // * Получаем все поля формы. FormData - стандар2тный класс от джса, структура данных

  const todoText = formData.get('text'); //* получаем текст из инпута

  if (!todoText) {
    return;
  }

  const newTask = {
    id: generateId(taskList.tasks),
    text: todoText,
    checked: false
  };

  taskList.add(newTask);

  createTask(newTask);

  event.target.reset(); // очищаем форму

  localStorage.setItem('tasks', JSON.stringify(taskList.tasks));
}