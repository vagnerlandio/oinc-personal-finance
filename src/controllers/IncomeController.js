class IncomeController {
  new(event) {
    event.preventDefault();
    let inputDescription = $('#income-description');
    let inputAmount = $('#income-amount');
    let inputDueDate = $('#income-due-date');
    let inputStatus = $('#income-status');
    let inputCategory = $('#income-category');
    let inputAccount = $('#income-account');
  }
}

let incomeController = new IncomeController();
