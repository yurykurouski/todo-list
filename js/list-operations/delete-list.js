import listsList from '../lists-list';
import storageService from '../storage-service.js';

function deleteList(event) { // * здесь можно ParentNode  в одну строку записать, два нода один за одним. Или через .slosest()(тоже в одну строку)
  const {
    parentNode
  } = event.target.closest('.material-icons');

  const taskId = parseInt(parentNode.id);

  listsList.delete(taskId);

  parentNode.remove()

  storageService.set('tasks', JSON.stringify(listsList.lists));

}

export default deleteList;


