import storageService from '../../../storage-service.js';

const template = `
    <div class='add-form'>
      <form>
        <input class='input-text' name='name' name='text' autofocus required>
        <label for='input-text' class="form-label">List name</label>
        <button type='submit' class="material-icons" title='Add task'>add_task</button>
      </form>
    </div>

    <div class='lists'>
      <ol>
      </ol>
    </div>

    <div class='bottom-buttons'>
      <button class="material-icons check-all-btn" title='Check all tasks'>done_all</button>
      <button class="material-icons delete-checked-btn" title='Delete checked tasks' >delete_sweep</button>

          <div class='add-form'>
            <form>
              <input class='input-text' type='text' name='text' autofocus required>
              <label for='input-text' class="form-label">Your new task</label>
              <button type='submit' class="material-icons" title='Add task'>add_task</button>
            </form>
          </div>
    </div>
`;
//! эту функцию убрать и все настроить
export function createListElement(list) {
  const todoList = document.querySelector('.lists ol');
  const lists = JSON.parse(storageService.get('lists'));

  const listEl = document.createElement('li');

  if (lists) {
    const firstLi = todoList.querySelector('li');

    todoList.insertBefore(listEl, firstLi);
  } else todoList.appendChild(listEl);

  listEl.innerHTML = `
    <input type='checkbox' id='chkBox${list.id}'>
    <span class='todoText'>${list.name}</span> 
    <button id='editBtn${list.id}' class='material-icons editbtn' >create</button>
    <button id='delBtn${list.id}' class='material-icons delbtn' >delete</button>
  `;

}

export default template;