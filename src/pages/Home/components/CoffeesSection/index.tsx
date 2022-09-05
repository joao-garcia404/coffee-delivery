import { CoffeeProduct } from "../../../../components/CoffeeProduct";

import { CoffeesSectionContainer, CoffeesListContainer } from "./styles";

export function CoffeesSection() {
  return (
    <CoffeesSectionContainer>
      <span className="title">Nossos cafés</span>

      <CoffeesListContainer>
        <CoffeeProduct />
      </CoffeesListContainer>
    </CoffeesSectionContainer>
  );
}
