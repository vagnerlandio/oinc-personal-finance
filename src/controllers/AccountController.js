class AccountController {
  constructor() {
    let inputDescription = document.querySelector('#account-description');
    let inputOpeningBalance = document.querySelector('#account-opening-balance');
    let inputCategory = document.querySelector('#account-category');
  }

  new(event) {
    event.preventDefault();
  }
}

let accountController = new AccountController();
