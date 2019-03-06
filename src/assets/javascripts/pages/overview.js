// overview.js
let overviewPage = {
  id: 'overview',
  title: 'Overview',
  url: '/',
  element: document.querySelector('#overview'),
};

class Overview {
  static load() {
    ApplicationHelper.updateTitle(overviewPage.title);
    ApplicationHelper.updateUrl(overviewPage.id, overviewPage.title, overviewPage.url);
  }
}
