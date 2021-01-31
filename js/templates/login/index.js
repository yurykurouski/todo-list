const template = `
  <div class='login-form'>
    <form>
      <div class = 'email-wrap'>
        <input class='email-input' name='email' autofocus required/>
        <label for='email' class="auth-label">E-mail</label>
      </div>
      <span class='email user error'></span>

      <div div class = 'passwords-wrap' >
        <input class='password-input' name='password' type='password' required/>
        
        <label for='password' class="auth-label">Password</label>
      </div>
      <span class='password hashedPassword error'></span>

      <div>
        <button class='contained-button' type='submit'>Login</button>
        <a href='/registration'> or sign in here</a>
      </div>
    </form>
  </div>
`;

export default template;