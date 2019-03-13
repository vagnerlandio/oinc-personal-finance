// about.js
let aboutPage = {
  id: 'about',
  title: 'About',
  url: 'about',
  element: document.querySelector('#about'),
};

class About {
  static load(event) {
    ApplicationHelper.updateTitle(aboutPage.title);
    ApplicationHelper.updateUrl(aboutPage.id, aboutPage.title, aboutPage.url);
    ApplicationHelper.updateContent(aboutPage.element, event);
  }
}
