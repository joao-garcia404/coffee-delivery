import styled from "styled-components";

interface AdvantageItemProps {
  iconBackground: string;
}

export const HomeContainer = styled.main``;

export const MainSection = styled.div`
  display: flex;
  align-items: center;
  gap: 56px;
  margin-top: 94px;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 50px;
  }
`;

export const InfosContainer = styled.div`
  max-width: 588px;

  h2 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 48px;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-title"]};
  }

  p {
    margin-top: 16px;
    font-size: 20px;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-subtitle"]};
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
      margin-top: 20px;
    }
  }
`;

export const AdvantagesList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin-top: 66px;

  .column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 450px) {
    margin-top: 30px;
    flex-direction: column;
    gap: 20px;
  }
`;

export const AdvantageItem = styled.div<AdvantageItemProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.3;
  color: ${({ theme }) => theme["base-text"]};

  .icon {
    width: 32px;
    height: 32px;
    min-width: 32px;
    min-height: 32px;
    border-radius: 50%;
    background: ${({ iconBackground }) => iconBackground};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.background};
  }
`;

export const IllustrationContainer = styled.div`
  img {
    max-width: 476px;
    max-height: 360px;

    @media (max-width: 540px) {
      max-width: 96%;
    }
  }
`;
