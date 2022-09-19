import { useTheme } from "styled-components";

import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import DeliveryCoffeeIllustration from "../../assets/delivery-coffee.svg";

import {
  OrderConfirmedContainer,
  OrderInfosContainer,
  OrderDetailsSection,
  OrderItem,
} from "./styles";

export function OrderConfirmed() {
  const theme = useTheme();

  return (
    <OrderConfirmedContainer>
      <OrderInfosContainer>
        <div className="title">Uhu! Pedido confirmado</div>
        <div className="description">
          Agora é só aguardar que logo o café chegará até você
        </div>

        <OrderDetailsSection>
          <OrderItem itemColor={theme.purple}>
            <div className="icon">
              <MapPin weight="fill" />
            </div>

            <div className="items">
              <p>
                Entrega em <strong>Rua galileu gaia, 524</strong>
              </p>
              <p>Vila maria - Sao paulo, SP</p>
            </div>
          </OrderItem>

          <OrderItem itemColor={theme.yellow}>
            <div className="icon">
              <MapPin weight="fill" />
            </div>

            <div className="items">
              <p>Previsão de entrega</p>
              <strong>20min - 30min</strong>
            </div>
          </OrderItem>

          <OrderItem itemColor={theme["yellow-dark"]}>
            <div className="icon">
              <CurrencyDollar weight="fill" />
            </div>

            <div className="items">
              <p>Pagamento na entrega</p>
              <strong>Cartao de credito</strong>
            </div>
          </OrderItem>
        </OrderDetailsSection>
      </OrderInfosContainer>

      <img src={DeliveryCoffeeIllustration} alt="Entregador de café" />
    </OrderConfirmedContainer>
  );
}
