class AccountController {
  new(event) {
    event.preventDefault();
    let inputDescription = $('#account-description');
    let inputOpeningBalance = $('#account-opening-balance');
    let inputCategory = $('#account-category');
  }
}

let accountController = new AccountController();
