const template = `
  <div class='registration-form'>
    <form>
      <div class='email-wrap'>
        <input class='email-input' name='email' autofocus required/>
        <label for='email' class="auth-label">E-mail</label>
      </div>

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

      <div>
        <button type='submit'>Register</button>
        <a href='/login'> or Login </a>
      </div>
    </form>
  </div>
`;

export default template;