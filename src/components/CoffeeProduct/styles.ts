import styled from "styled-components";

export const CoffeeProductContainer = styled.div`
  width: 256px;
  height: 310px;
  padding: 0 20px;
  border-radius: 6px 36px;
  background: ${({ theme }) => theme["base-card"]};

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    margin-top: -20px;
  }

  .name {
    margin-top: 16px;
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 20px;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-subtitle"]};
    text-align: center;
  }

  .description {
    margin-top: 8px;
    font-size: 14px;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-label"]};
    text-align: center;
  }
`;

export const CoffeeTag = styled.div`
  margin-top: 12px;
  border-radius: 100px;
  padding: 4px 8px;
  background: ${({ theme }) => theme["yellow-light"]};

  font-size: 10px;
  line-height: 1.3;
  font-weight: 700;
  color: ${({ theme }) => theme["yellow-dark"]};
  text-transform: uppercase;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 4px 20px 4px;
  margin-top: 33px;

  .coin {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-text"]};
    text-align: start;
  }

  .price {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-text"]};
  }
`;

export const CartButton = styled.button`
  padding: 8px;
  border-radius: 6px;
  border: none;
  background-color: ${({ theme }) => theme["purple-dark"]};
  cursor: pointer;
  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme["base-card"]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.purple};
  }
`;
