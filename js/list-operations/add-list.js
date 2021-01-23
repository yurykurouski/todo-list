import storageService from '../storage-service.js';
import renderList from '../render/render-list.js';

//! настроить импорты и экспорты
export function createListElement(list) {
  const todoList = document.querySelector('.lists ol');
  const lists = JSON.parse(storageService.get('lists'));

  const listEl = document.createElement('li');
  listEl.setAttribute('id', `list-${list.id}`);

  if (lists) {
    const firstLi = todoList.querySelector('li');

    todoList.insertBefore(listEl, firstLi);
  } else todoList.appendChild(listEl);

  listEl.innerHTML = `
    <a href='#' class='todoText'>${list.name}</a> 
    <button id='editBtn${list.id}' class='material-icons editbtn' >create</button>
    <button id='delBtn${list.id}' class='material-icons delbtn' >delete</button>
  `;

  const linkToList = listEl.querySelector('a');

  linkToList.addEventListener('click', (event) => {
    event.preventDefault();

    window.history.pushState({},
      '/list/${list.id}',
      window.location.origin + `/list/${list.id}`
    );

    renderList();
  });
}