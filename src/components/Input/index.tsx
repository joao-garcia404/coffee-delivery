import { InputHTMLAttributes } from "react";

import { useFormContext } from "react-hook-form";

import { InputComponent, InputContainer, HelperText } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input({ name, ...rest }: InputProps) {
  const { register } = useFormContext();

  return (
    <InputContainer>
      <InputComponent {...register(name)} {...rest} />
    </InputContainer>
  );
}
