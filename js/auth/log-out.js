import currentUser from "../current-user.js";
import { navigateToUrl, LOGIN_URL } from "../routing.js";
import storageService from "../storage-service.js";

function logOut() {

  const logOutBtn = document.querySelector('.logout');

  logOutBtn.addEventListener('click', () => {
    currentUser.logout();
    storageService.set('currentUser', JSON.stringify(currentUser.userData));
    navigateToUrl(LOGIN_URL);
  });
}

export default logOut;