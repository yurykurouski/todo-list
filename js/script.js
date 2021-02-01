import currentUser from './current-user.js';
import { renderPage } from './routing.js';

renderPage();

window.addEventListener('popstate', () => {
  renderPage();
});