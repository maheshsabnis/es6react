// 1. The Reducer file. This will do following
// a. importing action type
import { ADD_PRODUCT } from "./../actions/actions.js";
// b. defining the combineReducer, this will aggrigate all
// reducers. Note: Each reducer is JavaScript "pure function"
import { combineReducers, applyMiddleware } from "redux";

// 2. defining reducer functions.
// each function accept "state" and "action" and
// state :--> The Current state of the store, i.e. monitored
// by the reducer
// action :--> The action dispatched from View
// returns state based on action
// in following function, is the action type dispatched from
// view is 'ADD_PRODUCT', then the received product will be
// returned in state, else the default state may be returned
export function addProductReducer(state, action) {
  console.log(`In Add Reducer ${JSON.stringify(state)}`);
  switch (action.type) {
    case ADD_PRODUCT:
      // some other logic that reducer wants to execute
      return {
        product: action.product
      };
    default: {
      return state;
    }
  }
}

// 3. The other reducer, this will return the state from store
// that contains all added products
// it should accept the state array, that represents
// data from store and action. The state=[], menas the store
// in which state is stored is "immutable"
export function listProductsreducer(state = [], action) {
  console.log(`In List Reducer ${JSON.stringify(state)}`);
  switch (action.type) {
    case ADD_PRODUCT:
      console.log(`In List Type Reducer ${JSON.stringify(state)}`);
      // return the spread operator that aggrigates the products
      // in store and internally calls the addProductReducer() function
      return [...state, addProductReducer(undefined, action)];
    default:
      return state;
  }
}

// 4. Define the Combine reducer that will aggrigate
// all reducers in it. In this case since  listProductReducer
// calls addProductReducer, the combineReducers() aggrigates
// only listProductsreducer
let productReducers = combineReducers({
  listProductsreducer
  // applyMiddleware
});
export default productReducers;
