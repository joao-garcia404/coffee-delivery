import { useTheme } from "styled-components";

import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

import CoffeeIllustration from "../../assets/coffee-home.png";

import {
  HomeContainer,
  MainSection,
  InfosContainer,
  AdvantagesList,
  AdvantageItem,
  IllustrationContainer,
} from "./styles";

export function Home() {
  const theme = useTheme();

  return (
    <HomeContainer>
      <MainSection>
        <InfosContainer>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>

          <AdvantagesList>
            <div className="column">
              <AdvantageItem iconBackground={theme["yellow-dark"]}>
                <div className="icon">
                  <ShoppingCart weight="fill" />
                </div>
                Compra simples e segura
              </AdvantageItem>

              <AdvantageItem iconBackground={theme.yellow}>
                <div className="icon">
                  <Timer weight="fill" />
                </div>
                Entrega rápida e rastreada
              </AdvantageItem>
            </div>

            <div className="column">
              <AdvantageItem iconBackground={theme["base-text"]}>
                <div className="icon">
                  <Package weight="fill" />
                </div>
                Embalagem mantém o café intacto
              </AdvantageItem>

              <AdvantageItem iconBackground={theme.purple}>
                <div className="icon">
                  <Coffee weight="fill" />
                </div>
                O café chega fresquinho até você
              </AdvantageItem>
            </div>
          </AdvantagesList>
        </InfosContainer>

        <IllustrationContainer>
          <img src={CoffeeIllustration} alt="Coffee" />
        </IllustrationContainer>
      </MainSection>
    </HomeContainer>
  );
}
