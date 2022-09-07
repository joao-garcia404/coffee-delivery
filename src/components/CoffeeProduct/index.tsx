import { CounterButton } from "../CounterButton";

import { Coffee } from "./dtos";

import { ShoppingCartSimple } from "phosphor-react";

import CoffeeImage from "../../assets/expresso-tradicional.png";

import {
  CoffeeProductContainer,
  CoffeeTag,
  TagsContainer,
  CardFooter,
  CartButton,
} from "./styles";

interface CoffeeProductProps {
  coffee: Coffee;
}

export function CoffeeProduct({ coffee }: CoffeeProductProps) {
  return (
    <CoffeeProductContainer>
      <img src={CoffeeImage} alt="Expresso tradicional" />

      <TagsContainer>
        {coffee.categories.map((category) => {
          return <CoffeeTag>{category}</CoffeeTag>;
        })}
      </TagsContainer>

      <span className="name">{coffee.name}</span>
      <p className="description">{coffee.description}</p>

      <CardFooter>
        <span className="coin">
          R$
          <span className="price">
            {coffee.value
              .toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
              .replace("R$", "")}
          </span>
        </span>

        <CounterButton onAdd={() => {}} onSub={() => {}} />

        <CartButton>
          <ShoppingCartSimple weight="fill" />
        </CartButton>
      </CardFooter>
    </CoffeeProductContainer>
  );
}
