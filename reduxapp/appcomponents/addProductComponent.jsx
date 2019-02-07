import React, { Component } from "react";

class AddProductComponent extends Component {
  constructor(props) {
    super(props);
  }
  // read data from UI using "refs". The "ref" and "refs" are properties
  // of Component class
  save() {
    // 1. define local scope object
    let product = {};
    // 2. set data for the object from values received from UI
    product.ProdId = this.refs.ProdId.value;
    product.ProdName = this.refs.ProdName.value;
    // 3. Define a props function type that will listen to
    // the event so that it can be
    // dispatched from view (THE MOST IMPORTANT)
    this.props.AddProductClick(product);
    this.refs.ProdId.value = "";
    this.refs.ProdName.value = "";
  }
  // clear all inputs
  clear() {
    this.refs.ProdId.value = "";
    this.refs.ProdName.value = "";
  }
  render() {
    return (
      <div className="container">
        <div className="form-group">
          <label htmlFor="ProdId">Product Id</label>
          <input type="text" ref="ProdId" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="ProdName">Product Name</label>
          <input type="text" ref="ProdName" className="form-control" />
        </div>
        <div className="form-group">
          <input
            type="button"
            value="New"
            onClick={this.clear.bind(this)}
            className="btn btn-default"
          />
          <input
            type="button"
            value="Save"
            onClick={this.save.bind(this)}
            className="btn btn-success"
          />
        </div>
      </div>
    );
  }
}

export default AddProductComponent;
