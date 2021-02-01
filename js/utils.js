export function getId(elemnt) {
  return parseInt(elemnt.id);
}

export function generateId(tasks) { // *получаем массив со всеми идентификаторами таска
  const ids = tasks.map((task) => {
    return task.id;
  });

  if (!ids.length) { // если пустой массив начинаем нумерацию с единицы
    return 1;
  }

  const maxId = Math.max(...ids); // находим максимальный айди

  return maxId + 1; //возвращаем норвый, который будет польше максимального на единицу
}

export function getListIdByUrl() {
  const currentUrl = window.location.pathname;

  const splittedCurrentUrl = currentUrl.split('/');

  return parseInt(splittedCurrentUrl[splittedCurrentUrl.length - 1], 10);
}

export function showErrors(errors) {
  for (let key in errors) {
    const span = document.querySelector(`.${key}`);

    if (errors[key].length > 0) {

      const errorStr = errors[key].join('<br>');

      span.style.display = 'inline';
      span.innerHTML = errorStr;
    } else {
      span.innerHTML = '';
    }
  }
}

export function checkIfHasErrors(errors) {
  return Object.keys(errors).some(key => errors[key].length > 0);
}