import storageService from "./storage-service.js";

class ListsList {
  constructor(lists) {
    this.lists = lists;
  }

  add(newList) {
    this.lists = [...this.lists, newList];
  }
}

const lists = storageService.get('lists');

const listsList = new ListsList(lists || []);

export default listsList;