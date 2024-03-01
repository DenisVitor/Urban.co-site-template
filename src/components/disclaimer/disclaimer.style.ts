"use client";

import styled from "styled-components";

export const StyledDisclaimer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 5rem;
  flex-wrap: wrap;
  box-shadow: 1px 1px 6px var(--gray);
  font-size: 13px;
  @media screen and (width <= 1077px) {
    flex-direction: column;
    flex-wrap: nowrap;
    content: "";
  }
  @media screen and (width <= 646px) {
   display: none;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.3rem;
    transition: 0.1s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
    a {
      display: flex;
    }
  }
  .message {
    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: var(--red);
    }
  }
  .contact {
    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: var(--blue);
    }
  }
`;
