import { CounterButton } from "../CounterButton";

import { ShoppingCartSimple } from "phosphor-react";
import CoffeeImage from "../../assets/expresso-tradicional.png";

import {
  CoffeeProductContainer,
  CoffeeTag,
  CardFooter,
  CartButton,
} from "./styles";

export function CoffeeProduct() {
  return (
    <CoffeeProductContainer>
      <img src={CoffeeImage} alt="Expresso tradicional" />

      <CoffeeTag>Tradicional</CoffeeTag>

      <span className="name">Expresso Tradicional</span>
      <p className="description">
        O tradicional café feito com água quente e grãos moídos
      </p>

      <CardFooter>
        <span className="coin">
          R$ <span className="price">9,90</span>
        </span>

        <CounterButton />

        <CartButton>
          <ShoppingCartSimple weight="fill" />
        </CartButton>
      </CardFooter>
    </CoffeeProductContainer>
  );
}
