import styled, { css } from "styled-components";

type InputContainerProps = {
  size?: "medium" | "small";
};

const sizes = {
  medium: "200px",
  small: "60px",
};

export const DeliveryAdressFormContainer = styled.div``;

export const Content = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputLine = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 530px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;

  ${({ size }) =>
    size &&
    css`
      min-width: ${sizes[size]};
      max-width: ${sizes[size]};
    `}

  @media (max-width: 530px) {
    max-width: 100%;
  }
`;
