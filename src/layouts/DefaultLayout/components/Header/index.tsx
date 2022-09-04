import { MapPin, ShoppingCart } from "phosphor-react";

import LogoImg from "../../../../assets/logo.svg";

import { HeaderContainer, Location, CartButton } from "./styles";

export function Header() {
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
        </CartButton>
      </div>
    </HeaderContainer>
  );
}
