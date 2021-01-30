import {
  createListElement
} from '../list-operations/add-list.js';

import {
  generateId
} from '../utils.js'
import storageService from '../storage-service.js';
import listsList from '../lists-list.js';

import listsTemplate from '../templates/pages/lists/index.js';
import currentUser from '../current-user.js';
import headerTemplate from '../templates/pages/lists/header.js';
import renderLogin from './render-login.js';
import logOut from '../auth/log-out.js';

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
      userId: currentUser.userData.id,
      name: listName
    };
    listsList.add(newList);

    createListElement(newList);

    event.target.reset();

    storageService.set('lists', JSON.stringify(listsList.lists));
  });

  const currentUserId = currentUser.userData.id;

  listsList.lists.filter((list) => list.userId === currentUserId)
    .forEach((list) => {
      createListElement(list);
    });

  document.title = 'Todo List - Lists list';

  logOut()
};

export default renderLists;