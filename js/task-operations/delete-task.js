function deleteTask() { // * здесь можно ParentNode  в одну строку записать, два нода один за одним. Или через .slosest()(тоже в одну строку)
  const target = this.parentNode; // TODO здесь тоже сделай деструктуризацию как и в чекТаск
  const parent = target.parentNode;

  parent.removeChild(target);
}

export default deleteTask;