class TransferController {
  new(event) {
    event.preventDefault();
    let inputDescription = $('#transfer-description');
    let inputAmount = $('#transfer-amount');
    let inputDueDate = $('#transfer-due-date');
    let inputStatus = $('#transfer-status');
    let inputOrigin = $('#transfer-origin');
    let inputDestination = $('#transfer-destination');
  }
}

let transferController = new TransferController();
