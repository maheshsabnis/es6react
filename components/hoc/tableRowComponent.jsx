import React, { Component } from "react";

class TableRowComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowData: this.props.rowData
    };
  }
  render() {
    return (
      <tr>
        <td>{this.state.rowData.id}</td>
        <td>{this.state.rowData.name}</td>
      </tr>
    );
  }
}

export default TableRowComponent;
