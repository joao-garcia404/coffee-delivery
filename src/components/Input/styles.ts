import styled, { css } from "styled-components";

type InputComponentProps = {
  error: boolean;
};

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  height: 42px;
  padding: 12px;
  border-radius: 4px;
  outline: none;
  border: 1px solid ${({ theme }) => theme["base-button"]};
  background: ${({ theme }) => theme["base-input"]};

  line-height: 1.3;
  color: ${({ theme }) => theme["base-text"]};

  transition: all 0.2s;

  &::placeholder {
    line-height: 1.3;
    color: ${({ theme }) => theme["base-label"]};
  }

  &:focus {
    border-color: ${({ theme }) => theme["yellow-dark"]};
  }

  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme.error};
    `};
`;

export const HelperText = styled.span``;
