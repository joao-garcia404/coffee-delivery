import styled from "styled-components";

export const CounterButtonContainer = styled.div`
  padding: 8px;
  border-radius: 6px;
  background: ${({ theme }) => theme["base-button"]};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  svg {
    width: 14px;
    height: 14px;
    color: ${({ theme }) => theme.purple};
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme["purple-dark"]};
    }
  }

  .quantity {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-title"]};
    user-select: none;
  }
`;
