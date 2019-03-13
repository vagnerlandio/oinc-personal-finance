class CategoryController {
  new(event) {
    event.preventDefault();

    M.toast({ html: 'Category created with successus!' });
  }
}

let categoryController = new CategoryController();
