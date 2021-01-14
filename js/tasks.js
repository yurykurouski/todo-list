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
}

const tasks = JSON.parse(localStorage.getItem('tasks'));

const taskList = new TaskList(tasks ? tasks : []); // на слуйчай, если запускаем первый раз он создает пустой массив

export default taskList;