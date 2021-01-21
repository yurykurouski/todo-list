import storageService from '../storage-service.js'

//! настроить импорты и экспорты
export function createListElement(list) {
  const todoList = document.querySelector('.todo-list ol');
  const lists = JSON.parse(storageService.get('lists'));

  const listEl = document.createElement('li');

  if (lists) {
    const firstLi = todoList.querySelector('li');

    todoList.insertBefore(listEl, firstLi);
  } else todoList.appendChild(listEl);

  listEl.innerHTML = `
    <input type='checkbox' id='chkBox${list.id}'>
    <span class='todoText'>${list.name}</span> 
    <button id='editBtn${list.id}' class='material-icons editbtn' >create</button>
    <button id='delBtn${list.id}' class='material-icons delbtn' >delete</button>
  `;
}