import { Minus, Plus } from "phosphor-react";
import { CounterButtonContainer } from "./styles";

export function CounterButton() {
  return (
    <CounterButtonContainer>
      <Minus weight="bold" />
      <span className="quantity">1</span>
      <Plus weight="bold" />
    </CounterButtonContainer>
  );
}
