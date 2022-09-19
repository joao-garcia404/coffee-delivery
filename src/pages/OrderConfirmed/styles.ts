import styled, { keyframes } from "styled-components";

type OrderItemProps = {
  itemColor: string;
};

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const OrderConfirmedContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 102px;

  animation: ${appearFromRight} 2s;
`;

export const OrderInfosContainer = styled.div`
  .title {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 32px;
    line-height: 1.3;
    color: ${({ theme }) => theme["yellow-dark"]};
  }

  .description {
    margin-top: 4px;
    font-size: 20px;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-subtitle"]};
  }
`;

export const OrderDetailsSection = styled.div`
  position: relative;

  min-width: 526px;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 40px;
  border-radius: 6px 36px 6px 36px;
  background-color: ${({ theme }) => theme.background};

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    z-index: -1;
  }
`;

export const OrderItem = styled.div<OrderItemProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  .icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ itemColor }) => itemColor};

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 16px;
      height: 16px;
      color: ${({ theme }) => theme.white};
    }
  }

  .items {
    font-size: 16px;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-text"]};

    strong {
      font-weight: 700px;
    }
  }
`;
