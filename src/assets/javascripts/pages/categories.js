// categories.js
let categoriesPage = {
  title: 'Categories',
  element: document.querySelector('#categories'),
};

class Categories {
  static load() {
    ApplicationHelper.updateTitle(categoriesPage.title);
  }
}
