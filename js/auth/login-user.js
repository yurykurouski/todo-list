import currentUser from "../current-user.js";
import { navigateToUrl } from "../routing.js";
import storageService from "../storage-service.js";
import userList from "../users.js";

export default function loginUser(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const email = formData.get('email');
  const password = formData.get('password');

  const user = userList.getUserByEmail(email);

  if (!user) {
    alert('User does not exist!');

    return;
  }

  const hashedPassword = CryptoJS.SHA3(password).toString();

  if (user.password !== hashedPassword) {
    alert('Password does not match.');

    return;
  }

  currentUser.login(user);
  storageService.set('currentUser', JSON.stringify(user));

  navigateToUrl('/');
} 