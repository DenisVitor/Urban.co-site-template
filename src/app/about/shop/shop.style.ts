"use client";

import styled from "styled-components";

export const StyledShopMainPage = styled.main`
  display: flex;
  flex-direction: column;
  @media screen and (width <= 1230px) {
    img {
      display: none;
    }
  }
  .shop-title {
    height: 20rem;
    background: url("https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    background-size: cover;
    background-attachment: fixed;
    h1 {
      color: var(--color-2);
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.5) 10%,
        rgba(250, 151, 30, 0.5)
      );
      text-shadow: 1px 2px 4px black;
    }
  }
  .shop-lorem {
    display: flex;
    flex-direction: column;
    padding: 0 5dvw;
    .shop-lorem_text-one {
      margin: 4rem 0;
      display: flex;
      flex-direction: column;

      h2 {
        align-self: self-start;
        color: var(--color-2);
        border: 1px solid var(--gray);
        padding: 4rem;
        border-bottom: transparent;
        border-top: transparent;
      }
      div {
        display: flex;
        border: 1px solid var(--gray);
        flex-wrap: wrap;
        padding: 4rem;
        justify-content: space-around;
        max-height: 30rem;
        border-bottom: transparent;
        img {
          max-width: 32rem;
          max-height: 20rem;
        }
        p {
          line-height: 2rem;
          max-width: 35rem;
          max-height: 20rem;
          display: block;
          overflow-y: auto;
          padding-left: 1rem;
          &::-webkit-scrollbar {
            appearance: none;
            background-color: var(--white);
            border-radius: 5rem;
            max-width: 0.5rem;
          }
          &::-webkit-scrollbar-thumb {
            appearance: none;
            border-radius: 5rem;
            background: var(--color-1);
          }
        }
      }
    }
    .shop-lorem_text-two {
      display: flex;
      flex-direction: column;
      div {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding: 4rem 1rem;
        border-top: 1px solid var(--gray);
        flex-direction: column;
        img {
          max-width: 52rem;
          max-height: 20rem;
        }
      }
      h2 {
        align-self: center;
        color: var(--color-2);
        border: 1px solid var(--gray);
        padding: 4rem;
        border-bottom: transparent;
        border-top: transparent;
      }
      p {
        line-height: 2rem;
        padding: 4rem;
        border: 1px solid var(--gray);
        max-height: 20rem;
        display: block;
        overflow-y: auto;
        border-bottom: transparent;
        &::-webkit-scrollbar  {
          appearance: none;
          background-color: var(--white);
          border-radius: 5rem;
          max-width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
          appearance: none;
          border-radius: 5rem;
          background: var(--color-1);
        }
      }
    }
    .shop-lorem_text-three {
      margin: 4rem 0;
      display: flex;
      flex-direction: column;

      h2 {
        align-self: self-end;
        color: var(--color-2);
        border: 1px solid var(--gray);
        padding: 4rem;
        border-bottom: transparent;
        border-top: transparent;
      }
      div {
        display: flex;
        border: 1px solid var(--gray);
        flex-wrap: wrap;
        padding: 4rem;
        justify-content: space-around;
        max-height: 30rem;
        border-bottom: transparent;
        img {
          max-width: 32rem;
          max-height: 20rem;
        }
        p {
          line-height: 2rem;
          max-width: 35rem;
          max-height: 20rem;
          display: block;
          overflow-y: auto;
          padding-left: 1rem;
          &::-webkit-scrollbar {
            appearance: none;
            background-color: var(--white);
            border-radius: 5rem;
            max-width: 0.5rem;
          }
          &::-webkit-scrollbar-thumb {
            appearance: none;
            border-radius: 5rem;
            background: var(--color-1);
          }
        }
      }
    }
  }
`;
