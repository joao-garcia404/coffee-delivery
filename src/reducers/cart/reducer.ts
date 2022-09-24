import { produce } from "immer";

import { ActionTypes } from "./actions";

interface CoffeeCart {
  id: number;
  quantity: number;
  unitPrice: number;
}

export function cartReducer(state: CoffeeCart[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART: {
      const { coffeeId, price } = action.payload.data;

      const productAlreadyAtTheCart = state.findIndex(
        (item) => item.id === action.payload.data.coffeeId,
      );

      if (productAlreadyAtTheCart < 0) {
        return produce(state, (draft) => {
          draft.push({
            id: coffeeId,
            quantity: 1,
            unitPrice: price,
          });
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
          draft[productIndex].quantity > 0 && draft[productIndex].quantity--;
        });
      }

      return state;
    }

    case ActionTypes.CLEAR_CART: {
      return produce(state, (draft) => {
        draft.forEach(() => {
          draft.shift();
          draft.pop();
        });
      });
    }

    default:
      return state;
  }
}
