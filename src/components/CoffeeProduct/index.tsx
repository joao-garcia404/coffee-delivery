import { useCart } from "../../hooks/useCart";

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
  const { cart, addToCart, removeFromCart } = useCart();

  const coffeeCart = cart.find((item) => item.id === coffee.id);

  return (
    <CoffeeProductContainer>
      <img src={CoffeeImage} alt="Expresso tradicional" />

      <TagsContainer>
        {coffee.categories.map((category) => {
          return <CoffeeTag key={category}>{category}</CoffeeTag>;
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

        <CounterButton
          quantity={coffeeCart?.quantity ?? 0}
          onAdd={() => addToCart({ coffeeId: coffee.id, price: coffee.value })}
          onSub={() => {
            if (coffeeCart && coffeeCart?.quantity > 0) {
              removeFromCart(coffee.id);
            }
          }}
        />

        <CartButton>
          <ShoppingCartSimple weight="fill" />
        </CartButton>
      </CardFooter>
    </CoffeeProductContainer>
  );
}
