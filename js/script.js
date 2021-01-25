import renderLists from './render/render-lists.js';
import renderList from './render/render-list.js';

const currentUrl = window.location.pathname;

if (currentUrl === '/' || currentUrl === 'index.html') {
  renderLists();
}

if (currentUrl === '/list/1') {
  renderList();
}

window.addEventListener('popstate', () => {
  if (window.location.pathname === '/list/1') {
    renderList();
  }

  if (window.location.pathname === '/' || currentUrl === 'index.html') {
    renderLists();
  }
});

//* блок под мобилу
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});