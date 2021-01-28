const template = `
  <div class='registration-form'>
    <form>
      <div class='email-wrap'>
        <input class='email-input' name='email' autofocus required/>
        <span class='error'></span>
        <label for='email' class="auth-label">E-mail</label>
      </div>

      <div class='passwords-wrap'>
        <div>
          <input class='password-input' name='password' type='password' required/>
          <span class='error'></span>
          <label for='password' class="auth-label">Password</label>
        </div>
        
        <div>
          <input class='password-input' name='repeatPassword' type='password' required/>
          <span class='error'></span>
          <label for='repeatPassword' class="auth-label">Repeat password</label>
        </div>
      </div>

      <div>
        <button class='contained-button' type='submit'>Register</button>
        <a href='/login'>or log in here</a>
      </div>
    </form>
  </div>
`;

export default template;