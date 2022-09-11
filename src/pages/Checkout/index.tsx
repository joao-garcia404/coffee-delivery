import { CheckoutContainer, Content, Card, CoffeeCard } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <Content>
        <div className="column">
          <div className="title">Complete seu pedido</div>
          <Card></Card>
          <Card></Card>
        </div>

        <div className="column">
          <div className="title">Cafés selecionados</div>
          <CoffeeCard></CoffeeCard>
        </div>
      </Content>
    </CheckoutContainer>
  );
}
