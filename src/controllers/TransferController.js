class TransferController {
  constructor() {
    this.inputDescription = document.querySelector('#transfer-description');
    this.inputAmount = document.querySelector('#transfer-amount');
    this.inputDueDate = document.querySelector('#transfer-due-date');
    this.inputStatus = document.querySelector('#transfer-status');
    this.inputOrigin = document.querySelector('#transfer-origin');
    this.inputDestination = document.querySelector('#transfer-destination');
  }

  new(event) {
    event.preventDefault();

    let transfer = new Transfer(
      this.inputDescription,
      this.inputAmount,
      this.inputDueDate,
      this.inputStatus,
      this.inputOrigin,
      this.inputDestination
    );

    M.toast({ html: 'Transfer created with successus!' });
  }
}

let transferController = new TransferController();
