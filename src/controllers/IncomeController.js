class IncomeController {
  constructor() {
    this.inputDescription = document.querySelector('#income-description');
    this.inputAmount = document.querySelector('#income-amount');
    this.inputDueDate = document.querySelector('#income-due-date');
    this.inputStatus = document.querySelector('#income-status');
    this.inputCategory = document.querySelector('#income-category');
    this.inputAccount = document.querySelector('#income-account');
  }

  new(event) {
    event.preventDefault();
  }
}

let incomeController = new IncomeController();
