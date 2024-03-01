"use client";

import styled from "styled-components";
import { keyframes } from "styled-components";

const SlideLeft = keyframes`
  from {
    transform: translateX(-500px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5dvw;
  width: 100%;

  a {
    all: unset;
  }
  h2 {
    color: var(--color-2);
    font-size: 30px;
    cursor: pointer;
    display: flex;
    span {
      transition: 0.05s ease-in-out;
      display: block;
      &:hover {
        color: var(--color-1);
        transform: scale(1.1);
      }
    }
  }
  nav {
    display: flex;
    width: 100%;
  }
  .button-list {
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    gap: 2rem;
    width: 100%;
    @media screen and (width <= 877px) {
      display: none;
    }
    p {
      cursor: pointer;
      transition: 0.1s ease-in-out;
      &:hover {
        font-weight: var(--fw-600);
        text-decoration: underline;
      }
      &:active {
        color: var(--color-2);
      }
    }
  }
  .svg-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .svg-item {
      display: flex;
    }
    svg {
      width: 1.3rem;
      height: 1.3rem;
      color: var(--color-2);
      cursor: pointer;
      position: relative;
      display: inline-block;
      &:hover {
        color: var(--color-1);
        transform: scale(1.06);
      }
      &:active {
        color: var(--black);
        transform: scale(1);
      }
    }

    .svg-up {
      width: 1.7rem;
      height: 1.7rem;
    }
  }
  .responsive-header_menu {
    cursor: pointer;
    transition: 0.1s ease;
    svg {
      width: 2rem;
      height: 2rem;
      color: var(--color-2);
    }
    &:hover {
      color: var(--color-1);
      transform: scale(1.06);
    }
    &:active {
      color: var(--black);
      transform: scale(1);
    }
  }
  .svg-list_responsive {
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    position: absolute;
    .svg-responsive_items {
      flex-direction: column;
      align-items: center;
      padding: 2rem 0;
      gap: 2rem;
      height: 100%;
      width: 100%;
    }
    .svg-responsive_title {
      display: flex;
      width: 95%;
      justify-content: space-between;
      padding: 1rem 0.5rem;
      margin: 0 0.5rem;
      border-bottom: 5px solid var(--gray);
      h1 {
        color: var(--gray);
      }
      button {
        font-size: 19px;
        font-weight: var(--fw-600);
        color: var(--color-2);
        background-color: transparent;
        &:hover {
          color: var(--color-1);
          transform: scale(1.06);
        }
        &:active {
          color: var(--black);
          transform: scale(1);
        }
      }
    }
    align-items: center;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    div {
      display: flex;
      align-items: center;
      gap: 2rem;
      p {
        width: 3rem;
        font-size: 19px;
        font-weight: var(--fw-600);
        color: var(--color-2);
        &:hover {
          color: var(--color-1);
          transform: scale(1.06);
        }
        &:active {
          color: var(--black);
          transform: scale(1);
        }
      }
      a {
        display: flex;
        align-items: center;
        gap: 2rem;
      }
    }
    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: var(--color-2);

      &:hover {
        color: var(--color-1);
        transform: scale(1.06);
      }
      &:active {
        color: var(--black);
        transform: scale(1);
      }
    }
    .svg-up {
      width: 2rem;
      height: 2rem;
    }
  }
  @media screen and (width <= 600px) {
    .responsive-header_menu {
      display: flex;
    }
    .svg-list {
      display: none;
    }
  }
  @media screen and (width >= 600px) {
    .responsive-header_menu {
      display: none;
    }
    .svg-list {
      display: flex;
    }
  }
  .res-active {
    transition: 0.1s ease;
    animation: ${SlideLeft} 0.4s ease forwards;
  }
`;
