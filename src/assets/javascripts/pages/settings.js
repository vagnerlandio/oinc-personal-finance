// settings.js
let settingsPage = {
  title: 'Settings',
  element: document.querySelector('#settings'),
};

class Settings {
  static load() {
    ApplicationHelper.updateTitle(settingsPage.title);
  }
}
