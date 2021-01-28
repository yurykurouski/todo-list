import renderLists from './render/render-lists.js';
import renderList from './render/render-list.js';
import renderRegistration from './render/render-registration.js';
import renderLogin from './render/render-login.js';

const listRoutePattern = /^\/list\/\d+$/;

const INDEX_URLS = ['/index.html', '/'];

const REGISTRATION_URL = '/registration';

const LOGIN_URL = '/login';


export function renderPage() {
  const { pathname: currentUrl } = window.location;
  
  //* блок под мобилу
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  if (INDEX_URLS.includes(currentUrl)) {
    renderLists();

    return;
  }

  if (listRoutePattern.test(currentUrl)) {
    renderList();

    return;
  }

  if (currentUrl === REGISTRATION_URL) {
    renderRegistration();
  }

  if (currentUrl === LOGIN_URL) {
    renderLogin();
  }

}

export function navigateToUrl(url) {
  window.history.pushState({}, url, window.location.origin + url);

  renderPage();
}