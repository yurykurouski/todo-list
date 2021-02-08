
import listTemplate from '../templates/pages/list/index.js';

import addTask from '../task-operations/add-task.js';
import checkAllTasks from '../task-operations/check-all-tasks.js';
import deleteCheckedTasks from '../task-operations/delete-checked-tasks.js';
import logOut from '../auth/log-out.js';
import renderTasks from './render-tasks.js';
import taskList from '../tasks.js';
import { getId, getListIdByUrl } from '../utils.js';
import storageService from '../storage-service.js';
import listsList from '../lists-list.js';

export function addDnD() {
  const listItems = document.querySelectorAll('li');

  let dragging;
  let draggingOver;

  listItems.forEach((listItem) => {
    listItem.setAttribute('draggable', true);

    listItem.addEventListener('drag', (event) => {
      dragging = event.target;
    });

    listItem.addEventListener('dragover', (event) => {
      event.preventDefault();

      draggingOver = event.target.closest('li');
    });

    listItem.addEventListener('drop', () => {

      taskList.swap(getId(dragging), getId(draggingOver));

      renderTasks();
    });
  });

  storageService.set('tasks', JSON.stringify(taskList.tasks))
}

function renderList() {
  const rootDiv = document.querySelector('.container');

  rootDiv.innerHTML = listTemplate;

  const inputPlaceholder = rootDiv.querySelector('.form-label');
  const currentListName = listsList.getListById(getListIdByUrl()).name;

  inputPlaceholder.textContent = `${currentListName}...`;

  const addForm = document.querySelector('.add-form > form'); // находим форму добавления
  const addFormMobile = document.querySelector('.bottom-buttons .add-form > form'); // находим форму добавления
  const deleteCheckedBtn = document.querySelector('.delete-checked-btn');
  const checkAllTasksBtn = document.querySelector('.check-all-btn');

  addForm.addEventListener('submit', addTask);
  addFormMobile.addEventListener('submit', addTask);
  deleteCheckedBtn.addEventListener('click', deleteCheckedTasks);
  checkAllTasksBtn.addEventListener('click', checkAllTasks);

  renderTasks();

  logOut();

}

export default renderList;