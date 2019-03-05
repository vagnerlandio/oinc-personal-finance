class TransferController {
  constructor() {
    let inputDescription = document.querySelector('#transfer-description');
    let inputAmount = document.querySelector('#transfer-amount');
    let inputDueDate = document.querySelector('#transfer-due-date');
    let inputStatus = document.querySelector('#transfer-status');
    let inputOrigin = document.querySelector('#transfer-origin');
    let inputDestination = document.querySelector('#transfer-destination');
  }

  new(event) {
    event.preventDefault();
  }
}

let transferController = new TransferController();
