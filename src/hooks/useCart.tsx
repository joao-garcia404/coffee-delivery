import { useContext } from "react";

import { CartContext, CartContextData } from "../contexts/CartContext";

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useAuth must be used within a CartContext");
  }

  return context;
}
