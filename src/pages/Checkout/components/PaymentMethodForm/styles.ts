import styled, { css } from "styled-components";

type PaymentMethodButtonProps = {
  active: boolean;
};

export const PaymentMethodFormContainer = styled.div`
  margin-top: 32px;

  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 530px) {
    flex-direction: column;
  }
`;

export const PaymentMethodButton = styled.button<PaymentMethodButtonProps>`
  width: 178px;
  height: 51px;
  border-radius: 6px;
  padding: 17px 16px;
  border: 1px solid ${({ theme }) => theme["base-button"]};
  background: ${({ theme }) => theme["base-button"]};

  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme["base-text"]};

  display: flex;
  align-items: center;
  gap: 12px;

  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    ${({ active }) =>
      !active &&
      css`
        border-color: ${({ theme }) => theme["base-hover"]};
        background: ${({ theme }) => theme["base-hover"]};
      `}
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.purple};
  }

  ${({ active }) =>
    active &&
    css`
      border-color: ${({ theme }) => theme.purple};
      background: ${({ theme }) => theme["purple-light"]};
    `}
`;
