import React, { Component } from "react";
class TableRowComponent extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.rec.id}</td>
        <td>{this.props.rec.name}</td>
      </tr>
    );
  }
}

export default TableRowComponent;
