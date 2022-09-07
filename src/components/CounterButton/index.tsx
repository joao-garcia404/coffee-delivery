import { Minus, Plus } from "phosphor-react";
import { CounterButtonContainer } from "./styles";

interface CounterButtonProps {
  onAdd: () => void;
  onSub: () => void;
}

export function CounterButton({ onAdd, onSub }: CounterButtonProps) {
  return (
    <CounterButtonContainer>
      <Minus weight="bold" onClick={onAdd} />
      <span className="quantity">1</span>
      <Plus weight="bold" onClick={onSub} />
    </CounterButtonContainer>
  );
}
