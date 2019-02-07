import React, { Component } from "react";

class StateFullComponent extends Component {
  // 1. "props" represents data received from parent of the component
  constructor(props) {
    super(props); // call base class
    // 2. The state Property used for defining Model-Data local ton
    // component
    this.state = {
      firstName: "",
      middleName: "",
      lastName: "",
      fullName: "",
      receivedValueFromParent: this.props.data
    };
  }
  // the method to listen OnChange Event for input element
  handlefnameOnChange(evt) {
    // update the state
    this.setState({ firstName: evt.target.value });
  }
  handlemnameOnChange(evt) {
    // update the state
    this.setState({ middleName: evt.target.value });
  }
  handlelnameOnChange(evt) {
    // update the state
    this.setState({ lastName: evt.target.value });
  }
  concatData() {
    let finalName = `${this.state.firstName} ${this.state.middleName} ${
      this.state.lastName
    }`;
    this.setState({ fullName: finalName });
  }
  render() {
    return (
      <div className="container">
        <h2>{this.props.data}</h2>
        First Name
        <input
          type="text"
          value={this.state.firstName}
          className="form-control"
          onChange={this.handlefnameOnChange.bind(this)}
        />
        <br />
        Middle Name
        <input
          type="text"
          value={this.state.middleName}
          className="form-control"
          onChange={this.handlemnameOnChange.bind(this)}
        />
        <br />
        Last Name
        <input
          type="text"
          value={this.state.lastName}
          className="form-control"
          onChange={this.handlelnameOnChange.bind(this)}
        />
        <br />
        Full Name
        <input
          type="text"
          value={this.state.fullName}
          className="form-control"
          readOnly
        />
        <br />
        <input
          type="button"
          value="Save"
          onClick={this.concatData.bind(this)}
          className="btn btn-success"
        />
        <hr />
        <MessageComponent FullName={this.state.fullName} />
      </div>
    );
  }
}

class MessageComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.FullName}</h2>
      </div>
    );
  }
}

export default StateFullComponent;
