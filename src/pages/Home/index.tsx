import { CoffeesSection } from "./components/CoffeesSection";
import { MainSection } from "./components/MainSection";

import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <MainSection />
      <CoffeesSection />
    </HomeContainer>
  );
}
