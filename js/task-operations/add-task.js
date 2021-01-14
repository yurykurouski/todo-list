import checkTask from './check-task.js';
import deleteTask from './delete-task.js';
import editTask from './edit-task.js';


const todoList = document.querySelector('.todo-list ol');
// const backgrTextEmpty = document.getElementById('textEmpty');

let tasks = [];

function generateId(tasks) {  // *получаем массив со всеми идентификаторами таска
  const ids = tasks.map(task => {
    return task.id;
  });

  if (!ids.length) {  // если пустой массив начинаем нумерацию с единицы
    return 1;
  }

  const maxId = Math.max(...ids);  // находим максимальный айди

  return maxId + 1;  //возвращаем норвый, который будет польше максимального на единицу
}

export default function addTask(event) { //* вешаем обрабытия сабмит на форму
  event.preventDefault(); // сброс стандартного поведения отправки формы

  // if (tasks) backgrTextEmpty.innerHTML = '';

  const formData = new FormData(event.target); // * Получаем все поля формы. FormData - стандар2тный класс от джса, структура данных

  const todoText = formData.get('text'); //* получаем текст из инпута

  if (!todoText) {
    return;
  }

  const newTask = {
    id: generateId(tasks),
    text: todoText,
    checked: false
  }

  tasks = [...tasks, newTask]; // *здесь добавляю в массив задач задачу

  const newToDo = document.createElement('li');

  todoList.appendChild(newToDo);

  newToDo.innerHTML = `
    <input type='checkbox' id='chkBox${newTask.id}'>
    <span class='todoText'>${todoText}</span> 
    <button id='editBtn${newTask.id}' class='fas fa-edit' ></button>
    <button id='delBtn${newTask.id}' class='fas fa-trash' ></button>
  `;

  const checkBox = document.getElementById(`chkBox${newTask.id}`);
  const editBtn = document.getElementById(`editBtn${newTask.id}`);
  const deleteButton = document.getElementById(`delBtn${newTask.id}`);

  checkBox.addEventListener('change', checkTask);
  deleteButton.addEventListener('click', deleteTask);
  editBtn.addEventListener('click', editTask);

  event.target.reset(); // очищаем форму
}