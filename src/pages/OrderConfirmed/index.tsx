import { useEffect } from "react";

import { useTheme } from "styled-components";

import { useLocation, useNavigate } from "react-router-dom";

import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import DeliveryCoffeeIllustration from "../../assets/delivery-coffee.svg";

import {
  OrderConfirmedContainer,
  OrderInfosContainer,
  OrderDetailsSection,
  OrderItem,
} from "./styles";

interface LocationState {
  state: {
    district: string;
    number: string;
    state: string;
    street: string;
    city: string;
    paymentMethod: string;
  };
}

export function OrderConfirmed() {
  const theme = useTheme();
  const navigate = useNavigate();

  const { state } = useLocation() as unknown as LocationState;

  function getPaymentMethod() {
    const { paymentMethod } = state;

    switch (paymentMethod) {
      case "money":
        return "Dinheiro";
      case "credit":
        return "Cartão de crédito";
      default:
        return "Cartão de débito";
    }
  }

  useEffect(() => {
    if (state === null) navigate("/");
  }, [state]);

  if (state === null) return <></>;

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
                Entrega em{" "}
                <strong>
                  {state?.street}, {state?.number}
                </strong>
              </p>
              <p>
                {state?.district} - {state?.city}, {state?.state}
              </p>
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
              <strong>{getPaymentMethod()}</strong>
            </div>
          </OrderItem>
        </OrderDetailsSection>
      </OrderInfosContainer>

      <img src={DeliveryCoffeeIllustration} alt="Entregador de café" />
    </OrderConfirmedContainer>
  );
}
