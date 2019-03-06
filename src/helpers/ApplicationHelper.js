class ApplicationHelper {
  constructor() {
    throw new Error(this.constructor.name + ' can\'t be instanced');
  }

  static updateTitle(title) {
    document.querySelector('.brand-logo').text = title;
  }
}
