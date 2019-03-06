// settings.js
let settingsPage = {
  id: 'settings',
  title: 'Settings',
  url: 'settings',
  element: document.querySelector('#settings'),
};

class Settings {
  static load() {
    ApplicationHelper.updateTitle(settingsPage.title);
    ApplicationHelper.updateUrl(settingsPage.id, settingsPage.title, settingsPage.url);
  }
}
