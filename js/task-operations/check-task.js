export default function checkTask(event) { // ! здесь был баг при нажатии на чекбокс в массиве не менялся checked на true
  const { target } = event;   // * здесь пример деструткуризации, свойства(target, напрмер) можно записывать несколько - через запятую
  const { parentNode: li, checked } = target;

  if (checked) {
    li.classList.add('checked');
  } else {
    li.classList.remove('checked');
  }
}
