class ExpenseController {
  constructor() {
    let inputDescription = document.querySelector('#expense-description');
    let inputAmount = document.querySelector('#expense-amount');
    let inputDueDate = document.querySelector('#expense-due-date');
    let inputStatus = document.querySelector('#expense-status');
    let inputCategory = document.querySelector('#expense-category');
    let inputAccount = document.querySelector('#expense-account');
  }

  new(event) {
    event.preventDefault();
  }
}

let expenseController = new ExpenseController();
