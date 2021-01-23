export function getTaskId(elemnt) {
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