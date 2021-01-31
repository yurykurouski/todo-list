import loginUser from "../auth/login-user.js";
import template from "../templates/login/index.js";

const rootDiv = document.querySelector('.container');

export default function renderLogin() {
  rootDiv.innerHTML = template;

  document.title = 'Todo List - Log in';

  const loginForm = document.querySelector('.login-form > form');
  const errorSpan = document.querySelectorAll('.error');
  errorSpan.forEach((span) => span.style.display = 'none');

  loginForm.addEventListener('submit', loginUser);
}