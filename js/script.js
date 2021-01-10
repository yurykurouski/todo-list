const addForm = document.querySelector('.add-form > form'); // находим форму добавления

const todoList = document.querySelector('.todo-list ol');

let tasks = [];

function checkTask(event) { 
  const li = event.target.parentNode;

  if (event.target.checked) {
    li.classList.add('cheked');
  } else {
    li.classList.remove('cheked');
  }
}

addForm.addEventListener('submit', (event) => { // вешаем обрабытия сабмит на форму
  event.preventDefault(); // сброс стандартного поведения отправки формы

  const formData = new FormData(event.target); // * Получаем все поля формы. FormData - стандартный класс от джса, структура данных

  const todoText = formData.get('text'); // получаем текст из инпута

  console.log(todoText);

  if (!todoText) {  
    return;
  }

  const newTask = {
    text: todoText,
    checked: false
  }

  tasks = [...tasks, newTask]; // *здесь добавляю в массив задач задачу

  const newToDo = document.createElement('li'); 

  todoList.appendChild(newToDo);
  newToDo.innerHTML = `<input type='checkbox' id=${tasks.length - 1}> <span>${todoText}</span> <button><i class="fas fa-trash-alt" class='delete-btn'></i> </button>`;

  const checkBox = document.getElementById(`${tasks.length - 1}`);

  checkBox.addEventListener('change', checkTask);

  event.target.reset(); // очищаем форму
});

/*  ДЗ:
1)Добавить анимацию на фокус для инпута(опдчеркивание инпута снизу, от центра в стороны)
2) Добавть функционал удаления 
3) Добавить заголовок для проги и застилить как-то
4) Сделать все как-то красиво, что бы отличалось
*/

