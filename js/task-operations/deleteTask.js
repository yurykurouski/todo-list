function deleteTask() { // * здесь можно ParentNode  в одну строку записать, два нода один за одним. Или через .slosest()(тоже в одну строку)
  const item = this.parentNode;
  const parent = item.parentNode;

  parent.removeChild(item);
}

export default deleteTask;