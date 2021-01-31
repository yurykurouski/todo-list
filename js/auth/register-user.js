import currentUser from "../current-user.js";
import {
  navigateToUrl
} from "../routing.js";
import storageService from "../storage-service.js";
import userList from "../users.js";
import {
  generateId
} from "../utils.js";

const EMAIL_REGEX = /\S+@\S+\.\S+/;
const MIN_PASSWORD_LENGTH = 8;
const PASSWORD_REGEX = /(([A-Za-z]+\d+)|(\d+[A-Za-z]+))[A-Za-z\d]/;

function validateRegistration({
  email,
  password,
  repeatPassword
}) {
  let errors = {
    email: [],
    password: [],
    repeatPassword: []
  };

  if (!email) {
    errors = {
      ...errors,
      email: [...errors.email, 'Email cannot be empty.']
    };
  }

  if (email && !EMAIL_REGEX.test(email)) {
    errors = {
      ...errors,
      email: [...errors.email, 'Email invalid format.']
    };
  }

  if (!password) {
    errors = {
      ...errors,
      password: [...errors.password, 'Password can not be empty.']
    };
  }

  if (password && password.length < MIN_PASSWORD_LENGTH) {
    errors = {
      ...errors,
      password: [...errors.password, `Password should contain at least ${MIN_PASSWORD_LENGTH} characters`]
    };
  }

  if (password && !PASSWORD_REGEX.test(password) && password.length > MIN_PASSWORD_LENGTH) {
    errors = {
      ...errors,
      password: [...errors.password, 'Password invalid format.']
    };
  }

  if (password !== repeatPassword && PASSWORD_REGEX.test(password) && password.length > MIN_PASSWORD_LENGTH) {
    errors = {
      ...errors,
      repeatPassword: [...errors.repeatPassword, 'Passwords does not match.']
    };
  }

  return errors;
}

export default function registerUser(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const email = formData.get('email');
  const password = formData.get('password');
  const repeatPassword = formData.get('repeatPassword');

  const errors = validateRegistration({
    email,
    password,
    repeatPassword
  });

  let hasErrors = false;

  for (let key in errors) {
    const span = document.querySelector(`.${key}`);

    if (errors[key].length > 0) {
      hasErrors = true;

      const errorStr = errors[key].join('<br>');

      span.style.display = 'inline';
      span.innerHTML = errorStr;
    } else {
      span.innerHTML = '';
    }
  }

  if (hasErrors) {
    return;
  }

  const hashedPassword = CryptoJS.SHA3(password)

  const newUser = {
    id: generateId(userList.users),
    email,
    password: hashedPassword.toString()
  };

  try {
    userList.add(newUser);
    currentUser.login(newUser);

    storageService.set('users', JSON.stringify(userList.users));
    storageService.set('currentUser', JSON.stringify(currentUser.userData));

    navigateToUrl('/');
  } catch (error) {
    alert(error.message);
  }

  event.target.reset();
}