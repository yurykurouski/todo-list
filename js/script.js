import listsTemplate from './templates/pages/lists/index.js';
import {generateId} from './utils.js';
import listsTemplate from './templates/pages/lists/index.js'
import listsList from './lists-list.js';

const currentUrl = window.location.pathname;

const rootDiv = document.querySelector('.container');

if (currentUrl === '/') {
  rootDiv.innerHTML = listsTemplate;

  const addListForm = document.querySelector('.add-form > form');

  addListForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const listName = formData.get('name');

    const newList = {
      id: generateId(listsList),
      name: listName
    };

    listsList.add(newList)
  })
}

Переписать что бы в индекс.дж список генерился из локал сторадж и что бы работало добавление.
Дописать функционал добавления в класс.