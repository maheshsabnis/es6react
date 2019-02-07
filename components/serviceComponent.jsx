import React, { Component } from "react";
import ProductService from "./../services/service.js";
class ServiceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };

    this.serv = new ProductService();
  }
  // 1 method will be called immediately after render() method
  componentDidMount() {
    // 2. subscribe to the ajax call, then get the response
    // and then use it for UI
    this.serv
      .get() // subscribe
      .then(resp => resp.json()) // receive data
      .then(rData => {
        this.setState({ data: rData }); // process data for UI
      })
      .catch(error => {
        console.log(`Error Occured ${error.status}`);
      });
  }
  save() {
    let prd = {
      ProdId: 450001,
      ProdName: "Data Storage",
      Price: 100000,
      CategoryName: "ECT",
      Manufacturer: "MS"
    };

    this.serv
      .post(prd) // subscribe
      .then(resp => resp.json()) // receive data
      .then(rData => {
        this.setState({ data: rData }); // process data  ra UI
      })
      .catch(error => {
        console.log(`Error Occured ${error.status}`);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="container">{JSON.stringify(this.state.data)}</div>
        <hr />
        <input
          type="button"
          value="save"
          onClick={this.save.bind(this)}
          className="btn btn-success"
        />
      </div>
    );
  }
}

export default ServiceComponent;
