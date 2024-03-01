"use client";

import styled from "styled-components";

export const StyledTermsMainPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 5dvw;
  background-color: var(--white);
  box-shadow: inset 1px 2px 5px darkgray;
  section {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    align-items: center;
    border-bottom: 1px solid darkgray;
    padding-bottom: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    .terms-title {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      padding: 3rem;
      color: var(--color-1);
      border-bottom: 1px solid darkgray;
    }
    .terms-part {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border-left: 1px solid darkgray;
      border-right: 1px solid darkgray;
      padding-left: 1rem;
      padding-right: 1rem;
      h1 {
        display: flex;
        align-self: center;
        color: var(--color-1);
      }
    }
  }
`;
