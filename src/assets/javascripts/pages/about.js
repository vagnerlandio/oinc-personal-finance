// about.js
let aboutPage = {
  id: 'about',
  title: 'About',
  url: '/',
  element: document.querySelector('#about'),
};

class About {
  static load() {
    ApplicationHelper.updateTitle(aboutPage.title);
    ApplicationHelper.updateUrl(aboutPage.id, aboutPage.title, aboutPage.url);
  }
}
