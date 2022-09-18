import { useFormContext } from "react-hook-form";

import { Input } from "../../../../components/Input";

import {
  DeliveryAdressFormContainer,
  Content,
  InputLine,
  InputContainer,
} from "./styles";

export function DeliveryAddressForm() {
  return (
    <DeliveryAdressFormContainer>
      <Content>
        <InputLine>
          <InputContainer size="medium">
            <Input name="cep" placeholder="CEP" />
          </InputContainer>
        </InputLine>

        <InputLine>
          <InputContainer>
            <Input name="street" placeholder="Rua" />
          </InputContainer>
        </InputLine>

        <InputLine>
          <InputContainer size="medium">
            <Input name="number" placeholder="Número" />
          </InputContainer>

          <InputContainer>
            <Input name="complement" placeholder="Complemento" />
          </InputContainer>
        </InputLine>

        <InputLine>
          <InputContainer size="medium">
            <Input name="district" placeholder="Bairro" />
          </InputContainer>

          <InputContainer>
            <Input name="city" placeholder="Cidade" />
          </InputContainer>

          <InputContainer size="small">
            <Input name="state" placeholder="UF" />
          </InputContainer>
        </InputLine>
      </Content>
    </DeliveryAdressFormContainer>
  );
}
