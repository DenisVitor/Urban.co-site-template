"use client";

import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6rem;
  padding: 2rem 5dvw;
  justify-content: center;
  @media screen and (width <= 1000px) {
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

export const ImageCard = styled.figure<{ $bgdata: string }>`
  background: url(${({ $bgdata }) => $bgdata});
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
