class ProductService {
  get() {
    let resp;
    resp = fetch("https://apiserviceapisync.azurewebsites.net/api/Products");
    return resp;
  }
  post(prd) {
    let resp;
    resp = fetch("https://apiserviceapisync.azurewebsites.net/api/Products", {
      method: "POST", //PUT,DELETE
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(prd)
    });
    return resp;
  }
}

export default ProductService;
