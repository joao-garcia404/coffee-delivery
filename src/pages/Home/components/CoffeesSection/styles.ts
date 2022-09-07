import styled from "styled-components";

export const CoffeesSectionContainer = styled.div`
  margin-top: 140px;

  .title {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 32px;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-subtitle"]};
  }
`;

export const CoffeesListContainer = styled.div`
  margin-top: 54px;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 32px;
`;
