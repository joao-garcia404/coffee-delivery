import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 33px 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .location {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  padding: 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme["purple-light"]};

  font-size: 14px;
  line-height: 1.3;
  color: ${({ theme }) => theme["purple-dark"]};

  svg {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.purple};
  }
`;

export const CartButton = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  gap: 4px;

  padding: 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme["yellow-light"]};

  border: none;
  cursor: pointer;

  svg {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme["yellow-dark"]};
  }
`;

export const CartQuantityInfo = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme["yellow-dark"]};

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.white};
`;
