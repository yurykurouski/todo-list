import taskList from '../tasks.js';

function deleteTask(event) { // * здесь можно ParentNode  в одну строку записать, два нода один за одним. Или через .slosest()(тоже в одну строку)
  const {
    parentNode
  } = event.target.closest('.material-icons');

  const taskId = parseInt(parentNode.id);

  taskList.delete(taskId);

  parentNode.remove()

  localStorage.setItem('tasks', JSON.stringify(taskList.tasks));
}

export default deleteTask;