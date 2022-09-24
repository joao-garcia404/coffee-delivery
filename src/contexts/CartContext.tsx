import { createContext, ReactNode, useReducer, useState } from "react";

import { addToCart, removeFromCart, clearCart } from "../reducers/cart/actions";
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
  removeAllItems: () => void;
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

  function removeAllItems() {
    dispatch(clearCart());
  }

  return (
    <CartContext.Provider
      value={{
        cart: cart as CoffeeCart[],
        addToCart: addCoffeeToCart,
        removeFromCart: removeCoffeeFromCart,
        removeAllItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
