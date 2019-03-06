// accounts.js
let accountsPage = {
  id: 'accounts',
  title: 'Accounts',
  url: 'accounts',
  element: document.querySelector('#accounts'),
};

class Accounts {
  static load() {
    ApplicationHelper.updateTitle(accountsPage.title);
    ApplicationHelper.updateUrl(accountsPage.id, accountsPage.title, accountsPage.url);
  }
}
