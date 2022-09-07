import { CoffeeProduct } from "../../../../components/CoffeeProduct";

import { coffeesList } from "./mock";

import { CoffeesSectionContainer, CoffeesListContainer } from "./styles";

export function CoffeesSection() {
  return (
    <CoffeesSectionContainer>
      <span className="title">Nossos cafés</span>

      <CoffeesListContainer>
        {coffeesList.map((coffee) => {
          return <CoffeeProduct coffee={coffee} />;
        })}
      </CoffeesListContainer>
    </CoffeesSectionContainer>
  );
}
