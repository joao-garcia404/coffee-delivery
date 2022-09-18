import { createContext, ReactNode, useReducer, useState } from "react";

import { addToCart, removeFromCart } from "../reducers/cart/actions";
import { cartReducer } from "../reducers/cart/reducer";

interface CoffeeCart {
  id: number;
  quantity: number;
  unitPrice: number;
}

export interface AddToCartData {
  coffeeId: number;
  price: number;
}

export interface CartContextData {
  cart: CoffeeCart[];
  addToCart: (data: AddToCartData) => void;
  removeFromCart: (coffeeId: number) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, [], () => []);

  function addCoffeeToCart(data: AddToCartData) {
    dispatch(addToCart(data));
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
