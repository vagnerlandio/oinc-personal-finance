// transactions.js
let transactionsPage = {
  title: 'Transactions',
  element: document.querySelector('#about'),
};

class Transactions {
  static load() {
    ApplicationHelper.updateTitle(transactionsPage.title);
  }
}
