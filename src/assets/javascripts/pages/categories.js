// categories.js
let categoriesPage = {
  id: 'categories',
  title: 'Categories',
  url: 'categories',
  element: document.querySelector('#categories'),
};

class Categories {
  static load() {
    ApplicationHelper.updateTitle(categoriesPage.title);
    ApplicationHelper.updateUrl(categoriesPage.id, categoriesPage.title, categoriesPage.url);
  }
}
