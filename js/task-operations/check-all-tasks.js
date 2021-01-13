function checkAllTasks() {
  const allTasks = document.querySelectorAll('li');
  const allTasksCheckbox = document.querySelectorAll('li input');

  allTasks.forEach(task => task.setAttribute('class', 'checked'));
  allTasksCheckbox.forEach(checkbox => checkbox.checked = true);
  console.log(allTasksCheckbox)
}

export default checkAllTasks;