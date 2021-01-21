import {  generateId  } from './utils.js';
import { createListElement } from './templates/pages/lists/index.js';

import storageService from './storage-service.js';
import listsList from './lists-list.js';

import listsTemplate from './templates/pages/lists/index.js';

const currentUrl = window.location.pathname;

const rootDiv = document.querySelector('.container');

// !посмотри на гите как и куда файлы с функцией
if (currentUrl === '/') {
  rootDiv.innerHTML = listsTemplate;

  const addListForm = document.querySelector('.add-form > form');

  addListForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const listName = formData.get('name');

    const newList = {
      id: generateId(listsList.lists),
      name: listName,
    };
    console.log(newList)
    listsList.add(newList);

    createListElement(newList);

    event.target.reset();
    storageService.set('lists', JSON.stringify(listsList.lists));
  });

  listsList.lists.forEach((list) => {
    createListElement(list);
  })

}