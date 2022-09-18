import styled from "styled-components";

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .total {
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    color: ${({ theme }) => theme["base-text"]};
  }
`;

export const CoffeeInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 64px;
    height: 64px;
  }

  .actions {
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const RemoveButton = styled.button`
  padding: 8px;
  border-radius: 6px;
  border: none;
  background-color: ${({ theme }) => theme["base-button"]};

  font-size: 12px;
  color: ${({ theme }) => theme["base-text"]};
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 4px;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme["base-hover"]};
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.purple};
  }
`;
