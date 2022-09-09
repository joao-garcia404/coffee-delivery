import { createContext, ReactNode, useReducer, useState } from "react";

import { addToCart, removeFromCart } from "../reducers/cart/actions";
import { cartReducer } from '../reducers/cart/reducer';

interface CoffeeCart {
  id: number;
  quantity: number;
}

export interface CartContextData {
  cart: CoffeeCart[];
  addToCart: (coffeeId: number) => void;
  removeFromCart: (coffeeId: number) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, [], () => [])

  function addCoffeeToCart(coffeeId: number) {
    dispatch(addToCart(coffeeId));
  }

  function removeCoffeeFromCart(coffeeId: number) {
    dispatch(removeFromCart(coffeeId));
  }

  return (
    <CartContext.Provider
      value={{
        cart: cart as CoffeeCart[],
        addToCart: addCoffeeToCart,
        removeFromCart: removeCoffeeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
