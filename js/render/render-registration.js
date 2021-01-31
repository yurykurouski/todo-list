import registerUser from "../auth/register-user.js";
import registrationTemplate from "../templates/registration/index.js";

const rootDiv = document.querySelector('.container');

export default function renderRegistration() {
  rootDiv.innerHTML = registrationTemplate;

  const registrationForm = document.querySelector('.registration-form > form');
  const errorSpan = document.querySelectorAll('.error');
  errorSpan.forEach((span) => span.style.display = 'none');

  registrationForm.addEventListener('submit', registerUser);

  document.title = 'Todo List - Registration';
}
