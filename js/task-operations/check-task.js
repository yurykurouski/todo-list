import taskList from '../tasks.js';
import { getTaskId} from '../utils.js'
import storageService from '../storage-service.js'

function checkTask(event) {
  const { target } = event;   // * здесь пример деструткуризации, свойства(target, напрмер) можно записывать несколько - через запятую
  const { parentNode: li, checked } = target;
  const taskId = getTaskId(li);
  
  if (checked) {
    li.classList.add('checked');
    taskList.check(taskId);
  } else {
    li.classList.remove('checked');
    taskList.check(taskId);
  }

  storageService.set('tasks', JSON.stringify(taskList.tasks));
}

export default checkTask;