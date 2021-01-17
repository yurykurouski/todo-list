import taskList from './tasks.js'

import addTask, { createTask } from './task-operations/add-task.js';
import deleteCheckedTasks from './task-operations/delete-checked-tasks.js';
import checkAllTasks from './task-operations/check-all-tasks.js';
/* import checkTask from './task-operations/check-task.js';
import deleteTask from './task-operations/delete-task.js';
import editTask from './task-operations/edit-task.js';
 */
const addForm = document.querySelector('.add-form > form'); // находим форму добавления
const deleteCheckedBtn = document.querySelector('.delete-checked-btn');
const checkAllTasksBtn = document.querySelector('.check-all-btn');
// const todoList = document.querySelector('.todo-list ol');  // ! потом это все поправить красиво можно

addForm.addEventListener('submit', addTask);
deleteCheckedBtn.addEventListener('click', deleteCheckedTasks);
checkAllTasksBtn.addEventListener('click', checkAllTasks);

taskList.tasks.forEach((task) => {
  createTask(task);
});

//* блок под мобилу
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});