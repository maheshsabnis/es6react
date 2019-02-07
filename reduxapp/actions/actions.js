// 1. The file contains action type and action creators
// action type is exportable constant in must be defined in Upper case

// represents the action to add new Product
export const ADD_PRODUCT = "ADD_PRODUCT";

// 2. The Action Creator Method.
// Note: It can be present in separate file.
// The Action Create is a function, which may contain business
// logic or external calls (AJAX/SOCKET --> all PROMISE calls)
// this method accepts payload, the data received(or dispatched)
// from View. This method returns JSON object, that contains
// following schema
// return {type:<ACTION_TYPE>,payload object}
// the returned object will be used by reducer function to update store
export function addProduct(product) {
  console.log(`in action ${JSON.stringify(product)}`);
  // some logic to be executed on 'product' parameter
  return {
    type: ADD_PRODUCT,
    product
  };
}
