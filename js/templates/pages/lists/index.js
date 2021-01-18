const template = `
    <div class='add-form'>
      <form>
        <input class='input-text' name='name' name='text' autofocus required>
        <label for='input-text' class="form-label">List name</label>
        <button type='submit' class="material-icons" title='Add task'>add_task</button>
      </form>
    </div>

    <ol>
      <li>
        <a>List #1</a>
      </li>
      
      <li>
        <a>List #2</a>
      </li>

      <li>
        <a>List #2</a>
      </li>
    </ol>
`;

export default template;