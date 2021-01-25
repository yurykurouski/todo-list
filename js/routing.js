import renderLists from './render/render-lists.js';
import renderList from './render/render-list.js';

const listRoutePattern = /^\/list\/\d+$/;

const INDEX_URLS = ['_', '/index.html'];

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
}

export function navigateToUrl(url) {
  window.history.pushState({}, url, window.location.origin + url);

  renderPage();
}