import addTask from './addTask.js';

const addForm = document.querySelector('.add-form > form'); // находим форму добавления

addForm.addEventListener('submit', addTask);