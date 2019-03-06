// about.js
let aboutPage = {
  title: 'About',
  element: document.querySelector('#about'),
};

class About {
  static load() {
    ApplicationHelper.updateTitle(aboutPage.title);
  }
}
