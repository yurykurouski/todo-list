import checkTask from "./check-task.js";

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

    checkBoxTemp.setAttribute('disabled', 'disabled')

    li.replaceChild(input, span);

    return;
  }

  const input = li.querySelector('input[type="text"]');
  const { value: newText } = input;

  const newSpan = document.createElement('span');
  newSpan.setAttribute('class', 'todoText');
  newSpan.textContent = newText;

  checkBoxTemp.removeAttribute('disabled')

  li.replaceChild(newSpan, input);
}

export default editTask;