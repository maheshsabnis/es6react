import React, { Component } from "react";
import TableRowComponent from "./tableRowComponent.jsx";
class StockListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((v, i) => (
            <TableRowComponent key={i} rec={v} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default StockListComponent;
