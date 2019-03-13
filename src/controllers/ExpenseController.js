class ExpenseController {
  constructor() {
    this.inputDescription = document.querySelector('#expense-description');
    this.inputAmount = document.querySelector('#expense-amount');
    this.inputDueDate = document.querySelector('#expense-due-date');
    this.inputStatus = document.querySelector('#expense-status');
    this.inputCategory = document.querySelector('#expense-category');
    this.inputAccount = document.querySelector('#expense-account');
  }

  new(event) {
    event.preventDefault();

    let expense = new Expense(
      this.inputDescription,
      this.inputAmount,
      this.inputDueDate,
      this.inputStatus,
      this.inputCategory,
      this.inputAccount
    );

    M.toast({ html: 'Expense created with successus!' });
  }
}

let expenseController = new ExpenseController();
