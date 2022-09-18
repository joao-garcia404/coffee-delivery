import { AddToCartData } from "../../contexts/CartContext";

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART",
}

export function addToCart(data: AddToCartData) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      data,
    },
  };
}

export function removeFromCart(productId: number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      productId,
    },
  };
}
