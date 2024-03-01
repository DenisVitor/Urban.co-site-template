"use client";

import styled, { keyframes } from "styled-components";

const FadeUpKeys = keyframes`
  from {
    transform: translateY(-500px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;
const FadeSideKeys = keyframes`
   from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const ToggleModal = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-self: center;
  .login-activated {
    animation: ${FadeUpKeys} 0.4s ease-in-out forwards;
    background-color: var(--white);
    width: 100%;
    padding: 1.3rem;
    input {
      width: 100%;
    }
  }
  .login-login {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;
    padding: 1rem;
    height: 15rem;
    button {
      width: fit-content;
      padding: 0.3rem 0.7rem;
      font-size: 15px;
      background-color: var(--color-1);
      color: var(--white);
      font-weight: var(--fw-600);
      cursor: pointer;
      transition: 0.1s ease;
      border: 1px solid transparent;

      align-self: center;
      margin-top: 4rem;
      &:hover {
        background-color: var(--black);
      }
      &:active {
        background-color: var(--white);
        color: var(--black);
        border: 1px solid var(--black);
      }
    }
  }
  .login-register {
    display: none;
    flex-direction: column;
    width: 30rem;

    padding: 1rem;
    gap: 2rem;
    &::-webkit-scrollbar {
      appearance: none;
      background-color: var(--white);
      border-radius: 5rem;
      max-width: 0.2rem;
    }
    &::-webkit-scrollbar-thumb {
      appearance: none;
      border-radius: 5rem;
      background: var(--color-1);
    }
    @media screen and (width <= 600px) {
      width: 100%;
      height: 60dvh;
      overflow: auto;
      align-items: center;
    }
    button {
      width: fit-content;
      padding: 0.3rem 0.7rem;
      font-size: 15px;
      background-color: var(--color-1);
      color: var(--white);
      font-weight: var(--fw-600);
      cursor: pointer;
      transition: 0.1s ease;
      border: 1px solid transparent;
      align-self: center;
      animation: ${FadeSideKeys} 0.8s ease-in-out forwards;
      &:hover {
        background-color: var(--black);
      }
      &:active {
        background-color: var(--white);
        color: var(--black);
        border: 1px solid var(--black);
      }
    }

    .register-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
    }
  }
  .login-login {
    display: none;
  }
  .toggle-login_register {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    padding-bottom: 1rem;
    gap: 0.4rem;
    border-bottom: 4px solid var(--gray);
    flex-wrap: wrap;
    .login-close_button {
      background-color: var(--black);
    }
    .toggled {
      background-color: var(--white);
      color: var(--gray);
      border-color: var(--gray);
      &:hover {
        background-color: transparent;
      }
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 3px solid transparent;
      padding: 0.3rem;
      font-size: 16px;
      font-weight: var(--fw-600);
      color: var(--white);
      background-color: var(--color-1);
      height: 100%;
      cursor: pointer;
      transition: 0.1s ease;
      width: 10rem;
      &:hover {
        transform: translateY(-3px);
        background-color: var(--color-1);
        box-shadow: 1px 2px 5px darkgrey;
      }
      &:active {
        transform: translateY(0px);
        background-color: var(--black);
        box-shadow: none;
      }
    }

    p {
      display: flex;
      font-size: 18px;
      padding: 0.3rem 1.5rem;
      height: 100%;
      align-items: center;
      border-top: 1px solid var(--color-1);
      border-bottom: 1px solid var(--color-1);
    }
  }
  .active {
    display: flex;
    animation: ${FadeSideKeys} 0.4s ease-in-out forwards;
  }
`;

export const LabelRegister = styled.label`
  width: 6rem;
  color: var(--gray);
  font-size: 14px;
  font-weight: var(--fw-600);
`;

export const InputRegister = styled.input`
  border-bottom: 4px solid var(--color-1);
  width: 100%;
  height: 2rem;
  padding: 0 0.3rem;
  font-size: 1rem;
  &:focus {
    border-color: var(--color-2);
  }
  @media screen and (width <= 600px) {
    
  }
`;
