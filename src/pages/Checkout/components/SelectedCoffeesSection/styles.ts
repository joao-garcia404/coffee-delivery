import styled from "styled-components";

export const SelectedCoffeeSectionContainer = styled.div``;

export const Content = styled.div``;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme["base-button"]};

  margin: 24px 0px;
`;

export const Button = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 6px;
  border: none;
  background-color: ${({ theme }) => theme.yellow};

  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme["yellow-dark"]};
  }
`;

export const Footer = styled.div``;

export const OrderResume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    line-height: 1.3;
    color: ${({ theme }) => theme["base-text"]};
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-weight: 700;
    font-size: 20px;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-subtitle"]};
  }
`;
