"use client";
import styled, { keyframes } from "styled-components";

const cartFadeIn = keyframes`
  from {
    transform: translateX(500px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }

`;

export const StyledCart = styled.section`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .cart-total {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    p {
      color: var(--gray);
      font-weight: var(--fw-600);
      span {
        color: var(--color-2);
      }
    }
    .cart-final_button {
      padding: 0.5rem;
      font-size: 16px;
      font-weight: var(--fw-600);
      color: var(--white);
      background-color: var(--color-2);
      border-radius: 1rem;
      cursor: pointer;
      transition: 0.1s ease-in-out;
      &:hover {
        background-color: var(--color-1);
      }
      &:active {
        background-color: var(--black);
      }
    }
  }

  .cart-title_responsive {
    display: none;
  }
  .cart-title {
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: space-between;
    box-shadow: 1px 4px 5px lightgray;

    h2 {
      color: var(--gray);
      font-size: 20px;
      padding: 1rem;
      cursor: text;
      white-space: nowrap;
    }
    .close-cart {
      width: 2rem;
      height: 2rem;
      margin-top: 2px;
      cursor: pointer;
      margin-right: 1rem;
      font-size: 20px;
      font-weight: var(--fw-600);
      background-color: transparent;
      color: var(--color-2);
      &:hover {
        color: var(--color-1);
      }
    }
  }
  @media screen and (width <= 520px) {
    .cart-title {
      display: none;
    }
    .cart-title_responsive {
      display: flex;
      flex-direction: column;
      .cart-total {
        padding: 1rem;
        box-shadow: 1px 4px 5px lightgray;
      }
      .responsive-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2 {
          color: var(--gray);
          font-size: 20px;
          padding: 1rem;
          cursor: text;
          white-space: nowrap;
        }
        .close-cart {
          width: 2rem;
          height: 2rem;
          margin-top: 2px;
          cursor: pointer;
          margin-right: 1rem;
          font-size: 20px;
          font-weight: var(--fw-600);
          background-color: transparent;
          color: var(--color-2);
          &:hover {
            color: var(--color-1);
          }
        }
      }
    }
  }
  .cart-data {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    padding-bottom: 3rem;
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
    .item-cart {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      margin: 0.6rem;
      border: 1px solid var(--color-1);
      padding: 0.3rem 0.5rem;
      border-radius: 0.8rem;
      img {
        max-width: 4rem;
      }
      .item-quantity {
        display: flex;
        gap: 1.8rem;
        align-items: center;
        justify-content: center;
        border: 1px solid;
        border-radius: 2rem;
        padding: 0.5rem;
        .item-quantity_number {
          width: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .item-quantity_counter {
          cursor: pointer;
          transition: 0.06s ease;
          user-select: none;
          font-size: 22px;
          &:hover {
            color: var(--color-2);
          }
        }
        span {
          font-size: 17px;
          font-weight: var(--fw-600);
          user-select: none;
        }
      }
      @media screen and (width <= 660px) {
        .img-cart,
        .item-sex {
          display: none;
        }
        flex-wrap: wrap;
        justify-content: center;
      }
    }
    .cart-data_empty {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      padding: 0 4rem;
      text-align: center;
      gap: 1rem;
    }
  }
  .item-remover {
    padding: 0.4rem;
    font-size: 1.3rem;
    font-weight: var(--fw-600);
    background-color: transparent;
    color: var(--color-2);
    cursor: pointer;
    transition: 0.2s ease;
    &:hover {
      color: var(--color-1);
    }
    &:active {
      color: var(--black);
    }
  }
  .item-price {
    width: 4rem;
    user-select: none;
  }
  .cart-activated {
    animation: ${cartFadeIn} 0.4s ease forwards;
    background-color: #fff;
    height: 100%;
  }
`;
