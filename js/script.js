import taskList from './tasks.js'

import addTask, { createTask } from './task-operations/add-task.js';
import deleteCheckedTasks from './task-operations/delete-checked-tasks.js';
import checkAllTasks from './task-operations/check-all-tasks.js';

const addForm = document.querySelector('.add-form > form'); // находим форму добавления
const addFormMobile = document.querySelector('.bottom-buttons .add-form > form'); // находим форму добавления
const deleteCheckedBtn = document.querySelector('.delete-checked-btn');
const checkAllTasksBtn = document.querySelector('.check-all-btn');

addForm.addEventListener('submit', addTask);
addFormMobile.addEventListener('submit', addTask);
deleteCheckedBtn.addEventListener('click', deleteCheckedTasks);
checkAllTasksBtn.addEventListener('click', checkAllTasks);

taskList.tasks.forEach((task) => {
  createTask(task);
});

//* блок под мобилу
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});