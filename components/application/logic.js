class ProductLogic {
  constructor() {
    this.Products = [];
  }
  addProduct(prd) {
    this.Products.push(prd);
    return this.Products;
  }
  getProducts() {
    return this.Products;
  }
}
