import addTask from './task-operations/addTask.js';

const addForm = document.querySelector('.add-form > form'); // находим форму добавления

addForm.addEventListener('submit', addTask);