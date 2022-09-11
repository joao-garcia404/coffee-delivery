import { useFormContext } from "react-hook-form";

import { Bank, CreditCard, Money } from "phosphor-react";

import { NewOrderFormData } from "../..";

import { PaymentMethodFormContainer, PaymentMethodButton } from "./styles";

export function PaymentMethodForm() {
  const { watch, setValue } = useFormContext<NewOrderFormData>();

  const paymentOptions = [
    {
      title: "cartão de crédito",
      value: "credit",
      icon: <CreditCard />,
    },
    {
      title: "cartão de débito",
      value: "debit",
      icon: <Bank />,
    },
    {
      title: "dinheiro",
      value: "money",
      icon: <Money />,
    },
  ];

  const paymentMethod = watch("paymentMethod");

  return (
    <PaymentMethodFormContainer>
      {paymentOptions.map((option) => {
        return (
          <PaymentMethodButton
            active={paymentMethod === option.value}
            onClick={() => setValue("paymentMethod", option.value)}
          >
            {option.icon}
            {option.title}
          </PaymentMethodButton>
        );
      })}
    </PaymentMethodFormContainer>
  );
}
