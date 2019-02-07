import React, { Component } from "react";

class ListProductsComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <td>Product Id</td>
              <td>Product Name</td>
            </tr>
          </thead>
          <tbody>
            {// logic to generate table rows based on data
            // that will be received from store
            this.props.listProductsreducer.map((v, idx) => (
              <TableRow key={idx} prod={v} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.prod.product.ProdId}</td>
        <td>{this.props.prod.product.ProdName}</td>
      </tr>
    );
  }
}

export default ListProductsComponent;
