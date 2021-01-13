import addTask from './task-operations/add-task.js';
import deleteCheckedTasks from './task-operations/delete-checked-tasks.js';
import checkAllTasks from './task-operations/check-all-tasks.js';

const addForm = document.querySelector('.add-form > form'); // находим форму добавления
const deleteCheckedBtn = document.querySelector('.delete-checked-btn');
const checkAllTasksBtn = document.querySelector('.check-all-btn');

addForm.addEventListener('submit', addTask);
deleteCheckedBtn.addEventListener('click', deleteCheckedTasks);
checkAllTasksBtn.addEventListener('click', checkAllTasks);
