import React, { Component } from "react";
import TableRowComponent from "./tableRowComponent.jsx";

class ItemListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }
  render() {
    return (
      <div className="container">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((v, idx) => (
              <TableRowComponent key={idx} rowData={v} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ItemListComponent;
