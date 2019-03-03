class Transfer {
  constructor(description = '', amount = 0.00, dueDate = '', status = false, origin = '', destination = '') {
    this.description = description;
    this.amount = amount;
    this.dueDate = dueDate;
    this.status = status;
    this.origin = origin;
    this.destination = destination;
  }
}
