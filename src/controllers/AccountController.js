class AccountController {
  constructor() {
    this.inputDescription = document.querySelector('#account-description');
    this.inputOpeningBalance = document.querySelector('#account-opening-balance');
    this.inputCategory = document.querySelector('#account-category');
  }

  new(event) {
    event.preventDefault();

    let account = new Account(
      this.inputDescription.value,
      this.inputOpeningBalance.value,
      this.inputCategory.value
    );
  }
}

let accountController = new AccountController();
