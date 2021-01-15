import taskList from '../tasks.js';

function checkAllTasks() {
  const allTasks = document.querySelectorAll('li');
  const allTasksCheckbox = document.querySelectorAll('li input');

  allTasks.forEach(task => task.setAttribute('class', 'checked'));
  allTasksCheckbox.forEach(checkbox => checkbox.checked = true);

  taskList.checkAllTasksLocalStorage();
  localStorage.setItem('tasks', JSON.stringify(taskList.tasks));
}

export default checkAllTasks;