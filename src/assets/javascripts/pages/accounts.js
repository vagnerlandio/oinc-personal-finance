// accounts.js
let accountsPage = {
  title: 'Accounts',
  element: document.querySelector('#accounts'),
};

class Accounts {
  static load() {
    ApplicationHelper.updateTitle(accountsPage.title);
  }
}
