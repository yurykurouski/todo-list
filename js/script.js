import renderLists from './render/render-lists.js';
import renderList from './render/render-list.js';

const currentUrl = window.location.pathname;

if (currentUrl === '/') {
  renderLists();
}

if (currentUrl === '/list/1') {
  renderList();
}


//* блок под мобилу
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('popstate', () => {
  if (window.location.pathname === '/list/1') {
    renderList();
  }

  if (window.location.pathname === '/') {
    renderLists();
  }
});

/*! ДЗ: 1)Написать функционал удаления списка + сделать так, что бы все таски удаленного списка удалялись из Локал стораж(методы в классах листа и тасков)
    2)Написать функционал редактирования списка */