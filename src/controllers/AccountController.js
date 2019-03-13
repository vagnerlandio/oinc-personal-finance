class AccountController {
  constructor() {
    this.inputDescription = document.querySelector('#account-description');
    this.inputOpeningBalance = document.querySelector('#account-opening-balance');
    this.inputCategory = document.querySelector('#account-category');
    this._toast = new Toast();
  }

  new(event) {
    event.preventDefault();

    let account = new Account(
      this.inputDescription.value,
      this.inputOpeningBalance.value,
      this.inputCategory.value
    );

    M.toast({ html: 'Account created with successus!' });
  }
}

let accountController = new AccountController();
