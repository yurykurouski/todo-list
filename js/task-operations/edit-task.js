import {
  ENTER_KEY_CODE
} from '../constants.js'

import taskList from '../tasks.js';
import {
  getId
} from '../utils.js';
import storageService from '../storage-service.js'


function submitTask(event) {
  if (event.keyCode !== ENTER_KEY_CODE) {
    return;
  }

  const li = event.target.closest('li');
  const checkBoxTemp = li.querySelector('input');
  const btn = li.querySelector('.savebtn');

  btn.setAttribute('class', 'material-icons editbtn');
  btn.textContent = 'create';

  saveTask(li, checkBoxTemp)
}

function saveTask(li, checkBoxTemp) {
  const input = li.querySelector('input[type="text"]');
  const taskId =getId(li)
  const {
    value: newText
  } = input;

  taskList.edit(taskId, newText);

  const newSpan = document.createElement('span');
  newSpan.setAttribute('class', 'todoText');
  newSpan.textContent = newText;

  checkBoxTemp.removeAttribute('disabled');

  event.target.setAttribute('class', 'material-icons editbtn')
  event.target.textContent = 'create';

  li.replaceChild(newSpan, input);

  storageService.set('tasks', JSON.stringify(taskList.tasks));

}

function editTask(event) {
  /* 
    находим span текущего task
    записываем его содержимое в переменную
    создаем текстовый input и вставляем его вместо span
    задаем value инпута сохраненным значением span
    после повторного нажатия на кнопку edit, сохраняем текущее значение инпута
    заменяем инпут на span с новым значением 
  */

  const li = event.target.closest('li');
  const checkBoxTemp = li.querySelector('input')
  const span = li.querySelector('span');

  if (span) {
    const {
      textContent: text
    } = span;

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'input-for-edit');

    input.addEventListener('keydown', submitTask)

    checkBoxTemp.setAttribute('disabled', 'disabled');

    event.target.setAttribute('class', 'material-icons savebtn') //* можно просто найти существую иконку и для нее поменять класс на класс иконки с дискетой
    event.target.textContent = 'save'

    li.replaceChild(input, span);

    input.focus(); // вешаем фокус на инпут, но он становится в начало строки
    input.value = ''; //удаляем значение инпута
    input.value = text; // а здесь возвращаем значение в инпут, что бы курсор был в конце

    return;
  }

  saveTask(li, checkBoxTemp);

}

export default editTask;