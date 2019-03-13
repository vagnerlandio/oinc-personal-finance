// transactions.js
let transactionsPage = {
  id: 'transactions',
  title: 'Transactions',
  url: 'transactions',
  element: document.querySelector('#transactions'),
};

class Transactions {
  static load() {
    ApplicationHelper.updateTitle(transactionsPage.title);
    ApplicationHelper.updateUrl(transactionsPage.id, transactionsPage.title, transactionsPage.url);
    ApplicationHelper.updateContent(transactionsPage.element, event);
  }
}
