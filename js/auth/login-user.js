import currentUser from "../current-user.js";
import {
  navigateToUrl
} from "../routing.js";
import storageService from "../storage-service.js";
import userList from "../users.js";
import { checkIfHasErrors, showErrors } from "../utils.js";

const EMAIL_REGEX = /\S+@\S+\.\S+/;

function validateLogin({
  email,
  password,
  user,
  hashedPassword
}) {

  let errors = {
    email: [],
    password: [],
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

  if (!user && EMAIL_REGEX.test(email)) {
    errors = {
      ...errors,
      email: [...errors.email, 'User does not exist.']
    };
  }

  if (user && user.password !== hashedPassword) {
    errors = {
      ...errors,
      password: [...errors.password, 'Password does not match.']
    };
  }

  return errors;
}

export default function loginUser(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const email = formData.get('email');
  const password = formData.get('password');
  const hashedPassword = CryptoJS.SHA3(password).toString();

  const user = userList.getUserByEmail(email);

  const errors = validateLogin({
    email,
    password,
    user,
    hashedPassword
  });

  showErrors(errors);

  const hasErrors = checkIfHasErrors(errors);

  if (hasErrors) {
    return;
  }

  if (user.password === hashedPassword) {
    currentUser.login(user);
    storageService.set('currentUser', JSON.stringify(user));

    navigateToUrl('/');
  }
}