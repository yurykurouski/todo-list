const template = `
  <div class='registration-form'>
    <form>
      <div class='email-wrap'>
        <input class='email-input' name='email' autofocus required/>
        <label for='email' class="auth-label">E-mail</label>
      </div>
        <span class='email error'></span>

      <div class='passwords-wrap'>
        <div>
          <input class='password-input' name='password' type='password' required/>
          <label for='password' class="auth-label">Password</label>
        </div>

        <div>
          <input class='password-input' name='repeatPassword' type='password' required/>
          <label for='repeatPassword' class="auth-label">Repeat password</label>
        </div>
      </div>
      <span class='password error'></span>
      <span class='repeatPassword error'></span>

      <div>
        <button class='contained-button' type='submit'>Register</button>
        <a href='/login'>or log in here</a>
      </div>
    </form>
  </div>
`;

export default template;