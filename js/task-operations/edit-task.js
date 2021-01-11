function editTask(event) {
  /* 
    Находим Span текущего task
    записываем его содердимое в переменную
    создаем текстовый Input и вставляем его вместо Span
    задаем value инпута сохраненным значением span
    после повторного нажатия на кнопку edit, сохраняем текущее значение инпута 
    заменяем инпут на span  с новыфм значением
  */
  const li = event.target.closest('li');

  const {
    parentNode: editButton
  } = event.target;
  // const {
  //   parentNode: li
  // } = editButton;

  const span = li.querySelector('span');

  if (span) {
    const {
      textContent: text
    } = span;

    const input = document.createElement('input');
    input.setAttribute('value', text);
    input.setAttribute('type', 'text');

    return;
  }

  const input = li.querySelector('input[type="text"]');
  const { value: newText } = input;

  const newSpan = document.createElement('span');
  newSpan.textContent = newText;

  li.replaceChild(newSpan, input);
}

export default editTask;