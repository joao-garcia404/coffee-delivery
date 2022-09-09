export enum ActionTypes {
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART",
}

export function addToCart(productId: number) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      productId,
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
