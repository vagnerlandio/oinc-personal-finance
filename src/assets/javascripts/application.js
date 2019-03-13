document.addEventListener('DOMContentLoaded', function() {
  let sidenavs = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenavs, {});
});

let sidenavLinks = document.querySelectorAll('#sidenav > li > a');
sidenavLinks.forEach(function(elem) {
  elem.addEventListener('click', function(event) {
    event.preventDefault();
  });
});

const pages = [
  aboutPage.element,
  accountsPage.element,
  categoriesPage.element,
  overviewPage.element,
  settingsPage.element,
  transactionsPage.element,
];
