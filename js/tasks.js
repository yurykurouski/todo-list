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

  edit(id, text) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, text };
      }

      return task;
    });
  }

  check(id) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, checked: !task.checked };
      }

      return task;
    });
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