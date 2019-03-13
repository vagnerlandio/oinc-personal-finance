class ApplicationHelper {
  constructor() {
    throw new Error(this.constructor.name + ' can\'t be instanced');
  }

  static updateTitle(title) {
    document.querySelector('.brand-logo').text = title;
  }

  static updateUrl(id, title, url) {
    window.history.pushState(
      { id: id },
      title,
      url
    );
  }

  static updateContent(element, event) {
    // Add class 'hide' in all pages
    pages.map(page => page.classList.add('hide'));

    // Remove class 'hide' in the current page
    element.classList.remove('hide');

    // Remove class 'active' from all links in the sidenav
    document.querySelector('li#overview-link').classList.remove('active');
    document.querySelector('li#accounts-link').classList.remove('active');
    document.querySelector('li#transactions-link').classList.remove('active');
    document.querySelector('li#categories-link').classList.remove('active');
    document.querySelector('li#settings-link').classList.remove('active');
    document.querySelector('li#about-link').classList.remove('active');

    // Add class 'active' in the sidenav link of the current page
    event.target.parentNode.classList.add('active');

  }
}
