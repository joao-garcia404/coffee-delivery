import { InputHTMLAttributes } from "react";

import { useFormContext, Controller } from "react-hook-form";

import { InputComponent, InputContainer, HelperText } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input({ name, ...rest }: InputProps) {
  const { register, control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ fieldState: { error } }) => (
        <InputContainer>
          <InputComponent
            error={!!error?.message}
            {...register(name)}
            {...rest}
          />
        </InputContainer>
      )}
    />
  );
}
