import React, { Component } from "react";

// the method accepts (encapsulates) the way using which the input component
// (DataComponent) will be rendered based on data passed to it.
// the DataComponent will have 'data' as mandatory property and it may have
// otther additional properties so aggrigate them in {...this.props}
export default function HoC(DataComponent, data) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data
      };
    }
    render() {
      return <DataComponent data={this.state.data} {...this.props} />;
    }
  };
}
