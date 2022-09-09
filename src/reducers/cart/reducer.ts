import { produce } from "immer";

import { ActionTypes } from "./actions";

interface CoffeeCart {
  id: number;
  quantity: number;
}

export function cartReducer(state: CoffeeCart[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART: {
      const productAlreadyAtTheCart = state.findIndex(
        (item) => item.id === action.payload.productId,
      );

      if (productAlreadyAtTheCart < 0) {
        return produce(state, (draft) => {
          draft.push({ id: action.payload.productId, quantity: 1 });
        });
      }

      return produce(state, (draft) => {
        draft[productAlreadyAtTheCart].quantity++;
      });
    }

    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      const productIndex = state.findIndex(
        (item) => item.id == action.payload.productId,
      );

      if (productIndex > -1) {
        return produce(state, (draft) => {
          draft[productIndex].quantity > 0
            ? draft[productIndex].quantity--
            : delete draft[productIndex];
        });
      }

      return state;
    }

    default:
      return state;
  }
}
