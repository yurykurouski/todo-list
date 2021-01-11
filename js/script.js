import addTask from './task-operations/addTask.js';
import deleteCheckedTasks from './task-operations/delete-checked-tasks.js';

const addForm = document.querySelector('.add-form > form'); // находим форму добавления
const deleteCheckedBtn = document.querySelector('.delete-checked-btn');

addForm.addEventListener('submit', addTask);
deleteCheckedBtn.addEventListener('click', deleteCheckedTasks);