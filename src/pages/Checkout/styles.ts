import styled from "styled-components";

export const CheckoutContainer = styled.main``;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;

  .title {
    margin-bottom: 3px;
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 18px;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-subtitle"]};
  }

  .column {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  @media (max-width: 1120px) {
    flex-direction: column-reverse;
    align-items: center;

    .column {
      max-width: 600px;
      align-items: center;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  padding: 40px;
  border-radius: 6px;
  background: ${({ theme }) => theme["base-card"]};
`;

export const CoffeeCard = styled(Card)`
  max-width: 448px;
  border-radius: 6px 44px;
  padding: 40px;

  @media (max-width: 530px) {
    padding: 10px;
  }
`;

export const CardSummary = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  span {
    font-size: 16px;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-subtitle"]};
  }

  p {
    font-size: 14px;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-text"]};
  }

  svg {
    width: 22px;
    height: 22px;
  }
`;
