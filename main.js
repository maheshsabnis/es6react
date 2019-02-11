// 1. Import React OM
import React from "react";
// 2. Import ReactDOM for rendering React Component in DOM
import ReactDom from "react-dom";
import "!style!css!bootstrap/dist/css/bootstrap.min.css";
import SimpleComponent from "./components/simpleComponent.jsx";
import ProductComponent from "./components/application/productComponent.jsx";
import ProductAppComponent from "./components/applicationComponent.jsx";
import ProductUIComponent from "./components/application/productUIComponent.jsx";
import MyComponent from "./components/mycomponent.jsx";

import CompanyListComponent from "./hoc/companyList.jsx";
import StockListComponent from "./hoc/stockList.jsx";
import HoC from "./hoc/hocComponent.jsx";
let companyData = [{ id: 101, name: "Microsoft" }, { id: 102, name: "IBM" }];
let stockData = [{ id: 201, name: "BSE" }, { id: 202, name: "NSE" }];

let CompanyDataComponent = HoC(CompanyListComponent, companyData);
let StockListDataComponent = HoC(StockListComponent, stockData);

ReactDom.render(<StockListDataComponent />, document.getElementById("app"));
