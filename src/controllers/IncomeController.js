class IncomeController {
  constructor() {
    let inputDescription = document.querySelector('#income-description');
    let inputAmount = document.querySelector('#income-amount');
    let inputDueDate = document.querySelector('#income-due-date');
    let inputStatus = document.querySelector('#income-status');
    let inputCategory = document.querySelector('#income-category');
    let inputAccount = document.querySelector('#income-account');
  }

  new(event) {
    event.preventDefault();
  }
}

let incomeController = new IncomeController();
