import { navigateToUrl } from "../routing.js";
import userList from "../users.js";

export default function loginUser(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const email = formData('email');
  const password = formData('password');

  const user = userList.getUserByEmail(email);

  if (!user) {
    alert('User does not exist!');

    return;
  }

  const hashedPassword = CryptoJS.SHA3(password);

  if (user.password !== hashedPassword) {
    alert('Password does not match.');
  }

  navigateToUrl('/');
} 