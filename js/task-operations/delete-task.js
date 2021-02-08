import taskList from '../tasks.js';
import storageService from '../storage-service.js'
import renderList from '../render/render-list.js';

function deleteTask(event) { // * здесь можно ParentNode  в одну строку записать, два нода один за одним. Или через .slosest()(тоже в одну строку)
  const {
    parentNode
  } = event.target.closest('.material-icons');

  const taskId = parseInt(parentNode.id);

  taskList.delete(taskId);

  parentNode.remove();

  storageService.set('tasks', JSON.stringify(taskList.tasks));

}

export default deleteTask;