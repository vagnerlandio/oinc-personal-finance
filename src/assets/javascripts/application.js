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
