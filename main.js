// 1. Import React OM
import React from "react";
// 2. Import ReactDOM for rendering React Component in DOM
import ReactDom from "react-dom";

// import createStore from redux package
// this will be used to create "store" at application level
import { createStore } from "redux";

// import Provider. This is be used to maintain application state
import { Provider } from "react-redux";
// import reducer from reducers.js
// the reducer will be the default instance of "combineReducers"
import reducer from "./reduxapp/reducers/reducer.js";
// 3. Importing Boosttrap (or any other CSS/style/UI Kits)
import "!style!css!bootstrap/dist/css/bootstrap.min.css";
// 4. Import all Necessary components
import SimpleComponent from "./components/simpleComponent.jsx";
import StateFullComponent from "./components/statefullComponent.jsx";
import ProductsComponent from "./components/application/productsComponent.jsx";
import ProductsFormComponent from "./components/application/productsFormComponent.jsx";
import ServiceComponent from "./components/serviceComponent.jsx";
import ContainerComponent from "./components/conditionalComponent.jsx";
import CompanyListComponent from "./components/hoc/companyListComponent.jsx";
import ItemListComponent from "./components/hoc/itemsListComponent.jsx";

import MainReduxComponent from "./reduxapp/maincomponent.jsx";

import HoC from "./components/hoc/hocComponent.jsx";

// let cList = [{ id: 101, name: "Microsoft" }, { id: 102, name: "Oracle" }];
// let iList = [{ id: 101, name: "Laptop" }, { id: 102, name: "Desktop" }];

// let CComponent = HoC(CompanyListComponent, cList);
// let IComponent = HoC(CompanyListComponent, cList);

// let message = "This is Statefull Component";

// create a store using createStore() method and pass reducers to it
let store = createStore(reducer);

// 5. Render the Component
// a. provider contains store.
// b. stored is provided to MainReduxComponent
// c. MainReduxComponent should use the store for update/notification
// ReactDom.render(
//   <Provider store={store}>
//     <MainReduxComponent />
//   </Provider>,
//   document.getElementById("app")
// );
ReactDom.render(<StateFullComponent />, document.getElementById("app"));
