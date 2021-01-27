import {
  createListElement
} from '../list-operations/add-list.js';

import {generateId} from '../utils.js'
import storageService from '../storage-service.js';
import listsList from '../lists-list.js';

import listsTemplate from '../templates/pages/lists/index.js';

function renderLists() {
  const rootDiv = document.querySelector('.container');
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
    listsList.add(newList);

    createListElement(newList);

    event.target.reset();

    storageService.set('lists', JSON.stringify(listsList.lists));
  });

  listsList.lists.forEach((list) => {
    createListElement(list);
  });

  document.title = 'Todo List - Lists list';
};

export default renderLists;