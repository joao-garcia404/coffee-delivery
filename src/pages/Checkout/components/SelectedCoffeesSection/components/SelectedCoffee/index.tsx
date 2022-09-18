import { useCart } from "../../../../../../hooks/useCart";

import { CounterButton } from "../../../../../../components/CounterButton";

import { Trash } from "phosphor-react";

import CoffeeImage from "../../../../../../assets/expresso-tradicional.png";

import { SelectedCoffeeContainer, CoffeeInfos, RemoveButton } from "./styles";

interface Coffee {
  id: number;
  name: string;
  description: string;
  categories: string[];
  value: number;
}

interface SelectedCoffeeProps {
  coffee: Coffee;
}

export function SelectedCoffee({ coffee }: SelectedCoffeeProps) {
  const { cart, addToCart, removeFromCart } = useCart();

  const coffeeQuantity = cart.find((item) => item.id === coffee.id);

  const total = coffeeQuantity?.quantity
    ? coffee.value * coffeeQuantity?.quantity
    : 0;

  const totalCartCoffeeQuantity = cart.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  return (
    <SelectedCoffeeContainer>
      <CoffeeInfos>
        <img src={CoffeeImage} alt="Expresso tradicional" />

        <div>
          <span>{coffee.name}</span>

          <div className="actions">
            <CounterButton
              quantity={coffeeQuantity?.quantity ?? 0}
              onAdd={() =>
                addToCart({ coffeeId: coffee.id, price: coffee.value })
              }
              onSub={() => removeFromCart(coffee.id)}
            />

            <RemoveButton>
              <Trash />
              remover
            </RemoveButton>
          </div>
        </div>
      </CoffeeInfos>

      <div className="total">
        {total.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </SelectedCoffeeContainer>
  );
}
