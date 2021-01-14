function submitTask (event) {
  if (event.keyCode !== 13) {
    return;
  }

    const li = event.target.closest('li');
    const checkBoxTemp = li.querySelector('input')
  saveTask(li, checkBoxTemp)
}

function saveTask(li, checkBoxTemp) {
  const input = li.querySelector('input[type="text"]');
  const {  value: newText  } = input;

  const newSpan = document.createElement('span');
  newSpan.setAttribute('class', 'todoText');
  newSpan.textContent = newText;

  checkBoxTemp.removeAttribute('disabled')

  event.target.setAttribute('class', 'fas fa-edit')

  li.replaceChild(newSpan, input);
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
    const { textContent: text } = span;

    const input = document.createElement('input');
    input.setAttribute('value', text);
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'input-for-edit');

    input.addEventListener('keydown', submitTask)

    checkBoxTemp.setAttribute('disabled', 'disabled');

    event.target.setAttribute('class', 'fas fa-save') //* можно просто найти существую иконку и для нее поменять класс на класс иконки с дискетой

    li.replaceChild(input, span);

    return;
  }

  saveTask(li, checkBoxTemp)

}

export default editTask;