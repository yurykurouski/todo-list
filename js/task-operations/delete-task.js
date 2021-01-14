import taskList from '../tasks.js';

function deleteTask() { // * здесь можно ParentNode  в одну строку записать, два нода один за одним. Или через .slosest()(тоже в одну строку)
  const target = this.parentNode; // TODO здесь тоже сделай деструктуризацию как и в чекТаск
  const parent = target.parentNode;

  const taskId = parseInt(parent.id);  //! тут что-то не то с айдиш, надо получить верный айди
  taskList.delete(taskId);
    
  parent.removeChild(target);

  localStorage.setItem('tasks', JSON.stringify(taskList.tasks));  //! не работает из-за йди
}

export default deleteTask;