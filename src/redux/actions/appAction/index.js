
import store from '../../index';
function dispatch(action) {
  store.dispatch(action);
}


export function addPrduct(param) {
  console.log('param',param)
  return {
    type: 'ADD_Product',
    payload: param,
  };
}


export const deleteProduct = (productId) => {
  return {
    type: "DELETE_PRODUCT",
    payload: productId
  };
};