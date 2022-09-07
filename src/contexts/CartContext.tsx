import { createContext, ReactNode, useState } from "react";

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
  const [cart, setCart] = useState<CoffeeCart[]>([]);

  function addCoffeeToCart(coffeeId: number) {}

  function removeCoffeeFromCart(coffeeId: number) {}

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart: addCoffeeToCart,
        removeFromCart: removeCoffeeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
