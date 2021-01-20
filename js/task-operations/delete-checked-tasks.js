import taskList from '../tasks.js';
import storageService from '../storage-service.js'

function deleteCheckedTasks() {
  const checkedTasks = document.querySelectorAll('li.checked');

  checkedTasks.forEach(checkedTask => checkedTask.remove());
  taskList.deleteChecked();
  
  storageService.set('tasks', JSON.stringify(taskList.tasks));
}

export default deleteCheckedTasks;