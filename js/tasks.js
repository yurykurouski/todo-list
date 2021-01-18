import storageService from './storage-service.js'

class TaskList {
  constructor(tasks) {
    this.tasks = tasks;
  }

  add(newTask) {
    this.tasks = [...this.tasks, newTask];
  }

  delete(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  edit(id, value) {  //! Катарина сделала через .map и так правильнее
    this.tasks.find(task => task.id === id).text = value;
  }

  check(id, state) {  //! и это тоже
    this.tasks.find(task => task.id === id).checked = state;
  }

  deleteChecked() {
    this.tasks = this.tasks.filter(task => !task.checked);
  }

  checkAllTasksLocalStorage() {
    this.tasks.forEach(task => task.checked = true);
  }
}

const tasks = JSON.parse(storageService.get('tasks'));

const taskList = new TaskList(tasks ? tasks : []); // на слуйчай, если запускаем первый раз он создает пустой массив

export default taskList;