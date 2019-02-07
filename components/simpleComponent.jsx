// 1. use react for importing React and Component
import React, { Component } from "react";

// 2. Creating Component Class that derived from Component class

class SimpleComponent extends Component {
  // 3. the render() method returns HTML. This will be rendered in <div></div>
  render() {
    return (
      <div>
        <h2>Hello React!!!!!</h2>
        <br />
        <MessageComponent />
      </div>
    );
  }
}

class MessageComponent extends Component {
  render() {
    return (
      <div>
        <h3>I am Message Component</h3>
      </div>
    );
  }
}

// 4. Export the Component (Only One Export Per .jsx file is allowed)
// making the component available for other .jsx files
export default SimpleComponent;
