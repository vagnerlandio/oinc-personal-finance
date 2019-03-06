// transactions.js
let transactionsPage = {
  id: 'transactions',
  title: 'Transactions',
  url: 'transactions',
  element: document.querySelector('#about'),
};

class Transactions {
  static load() {
    ApplicationHelper.updateTitle(transactionsPage.title);
    ApplicationHelper.updateUrl(transactionsPage.id, transactionsPage.title, transactionsPage.url);
  }
}
