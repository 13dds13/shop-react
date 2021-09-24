import styled from "styled-components";

export const HeaderListStyled = styled.ul`
  display: flex;
  list-style: none;
  margin-left: auto;
  text-transform: uppercase;
  font-weight: 500;

  .headerListStyled-item {
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 12px;
    }

    &:hover {
      color: #93b3e2;
    }
  }
`;
