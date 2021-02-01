import storageService from './storage-service.js';

class ListsList {
  constructor(lists) {
    this.lists = lists;
  }

  add(newList) {
    this.lists = [...this.lists, newList];
  }

  delete(id) {
    this.lists = this.lists.filter(list => list.id !== id);
  }

  edit(id, name) {
    this.lists = this.lists.map((list) => {
      if (list.id === id) {
        return {
          ...list,
          name
        };
      }
      return list;
    });
  }

  getListById(id) {
    return this.lists.find(list => list.id === id);
  }
}

const lists = JSON.parse(storageService.get('lists'));

const listsList = new ListsList(lists ? lists : []);

export default listsList;
