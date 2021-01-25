import storageService from "../storage-service.js";
import userList from "../users.js";

export default function registerUser(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const email = formData.get('email');
  const password = formData.get('password');

  const hashedPassword = CryptoJS.SHA3(password)

  const newUser = {
    email,
    password: hashedPassword.toString()
  };

  try {
    userList.add(newUser);
    
    storageService.set('users', JSON.stringify(userList.users));
  } catch (error) {
    alert(error.message);
  }
  
  event.target.reset();
}