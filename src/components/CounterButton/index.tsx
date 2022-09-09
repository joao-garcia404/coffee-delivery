import { Minus, Plus } from "phosphor-react";
import { CounterButtonContainer } from "./styles";

interface CounterButtonProps {
  quantity: number;
  onAdd: () => void;
  onSub: () => void;
}

export function CounterButton({ quantity, onAdd, onSub }: CounterButtonProps) {
  return (
    <CounterButtonContainer>
      <Minus weight="bold" onClick={onSub} />
      <span className="quantity">{quantity}</span>
      <Plus weight="bold" onClick={onAdd} />
    </CounterButtonContainer>
  );
}
