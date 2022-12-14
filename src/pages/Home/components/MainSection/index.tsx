import { useTheme } from "styled-components";

import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

import CoffeeIllustration from "../../../../assets/coffee-home.png";

import {
  AdvantageItem,
  AdvantagesList,
  MainSectionContainer,
  IllustrationContainer,
  InfosContainer,
} from "./styles";

export function MainSection() {
  const theme = useTheme();

  return (
    <MainSectionContainer>
      <InfosContainer>
        <h2>Encontre o café perfeito para qualquer hora do dia</h2>

        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

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
    </MainSectionContainer>
  );
}
