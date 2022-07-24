/** @format */

import { ActionTypes } from "../constant/action-type";

export const setProduct = (product) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: product,
  };
};
export const selectedProducts = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};
export const RemovedSelectedProducts = (products) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    payload: products,
  };
};
