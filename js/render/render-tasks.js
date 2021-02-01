import { createTask } from "../task-operations/add-task.js";
import taskList from "../tasks.js";
import { getListIdByUrl } from "../utils.js";
import { addDnD } from "./render-list.js";

export default function renderTasks() {
  const listId = getListIdByUrl();

  const todoList = document.querySelector('.todo-list ol');

  todoList.innerHTML = '';

  taskList.tasks
    .filter((task) => task.parentListId === listId)
    .forEach((task) => {
      createTask(task);
    });
  
  addDnD();
}