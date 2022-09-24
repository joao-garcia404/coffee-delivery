import { AddToCartData } from "../../contexts/CartContext";

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
}

export function addToCart(data: AddToCartData) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      data,
    },
  };
}

export function removeFromCart(productId: number, all?: boolean) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      productId,
      all,
    },
  };
}

export function clearCart() {
  return {
    type: ActionTypes.CLEAR_CART,
  };
}
