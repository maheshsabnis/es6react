import React, { Component } from "react";

class ProductsFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProdId: 0,
      ProdName: "",
      Price: 0,
      CategoryName: "",
      Manufacturer: "",
      Categories: ["ECT", "ECL", "FOOD"],
      Manufacturers: ["MS", "LS", "TS"],
      Products: [
        {
          ProdId: 0,
          ProdName: "",
          Price: 0,
          CategoryName: "",
          Manufacturer: ""
        }
      ],
      headers: []
    };
    this.generateTableHeaders();
  }
  generateTableHeaders() {
    for (let c in this.state.Products[0]) {
      this.state.headers.push(c);
    }
  }

  handleChangeForAll(evt) {
    this.setState({ [evt.target.name]: evt.target.value }, this.getData);
  }
  getPrds(prd) {
    this.setState({ ProdId: prd.ProdId });
    this.setState({ ProdName: prd.ProdName });
    this.setState({ Price: prd.Price });
    this.setState({ CategoryName: prd.CategoryName });
    this.setState({ Manufacturer: prd.Manufacturer });
  }
  save(e) {
    e.preventDefault();
    // put data from textbox and list in Array
    // To set state for Array use following steps
    // 1. declare a temporary array based on actual state array
    let tempArray = this.state.Products.slice();
    // 2. Push data from state properties in this tempArray
    tempArray.push({
      ProdId: this.state.ProdId,
      ProdName: this.state.ProdName,
      Price: this.state.Price,
      CategoryName: this.state.CategoryName,
      Manufacturer: this.state.Manufacturer
    });
    // 3. Update the State Array using tempArray
    this.setState({ Products: tempArray }, () => {
      alert(JSON.stringify(this.state.Products));
    }); // copy
  }
  clear() {
    this.setState({ ProdId: 0 });
    this.setState({ ProdName: "" });
    this.setState({ Price: 0 });
    this.setState({ CategoryName: "" });
    this.setState({ Manufacturer: "" });
  }
  getData() {
    //alert(` ${this.state.CategoryName}`);
  }
  render() {
    return (
      <div className="container">
        <div className="container">
          <form name="frmProduct" onSubmit={this.save.bind(this)}>
            <div className="form-group">
              <label htmlFor="ProdId">Product Id</label>
              <input
                type="text"
                name="ProdId"
                required
                value={this.state.ProdId}
                className="form-control"
                onChange={this.handleChangeForAll.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ProdName">Product Name</label>
              <input
                type="text"
                name="ProdName"
                required
                value={this.state.ProdName}
                className="form-control"
                onChange={this.handleChangeForAll.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Price">Price</label>
              <input
                type="text"
                name="Price"
                required
                value={this.state.Price}
                className="form-control"
                onChange={this.handleChangeForAll.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="CategoryName">Category Name</label>
              <select
                name="CategoryName"
                className="form-control"
                value={this.state.CategoryName}
                onChange={this.handleChangeForAll.bind(this)}
              >
                {this.state.Categories.map((val, idx) => (
                  <Options key={idx} value={val} />
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Manufacturer">Manufacturer</label>
              <select
                name="Manufacturer"
                className="form-control"
                value={this.state.Manufacturer}
                onChange={this.handleChangeForAll.bind(this)}
              >
                {this.state.Manufacturers.map((val, idx) => (
                  <Options key={idx} value={val} />
                ))}
              </select>
            </div>
            <div className="form-group">
              <input
                type="button"
                onClick={this.clear.bind(this)}
                className="btn btn-default"
                value="New"
              />
              <input type="submit" className="btn btn-success" value="Save" />
            </div>
          </form>
        </div>
        <div className="container">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                {this.state.headers.map((h, i) => (
                  <TableHeader key={i} header={h} />
                ))}
              </tr>
            </thead>
            <tbody>
              {this.state.Products.map((prd, idx) => (
                <TableRow
                  key={idx}
                  row={prd}
                  callbackParent={this.getPrds.bind(this)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

class Options extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <option value={this.props.value}>{this.props.value}</option>;
  }
}

class TableHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <th>{this.props.header}</th>;
  }
}

class TableRow extends Component {
  constructor(props) {
    super(props);
  }
  onRowClick() {
    this.props.callbackParent(this.props.row);
  }
  render() {
    return (
      <tr onClick={this.onRowClick.bind(this)}>
        <td>{this.props.row.ProdId}</td>
        <td>{this.props.row.ProdName}</td>
        <td>{this.props.row.Price}</td>
        <td>{this.props.row.CategoryName}</td>
        <td>{this.props.row.Manufacturer}</td>
      </tr>
    );
  }
}

export default ProductsFormComponent;
