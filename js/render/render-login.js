import loginUser from "../auth/login-user.js";
import template from "../templates/login/index.js";

const rootDiv = document.querySelector('.container');

export default function renderLogin() {
  rootDiv.innerHTML = template;

  document.title = 'Todo List - Log in';

  const loginForm = document.querySelector('.login-form > form');

  loginForm.addEventListener('submit', loginUser);
}