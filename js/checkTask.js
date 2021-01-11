export default function checkTask(event) { // ! здесь был баг при нажатии на чекбокс в массиве не менялся checked на true
  const li = event.target.parentNode;

  if (event.target.checked) {
    li.classList.add('cheked');
  } else {
    li.classList.remove('cheked');
  }
}