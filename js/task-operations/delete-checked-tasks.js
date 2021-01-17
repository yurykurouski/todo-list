import taskList from '../tasks.js';

function deleteCheckedTasks() {
  const checkedTasks = document.querySelectorAll('li.checked');

  checkedTasks.forEach(checkedTask => checkedTask.remove());
  taskList.deleteChecked();
  
  localStorage.setItem('tasks', JSON.stringify(taskList.tasks));
}

export default deleteCheckedTasks;