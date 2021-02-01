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
        return {
          ...task,
          text
        };
      }

      return task;
    });
  }

  check(id) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          checked: !task.checked
        };
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

  deleteTasksFromList(id) {
    this.tasks = this.tasks.filter(task => task.parentListId != id);
  }

  swap(firstId, secondId) {
    let firstIndex = this.tasks.findIndex(task => task.id === firstId);
    let secondIndex = this.tasks.findIndex(task => task.id === secondId);

    if (firstIndex > secondIndex) {
      const temp = firstIndex;
      firstIndex = secondIndex;
      secondIndex = temp
    }

    if (firstIndex == secondIndex) {
      return
    }

    this.tasks = this.tasks
      .slice(0, firstIndex)
      .concat(
        this.tasks[secondIndex],
        this.tasks.slice(firstIndex + 1, secondIndex),
        this.tasks[firstIndex],
        this.tasks.slice(secondIndex + 1)
      );
  }
}

const tasks = JSON.parse(storageService.get('tasks'));

const taskList = new TaskList(tasks ? tasks : []); // на слуйчай, если запускаем первый раз он создает пустой массив

export default taskList;