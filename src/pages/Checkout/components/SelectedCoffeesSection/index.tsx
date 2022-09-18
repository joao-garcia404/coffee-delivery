import { Fragment } from "react";

import { useCart } from "../../../../hooks/useCart";

import { SelectedCoffee } from "./components/SelectedCoffee";

import { coffeesList } from "../../../Home/components/CoffeesSection/mock";

import {
  SelectedCoffeeSectionContainer,
  Footer,
  Button,
  Divider,
  Content,
  OrderResume,
} from "./styles";

export function SelectedCoffeesSection() {
  const { cart } = useCart();

  console.log(cart);

  function formatCart() {
    const coffees = coffeesList.filter((coffee) =>
      cart.map((item) => item.id).includes(coffee.id),
    );

    return coffees;
  }

  function formatNumber(number: number) {
    return number.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  function getTotalCartPrice() {
    const cartTotal = cart.reduce(
      (acc, item) => acc + item.quantity * item.unitPrice,
      0,
    );

    const orderTotal = cartTotal + 3.5;

    return {
      orderTotal: formatNumber(orderTotal),
      coffeesTotal: formatNumber(cartTotal),
    };
  }

  return (
    <SelectedCoffeeSectionContainer>
      <Content>
        {formatCart().map((coffee) => {
          return (
            <Fragment key={coffee.id}>
              <SelectedCoffee coffee={coffee} />
              <Divider />
            </Fragment>
          );
        })}
      </Content>

      <Footer>
        <OrderResume>
          <div className="item">
            <span>Total de itens</span>
            <span>{getTotalCartPrice().coffeesTotal}</span>
          </div>

          <div className="item">
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>

          <div className="total">
            <span>Total</span>
            <span>{getTotalCartPrice().orderTotal}</span>
          </div>
        </OrderResume>

        <Button>Confirmar pedido</Button>
      </Footer>
    </SelectedCoffeeSectionContainer>
  );
}
