// overview.js
let overviewPage = {
  title: 'Overview',
  element: document.querySelector('#overview'),
};

class Overview {
  static load() {
    ApplicationHelper.updateTitle(overviewPage.title);
  }
}
