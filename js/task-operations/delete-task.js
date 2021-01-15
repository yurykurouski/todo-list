import taskList from '../tasks.js';
// import getTaskId from './get-task-id.js'

function deleteTask(event) { // * здесь можно ParentNode  в одну строку записать, два нода один за одним. Или через .slosest()(тоже в одну строку)
/*   const target = this.parentNode; // TODO здесь тоже сделай деструктуризацию как и в чекТаск
  const parent = target.parentNode; */
  const {
    parentNode
  } = event.target.closest('.fa-trash');

  const taskId = parseInt(parentNode.id);

  // const taskId = parseInt(target.id);
  
  taskList.delete(taskId);

  parentNode.remove()

  /* parent.removeChild(target); */

  localStorage.setItem('tasks', JSON.stringify(taskList.tasks));
}

export default deleteTask;