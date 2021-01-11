import addTask from './task-operations/addTask.js';
import deleteCheckedTasks from './task-operations/delete-checked-tasks.js';

const addForm = document.querySelector('.add-form > form'); // находим форму добавления
const deleteCheckedBtn = document.querySelector('.delete-checked-btn');

addForm.addEventListener('submit', addTask);
deleteCheckedBtn.addEventListener('click', deleteCheckedTasks);

// ! ДЗ доделать стили, что все было аккуратно.
Что бы не был активен чекбокс в режиме редактирования(через атрибут Disabled )
и что бы иконка менялась на сохранить.