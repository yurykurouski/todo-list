import renderLists from './render/render-lists.js';
import renderList from './render/render-list.js';
import renderRegistration from './render/render-registration.js';
import renderLogin from './render/render-login.js';
import {
  getListIdByUrl
} from './utils.js';
import lists from './lists-list.js';
import currentUser from './current-user.js';

const listRoutePattern = /^\/list\/\d+$/;

const INDEX_URLS = ['/index.html', '/'];

const REGISTRATION_URL = '/registration';

const LOGIN_URL = '/login';

export function renderPage() {
  const {
    pathname: currentUrl
  } = window.location;

  if (currentUrl === REGISTRATION_URL) {
    if (currentUser.userData) {
      renderLists();
      return;
    }

    renderRegistration();

    return;
  }

  if (currentUrl === LOGIN_URL) {
    if (currentUser.userData) {
      renderLists();
      return;
    }
    renderLogin();

    return;
  }

  if (!currentUser.userData) {
    navigateToUrl(LOGIN_URL);

    return;
  }

  if (INDEX_URLS.includes(currentUrl)) {
    renderLists();

    return;
  }

  if (listRoutePattern.test(currentUrl)) {
    const listId = getListIdByUrl();
    const list = lists.getListById(listId);

    if (list.userId !== currentUser.userData.id) {
      navigateToUrl('/');
    }
    renderList();

    return;
  }

  //* блок под мобилу
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

}

export function navigateToUrl(url) {

  window.history.pushState({}, url, window.location.origin + url);

  renderPage();
}