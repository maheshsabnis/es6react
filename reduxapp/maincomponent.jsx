import React, { Component } from "react";
// 1. import all components
import AddProductComponent from "./appcomponents/addProductComponent.jsx";
import ListProductsComponent from "./appcomponents/listProductComponent.jsx";

// 2. import action from action.js. The dispatch request
// for this action will be initiated by AddProductComponent
import { addProduct } from "./actions/actions.js";

// 2a. import "connect" from react-redux to connect store
// from provider to current component and all components
// used by current component "AddProductComponent"
// "ListProductsComponent"
import { connect } from "react-redux";
// 3. This component is a main component for React-Redux app
// this must manage the communication across all components
// those who wants to use Application state from "store"
class MainReduxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // 4. define a de-structured (ES6 syntax for creating JSON object)
    // props that will contain
    // properties for dispatching action [dispatch]
    // and getting data [visibleproducts]
    const { dispatch, visibleproducts } = this.props;
    // 4a. let the AddProductComponent dispatch the AddProductClick props

    return (
      <div className="container">
        <AddProductComponent
          AddProductClick={product => dispatch(addProduct(product))}
        />
        <hr />
        <ListProductsComponent listProductsreducer={visibleproducts} />
      </div>
    );
  }
}

// 5. define a function, that will accept the state from the reducer
// and will make this state available to the current component

function mapStateToProps(state) {
  console.log(`in action map to state ${JSON.stringify(state)}`);
  return {
    visibleproducts: state.listProductsreducer
  };
}

// 6. connect the "mapStateToProps()" method with the current component
// so that the store updates after action dispatch will be notified to
// other components

export default connect(mapStateToProps)(MainReduxComponent);

//export default MainReduxComponent;
