import React, { Component } from "react";
class ContainerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.isChild1) {
      return <Child1 />;
    }
    return <Child2 />;
  }
}

class Child1 extends Component {
  render() {
    return (
      <div>
        <h2>I am Child 1</h2>
      </div>
    );
  }
}

class Child2 extends Component {
  render() {
    return (
      <div>
        <h2>I am Child 2</h2>
      </div>
    );
  }
}
export default ContainerComponent;
