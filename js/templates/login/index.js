const template = `
  <div class='login-form'>
    <form>
      <div class = 'email-wrap'>
        <input class='email-input' name='email' autofocus required/>
        <span class='error'></span>
        <label for='email' class="auth-label">E-mail</label>
      </div>

      <div div class = 'passwords-wrap' >
        <input class='password-input' name='password' type='password' required/>
        <span class='error'></span>
        <label for='password' class="auth-label">Password</label>
      </div>

      <div>
        <button class='contained-button' type='submit'>Login</button>
        <a href='/registration'> or sign in here</a>
      </div>
    </form>
  </div>
`;

export default template;