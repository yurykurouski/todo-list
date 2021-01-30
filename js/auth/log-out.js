import currentUser from "../current-user.js";
import renderLogin from "../render/render-login.js";
import storageService from "../storage-service.js";
import headerTemplate from "../templates/pages/lists/header.js";

function logOut() {

  const logOutBtn = document.querySelector('.logout');

  logOutBtn.addEventListener('click', () => {
    // currentUser.logout();  //! не работает почему-то метод
    storageService.set('currentUser', JSON.stringify(null));
    renderLogin()
  })
}

export default logOut;