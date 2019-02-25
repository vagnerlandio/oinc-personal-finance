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

let overview = document.querySelector('#overview');
let accounts = document.querySelector('#accounts');
let transactions = document.querySelector('#transactions');
let categories = document.querySelector('#categories');
let settings = document.querySelector('#settings');
let about = document.querySelector('#about');

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
  window.history.pushState(
    // State
    {id: ''},
    // Page title
    'title',
    // Url
    'about'
  );
});
