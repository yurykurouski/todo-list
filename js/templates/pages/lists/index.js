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
      <button type='button' class="pure-material-button-text logout">Log out</button>

          <div class='add-form'>
            <form>
              <input class='input-text' type='text' name='text' autofocus required>
              <label for='input-text' class="form-label">Your new task</label>
              <button type='submit' class="material-icons" title='Add task'>add_task</button>
            </form>
          </div>
    </div>
`;

export default template;