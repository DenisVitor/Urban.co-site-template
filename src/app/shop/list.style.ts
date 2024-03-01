"use client";

import styled from "styled-components";

export const StyledShopMainPage = styled.main`
  display: flex;
  flex-direction: column;
  .shop-title {
    height: 17rem;
    background: url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      gap: 2rem;
      h1 {
        color: var(--color-1);
        text-shadow: 1px 2px 5px var(--black);
        font-size: 40px;
      }
      p {
        color: var(--white);
        text-shadow: 1px 2px 5px var(--black);
      }
      background: linear-gradient(
        142deg,
        rgba(235, 161, 52, 0.5) 10%,
        rgba(38, 38, 38, 0.5) 90%
      );
    }
  }
  .shop-panel {
    display: flex;
    @media screen and (width <= 920px){
      flex-direction: column;
      align-items: center;
      .shop-filter{
        position: static;
        width: 80%;
      }
    }
  }
  .shop-filter {
    display: flex;
    border: 1px solid var(--gray);
    flex-direction: column;
    position: sticky;
    top: 10px;
    gap: 3rem;
    padding: 2rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
    min-width: fit-content;
    border-radius: 1rem;
    align-items: center;
    height: fit-content;
    margin-left: 5dvw;
    background-color: var(--white);
    .clear-filter {
      padding: 0.6rem;
      font-size: 18px;
      background: transparent;
      border: 1px solid var(--color-1);
      border-radius: 8px;
      text-align: center;
      color: var(--color-1);
      font-weight: var(--fw-600);
      transition: 0.2s ease;
      cursor: pointer;
      &:hover {
        border: 1px solid transparent;
        background-color: var(--color-1);
        color: var(--black);
      }
    }
    label,
    input[type="range"] {
      cursor: pointer;
    }
    .item-search {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      width: 100%;
      p {
        color: var(--color-2);
        font-size: 18px;
        font-weight: var(--fw-600);
      }
      input {
        border: 1px solid var(--color-1);
        min-height: 1.5rem;
        border-radius: 4px;
        width: 100%;
      }
    }
  }
  .item-type {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    label {
      display: flex;
      gap: 0.3rem;
      align-items: center;
      border: 1px solid var(--color-1);
      padding: 0.4rem;
      border-radius: 5rem;
      width: 100%;
      p {
        display: flex;
        order: 1;
        font-weight: var(--fw-600);
        width: 100%;

        flex-grow: 1;
        align-items: center;
        justify-content: center;
        color: var(--color-2);
      }
      input {
        accent-color: var(--color-1);
        outline: navajowhite;
      }
    }
  }
  .item-price {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      width: 100%;
      p {
        color: var(--color-2);
        font-size: 18px;
        font-weight: var(--fw-600);
      }
      input {
        accent-color: var(--color-1);
        width: 100%;
      }
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 4rem 0;
  margin-left: 2rem;
  gap: 2rem;
  justify-content: center;
  @media screen and (width <= 920px) {
    height: 30rem;
    overflow-y: auto;
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
  li {
    object-fit: cover;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    h3 {
      margin-top: 1rem;
      font-size: 16px;
      white-space: nowrap;
    }
    .item-type {
      color: var(--gray);
      padding-left: 0.3rem;
      border-left: 4px solid;
    }
  }
  .item-rating {
    display: flex;
    gap: 5px;
    align-items: center;
    text-align: center;
    font-weight: var(--fw-600);
    .on {
      color: var(--color-1);
    }
    .off {
      color: var(--gray);
    }
  }
`;

export const ImageCard = styled.figure<{ bgData: string }>`
  background: url(${({ bgData }) => bgData});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 15rem;
  height: 16rem;
  background-color: rgba(0, 0, 0, 0.1);
  transition: 0.3s ease;
  &:hover {
    background-size: 90%;
  }
  .buttons-list {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    opacity: 0;
    transition: 0.1s ease;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      opacity: 1;
    }
    #button-1 {
      background-color: var(--color-2);
      color: var(--white);
      font-weight: var(--fw-600);
      font-size: 15px;

      border-radius: 2rem;
      cursor: pointer;
      transition: 0.1s ease-in-out;
      a {
        color: var(--white);
        text-decoration: none;
        padding: 1.3rem 1.6rem;
        display: flex;
        width: 100%;
        height: 100%;
      }
      &:hover {
        transform: translateY(-5px);
        box-shadow: 1px 2px 5px black;
      }
      &:active {
        box-shadow: none;
        transform: translateY(0px);
        background-color: var(--color-1);
      }
    }
    #button-2 {
      background-color: var(--white);
      color: var(--black);
      font-weight: var(--fw-600);
      font-size: 15px;
      padding: 1.3rem 1.6rem;
      border-radius: 2rem;
      cursor: pointer;
      transition: 0.1s ease-in-out;
      &:hover {
        transform: translateY(-5px);
        box-shadow: 1px 2px 5px black;
      }
      &:active {
        box-shadow: none;
        transform: translateY(0px);
        background-color: var(--color-1);
      }
    }
  }
`;

export const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 40%;
  position: relative;
  left: 150%;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-image: linear-gradient(
      -225deg,
      #fff 0%,
      #fac473 29%,
      #e8a746 67%,
      #cc8418 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 60px;
  }
  section {
    display: flex;
    @keyframes textclip {
      to {
        background-position: -200% center;
      }
    }
    @keyframes bounce {
      0% {
        transform: scale(1, 1) translateY(0);
      }
      10% {
        transform: scale(1.1, 0.9) translateY(0);
      }
      30% {
        transform: scale(0.9, 1.1) translateY(-55px);
      }
      50% {
        transform: scale(1.05, 0.95) translateY(0);
      }
      58% {
        transform: scale(1, 1) translateY(-7px);
      }
      65% {
        transform: scale(1, 1) translateY(0);
      }
      100% {
        transform: scale(1, 1) translateY(0);
      }
    }
    .L {
      animation: bounce 2s, textclip 1.9s;
      animation-iteration-count: infinite;
    }
    .o {
      animation: bounce 2s, textclip 1.9s;
      animation-iteration-count: infinite;
      animation-delay: 0.1s;
    }
    .a {
      animation: bounce 2s, textclip 1.9s;
      animation-iteration-count: infinite;
      animation-delay: 0.2s;
    }
    .d {
      animation: bounce 2s, textclip 1.9s;
      animation-iteration-count: infinite;
      animation-delay: 0.3s;
    }
    .i {
      animation: bounce 2s, textclip 1.9s;
      animation-iteration-count: infinite;
      animation-delay: 0.4s;
    }
    .n {
      animation: bounce 2s, textclip 1.9s;
      animation-iteration-count: infinite;
      animation-delay: 0.5s;
    }
    .g {
      animation: bounce 2s, textclip 1.9s;
      animation-iteration-count: infinite;
      animation-delay: 0.6s;
    }
    .p1 {
      animation: bounce 2s, textclip 1.9s;
      animation-iteration-count: infinite;
      animation-delay: 0.7s;
    }
    .p2 {
      animation: bounce 2s, textclip 1.9s;
      animation-iteration-count: infinite;
      animation-delay: 0.8s;
    }
    .p3 {
      animation: bounce 2s, textclip 1.9s;
      animation-iteration-count: infinite;
      animation-delay: 0.9s;
    }
  }
`;
