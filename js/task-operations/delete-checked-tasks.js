import taskList from '../tasks.js';

function deleteCheckedTasks() {
  const checkedTasks = document.querySelectorAll('li.checked');

  checkedTasks.forEach(checkedTask => checkedTask.remove());
  taskList.deleteChecked();
  console.log(taskList.tasks); // ! не нужно
  localStorage.setItem('tasks', JSON.stringify(taskList.tasks));
}

export default deleteCheckedTasks;