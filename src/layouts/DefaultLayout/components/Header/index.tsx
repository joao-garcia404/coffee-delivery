import { useCart } from "../../../../hooks/useCart";

import { MapPin, ShoppingCart } from "phosphor-react";

import LogoImg from "../../../../assets/logo.svg";

import {
  HeaderContainer,
  Location,
  CartButton,
  CartQuantityInfo,
} from "./styles";

export function Header() {
  const { cart } = useCart();

  const totalCartCoffeeQuantity = cart.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  return (
    <HeaderContainer>
      <div className="logo">
        <img src={LogoImg} alt="Coffee delivery logo" />
      </div>

      <div className="location">
        <Location>
          <MapPin weight="fill" />
          São Paulo, SP
        </Location>

        <CartButton type="button">
          <ShoppingCart weight="fill" />

          {totalCartCoffeeQuantity > 0 && (
            <CartQuantityInfo>{totalCartCoffeeQuantity}</CartQuantityInfo>
          )}
        </CartButton>
      </div>
    </HeaderContainer>
  );
}
