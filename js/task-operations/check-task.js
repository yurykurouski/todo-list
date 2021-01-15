import taskList from '../tasks.js'

function checkTask(event) {
  const { target } = event;   // * здесь пример деструткуризации, свойства(target, напрмер) можно записывать несколько - через запятую
  const { parentNode: li, checked } = target;
  const taskId = parseInt(li.id);
  
  if (checked) {
    li.classList.add('checked');
    taskList.check(taskId, true);
  } else {
    li.classList.remove('checked');
    taskList.check(taskId, false);
  }

  localStorage.setItem('tasks', JSON.stringify(taskList.tasks));
}

export default checkTask;