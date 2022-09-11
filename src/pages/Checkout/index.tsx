import { useTheme } from "styled-components";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { DeliveryAddressForm } from "./components/DeliveryAdressForm";
import { PaymentMethodForm } from "./components/PaymentMethodForm";

import { CurrencyDollar, MapPinLine } from "phosphor-react";

import {
  CheckoutContainer,
  Content,
  Card,
  CoffeeCard,
  CardSummary,
} from "./styles";

const NewOrderValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o cep"),
  street: zod.string().min(1, "Informe a rua"),
  number: zod.number().min(1, "Informe o número"),
  complement: zod.string().optional(),
  district: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  state: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.string().min(1, "Selecione um método de pagamento."),
});

export type NewOrderFormData = zod.infer<typeof NewOrderValidationSchema>;

export function Checkout() {
  const theme = useTheme();

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(NewOrderValidationSchema),
  });

  const {
    handleSubmit,
    formState: {},
  } = newOrderForm;

  async function handleCreateOrder(data: NewOrderFormData) {}

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateOrder)}>
        <FormProvider {...newOrderForm}>
          <Content>
            <div className="column">
              <div className="title">Complete seu pedido</div>
              <Card>
                <CardSummary>
                  <MapPinLine color={theme["yellow-dark"]} />
                  <div>
                    <span>Endereço de Entrega</span>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                  </div>
                </CardSummary>

                <DeliveryAddressForm />
              </Card>
              <Card>
                <CardSummary>
                  <CurrencyDollar color={theme.purple} />
                  <div>
                    <span>Pagamento</span>
                    <p>
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </p>
                  </div>
                </CardSummary>

                <PaymentMethodForm />
              </Card>
            </div>

            <div className="column">
              <div className="title">Cafés selecionados</div>
              <CoffeeCard></CoffeeCard>
            </div>
          </Content>
        </FormProvider>
      </form>
    </CheckoutContainer>
  );
}
