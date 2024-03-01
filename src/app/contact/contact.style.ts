"use client";

import styled from "styled-components";

export const StyledContactMainPage = styled.main`
  .contact-title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15rem;
    background: url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    background-attachment: fixed;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      background: rgba(255, 163, 43, 0.4);
      width: 100%;
      height: 100%;
      h2 {
        font-size: 45px;
        color: var(--white);
      }
      p {
        color: var(--white);
      }
    }
  }
  .contact-subtitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 4rem 0;
    h1 {
      font-size: 1.5rem;
      display: flex;
      white-space: nowrap;
      gap: 1rem;
      width: 80%;
      align-items: center;
      justify-content: center;
      font-weight: var(--fw-400);
      @media screen and (width <= 410px) {
        font-size: 1rem;
      }
      .about-title_line {
        border: 1px solid var(--gray);
        width: 100%;
      }
      span {
        color: var(--color-1);
      }
    }
  }
  .contact-types {
    display: flex;
    margin: 5rem 0;
    flex-direction: column;
    gap: 7rem;
    .contact-types_one {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 1rem;
      padding: 1rem;
      border: 1px solid var(--color-1);
      margin: 2rem 5dvw;
      flex-grow: 1;
      flex-wrap: wrap;
      div {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        .svg-person {
          width: 4rem;
          height: 4rem;
        }
        svg {
          height: 3rem;
          width: 3rem;
          color: var(--color-2);
        }
      }
    }
    .contact-types_two {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 4rem 5dvw;
      border-bottom: 5px solid var(--color-1);
      hgroup {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 2rem;
        h1 {
          font-size: 1.5rem;
          display: flex;
          white-space: nowrap;
          gap: 1rem;
          width: 100%;
          align-items: center;
          justify-content: center;
          font-weight: var(--fw-400);
          @media screen and (width <= 410px) {
        font-size: 1rem;
      }
          .about-title_line {
            border: 1px solid var(--gray);
            width: 100%;
          }
          span {
            color: var(--color-1);
          }
        }
      }
      form {
        display: flex;
        flex-direction: column;
        width: clamp(10rem, 80dvw, 90%);
        gap: 2rem;
        margin: 2rem 0;
        label {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          textarea {
            width: 100%;
            border-color: var(--gray);
            outline: none;
            padding: 0.4rem;
            transition: 0.1s ease;
            &:hover {
              transform: scale(1.02);
              box-shadow: 1px 2px 2px 2px darkgray;
            }
          }
        }
        input {
          border: 1px solid var(--gray);
          height: 2rem;
          font-size: 15px;
          width: 100%;
          padding: 0.3rem;
          transition: 0.1s ease;
          &:hover {
            transform: scale(1.02);
            box-shadow: 1px 2px 2px 2px darkgray;
          }
        }
        button {
          width: fit-content;
          align-self: center;
          padding: 0.5rem 2rem;
          font-size: 16px;
          background-color: var(--color-2);
          font-weight: var(--fw-600);
          color: var(--white);
          border-radius: 5rem;
          cursor: pointer;
          transition: 0.1s ease;
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
      }
    }
  }
`;
