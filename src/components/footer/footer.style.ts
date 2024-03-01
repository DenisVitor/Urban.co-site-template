"use client";

import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  padding: 2rem 5dvw;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background-color: var(--color-1);
  @media screen and (width <= 530px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  h2 {
    display: flex;
    cursor: pointer;
    span {
      transition: 5ms ease-in-out;
      display: block;
      &:hover {
        transform: scale(1.2);
        color: var(--white);
      }
    }
  }
`;
