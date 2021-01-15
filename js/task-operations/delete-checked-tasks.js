import taskList from '../tasks.js';

function deleteCheckedTasks() {
  const checkedTasks = document.querySelectorAll('li.checked');

  checkedTasks.forEach(checkedTask => {
    checkedTask.remove();
  })
  console.log(taskList.tasks);
}

export default deleteCheckedTasks;