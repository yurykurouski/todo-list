import template from "../templates/login/index.js";

const rootDiv = document.querySelector('.container');

export default function renderLogin() {
  rootDiv.innerHTML = template;
}