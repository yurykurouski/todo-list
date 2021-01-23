import checkTask from './check-task.js';
import deleteTask from './delete-task.js';
import editTask from './edit-task.js';
import storageService from '../storage-service.js'
import {
  generateId,
  getListIdByUrl
} from '../utils.js'
import taskList from '../tasks.js';

export function createTask(task) {
  const todoList = document.querySelector('.todo-list ol');
  const newToDo = document.createElement('li');
  // * что бы новый таск вставлялся в начало списка
  const tasks = JSON.parse(storageService.get('tasks'))
  if (tasks) {
    const firstLi = todoList.querySelector('li');

    todoList.insertBefore(newToDo, firstLi);
  } else todoList.appendChild(newToDo);
    
  newToDo.innerHTML = `
  <input type='checkbox' id='chkBox${task.id}'>
  <span class='todoText'>${task.text}</span> 
  <button id='editBtn${task.id}' class='material-icons editbtn' >create</button>
  <button id='delBtn${task.id}' class='material-icons delbtn' >delete</button>
`;

  const checkBox = document.getElementById(`chkBox${task.id}`);
  const editBtn = document.getElementById(`editBtn${task.id}`);
  const deleteButton = document.getElementById(`delBtn${task.id}`);

  newToDo.setAttribute('id', `${task.id}`);
  if (task.checked) {
    newToDo.setAttribute('class', 'checked');
    checkBox.checked = 'checked';
  }

  checkBox.addEventListener('change', checkTask);
  deleteButton.addEventListener('click', deleteTask);
  editBtn.addEventListener('click', editTask);
}

export default function addTask(event) { //* вешаем обрабытия сабмит на форму
  event.preventDefault(); // сброс стандартного поведения отправки формы

  const formData = new FormData(event.target); // * Получаем все поля формы. FormData - стандартный класс от джса, структура данных

  const todoText = formData.get('text'); //* получаем текст из инпута

  if (!todoText) {
    return;
  }

  const newTask = {
    id: generateId(taskList.tasks),
    parentListId: getListIdByUrl(),
    text: todoText,
    checked: false
  };

  taskList.add(newTask);

  createTask(newTask);

  event.target.reset(); // очищаем форму

  storageService.set('tasks', JSON.stringify(taskList.tasks));
}