import {
  ENTER_KEY_CODE
} from '../constants.js'

import storageService from '../storage-service.js'
import listsList from '../lists-list.js';


function submitList(event) {
  if (event.keyCode !== ENTER_KEY_CODE) {
    return;
  }

  const li = event.target.closest('li');
  // const checkBoxTemp = li.querySelector('input');
  const btn = li.querySelector('.savebtn');

  btn.setAttribute('class', 'material-icons editbtn');
  btn.textContent = 'create';

  saveList(li)
}

function saveList(li) {
  const input = li.querySelector('input[type="text"]');

  const listId = parseInt(li.id.split('-')[1], 10);
  const {
    value: newText
  } = input;

  listsList.edit(listId, newText);

  const newSpan = document.createElement('a');
  newSpan.setAttribute('href', '#');
  newSpan.setAttribute('class', 'todoText');
  newSpan.textContent = newText;

  // checkBoxTemp.removeAttribute('disabled');

  event.target.setAttribute('class', 'material-icons editbtn')
  event.target.textContent = 'create';

  li.replaceChild(newSpan, input);

  storageService.set('lists', JSON.stringify(listsList.lists));

}

function editList(event) {
  /* 
    находим span текущего task
    записываем его содержимое в переменную
    создаем текстовый input и вставляем его вместо span
    задаем value инпута сохраненным значением span
    после повторного нажатия на кнопку edit, сохраняем текущее значение инпута
    заменяем инпут на span с новым значением 
  */
  const li = event.target.closest('li');
  // const checkBoxTemp = li.querySelector('input')
  const listLabel = li.querySelector('a');

  if (listLabel) {
    const {
      textContent: text
    } = listLabel;

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'input-for-edit');

    input.addEventListener('keydown', submitList)

    // checkBoxTemp.setAttribute('disabled', 'disabled');

    event.target.setAttribute('class', 'material-icons savebtn') //* можно просто найти существую иконку и для нее поменять класс на класс иконки с дискетой
    event.target.textContent = 'save'

    li.replaceChild(input, listLabel);

    input.focus(); // вешаем фокус на инпут, но он становится в начало строки
    input.value = ''; //удаляем значение инпута
    input.value = text; // а здесь возвращаем значение в инпут, что бы курсор был в конце

    return;
  }

  saveList(li);

}

export default editList;