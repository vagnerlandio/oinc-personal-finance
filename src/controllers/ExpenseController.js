class ExpenseController {
  new(event) {
    event.preventDefault();
    let inputDescription = $('#expense-description');
    let inputAmount = $('#expense-amount');
    let inputDueDate = $('#expense-due-date');
    let inputStatus = $('#expense-status');
    let inputCategory = $('#expense-category');
    let inputAccount = $('#expense-account');
  }
}

let expenseController = new ExpenseController();
