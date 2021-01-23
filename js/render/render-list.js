import {
  getListIdByUrl
} from '../utils.js';
import taskList from '../tasks.js';
import listTemplate from '../templates/pages/list/index.js';

import addTask, {
  createTask
} from '../task-operations/add-task.js';
import checkAllTasks from '../task-operations/check-all-tasks.js';
import deleteCheckedTasks from '../task-operations/delete-checked-tasks.js';


function renderList() {
  const rootDiv = document.querySelector('.container');

  rootDiv.innerHTML = listTemplate;

  const addForm = document.querySelector('.add-form > form'); // находим форму добавления
  const addFormMobile = document.querySelector('.bottom-buttons .add-form > form'); // находим форму добавления
  const deleteCheckedBtn = document.querySelector('.delete-checked-btn');
  const checkAllTasksBtn = document.querySelector('.check-all-btn');

  addForm.addEventListener('submit', addTask);
  addFormMobile.addEventListener('submit', addTask);
  deleteCheckedBtn.addEventListener('click', deleteCheckedTasks);
  checkAllTasksBtn.addEventListener('click', checkAllTasks);

  const listId = getListIdByUrl();

  taskList.tasks
    .filter((task) => task.parentListId === listId)
    .forEach((task) => {
      createTask(task);
    });
}

export default renderList;