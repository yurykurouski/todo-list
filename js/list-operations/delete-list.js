import listsList from '../lists-list.js';
import taskList from '../tasks.js'
import storageService from '../storage-service.js';


function deleteList(event) {
  const {
    parentNode
  } = event.target.closest('.material-icons');

  const listId = parseInt(parentNode.id.split('-')[1], 10);

  listsList.delete(listId);
  taskList.deleteTasksFromList(listId);

  parentNode.remove();

  storageService.set('lists', JSON.stringify(listsList.lists));
  storageService.set('tasks', JSON.stringify(taskList.tasks));
}

export default deleteList;


