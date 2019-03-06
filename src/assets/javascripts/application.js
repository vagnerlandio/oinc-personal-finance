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

let overview = document.querySelector('#overview-link');
let accounts = document.querySelector('#accounts-link');
let transactions = document.querySelector('#transactions-link');
let categories = document.querySelector('#categories-link');
let settings = document.querySelector('#settings-link');
// let about = document.querySelector('#about-link');

overview.addEventListener('click', function() {
  window.history.pushState(
    // State
    {id: ''},
    // Page title
    'title',
    // Url
    '/'
  );
});
accounts.addEventListener('click', function() {
  window.history.pushState(
    // State
    {id: ''},
    // Page title
    'title',
    // Url
    'accounts'
  );
});
transactions.addEventListener('click', function() {
  window.history.pushState(
    // State
    {id: ''},
    // Page title
    'title',
    // Url
    'transactions'
  );
});
categories.addEventListener('click', function() {
  window.history.pushState(
    // State
    {id: ''},
    // Page title
    'title',
    // Url
    'categories'
  );
});
settings.addEventListener('click', function() {
  window.history.pushState(
    // State
    {id: ''},
    // Page title
    'title',
    // Url
    'settings'
  );
});
about.addEventListener('click', function() {
  About.load();
  window.history.pushState(
    // State
    {id: ''},
    // Page title
    'title',
    // Url
    'about'
  );
});
