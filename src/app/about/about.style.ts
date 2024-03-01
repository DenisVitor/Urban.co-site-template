"use client";

import styled from "styled-components";

export const StyledAboutPage = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
`;

export const StyledAboutMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  .about-title {
    background: url("https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    width: 100dvw;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    .about-title_text {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 20rem;
      gap: 3rem;
      align-items: center;
      justify-content: center;
      background: rgba(250, 188, 30, 0.4);
      h1 {
        font-size: 2rem;
        color: var(--white);
        span {
          color: var(--color-2);
        }
        @media screen and (width <= 440px) {
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      }
    }
  }
  .about-sec_owner {
    display: flex;
    padding: 5dvw;
    background: rgba(237, 237, 237, 0.5);
    img {
      max-width: 20rem;
    }
    .about-sec_owner-panel {
      background-color: var(--white);
      display: flex;
      @media screen and (width <= 1200px) {
        img {
          display: none;
        }
        button {
          margin-bottom: 2rem;
        }
      }
      button {
        width: fit-content;
        align-self: center;
        font-size: 16px;
        background-color: var(--color-2);
        font-weight: var(--fw-600);
        color: var(--white);
        border-radius: 5rem;
        cursor: pointer;
        transition: 0.1s ease;
        width: 8rem;
        height: 2rem;
        a {
          all: unset;
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
        }
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
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 4rem;
        padding: 0 5rem;
        h1 {
          font-size: 3rem;
          display: flex;
          gap: 1rem;
          width: 100%;
          align-items: center;
          justify-content: center;
          font-weight: var(--fw-400);
          .about-title_line {
            border: 1px solid var(--gray);
            width: 100%;
          }
          span {
            color: var(--color-1);
          }
        }
        @media screen and (width <= 410px) {
          h1 {
            font-size: 1.5rem;
            width: 100%;
          }
          p {
            max-height: 14rem;
            overflow-y: hidden;
          }
        }
      }
    }
  }
  .about-sec_shop {
    display: flex;
    flex-direction: column;
    padding: 0 15dvw;
    margin: 5rem 0;
    align-items: center;
    justify-content: center;
    background: rgba(237, 237, 237, 0.5);
    .about-sec_shop-panel {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3.5rem;
      padding: 4rem 0;
      background-color: white;
      button {
        width: fit-content;
        align-self: center;
        font-size: 16px;
        background-color: var(--color-2);
        font-weight: var(--fw-600);
        color: var(--white);
        border-radius: 5rem;
        cursor: pointer;
        transition: 0.1s ease;
        width: 8rem;
        height: 2rem;
        a {
          all: unset;
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
        }
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
      h1 {
        font-size: 3rem;
        display: flex;
        gap: 1rem;
        width: 80%;
        align-items: center;
        justify-content: center;
        font-weight: var(--fw-400);
        .about-title_line {
          border: 1px solid var(--gray);
          width: 100%;
        }
        span {
          color: var(--color-1);
        }
      }
      @media screen and (width <= 410px) {
        h1 {
          font-size: 1.5rem;
          width: 60%;
        }
        p {
          max-height: 14rem;
          overflow-y: hidden;
        }
      }
      p {
        padding: 0 5rem;
      }
      img {
        max-width: 35rem;
      }
    }
    @media screen and (width <= 1200px) {
      img {
        display: none;
      }
    }
  }
  .about-sec_group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    width: 100%;
    button {
      width: fit-content;
      align-self: center;
      font-size: 16px;
      background-color: var(--color-2);
      font-weight: var(--fw-600);
      color: var(--white);
      border-radius: 5rem;
      cursor: pointer;
      transition: 0.1s ease;
      width: 8rem;
      height: 2rem;
      a {
        all: unset;
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
      }
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
    h1 {
      font-size: 3rem;
      display: flex;
      gap: 1rem;
      width: 80%;
      align-items: center;
      justify-content: center;
      font-weight: var(--fw-400);
      .about-title_line {
        border: 1px solid var(--gray);
        width: 100%;
      }
      span {
        color: var(--color-1);
      }
    }
    @media screen and (width <= 410px) {
      h1 {
        font-size: 1.5rem;
        width: 60%;
      }
    }
    img {
      max-width: 10rem;
    }
    ul {
      display: flex;
      gap: 2rem;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        border: 1px solid var(--color-1);
        padding: 1rem;
        h3 {
          color: var(--color-2);
        }
      }
    }
    @media screen and (width <= 1200px) {
      ul {
        display: none;
      }
      p {
        padding: 0 5dvw;
      }
    }

    @media screen and (width <= 530px) {
      p {
        width: 80%;
        height: 100%;
      }
    }
  }
  .term-policy_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5rem 5dvw;
    background: rgba(237, 237, 237, 0.5);
    margin: 5rem 0;
  }
  .terms-policies {
    display: flex;
    background-color: var(--white);
    margin-bottom: 5rem;
    button {
      width: fit-content;
      align-self: center;
      font-size: 16px;
      background-color: var(--color-2);
      font-weight: var(--fw-600);
      color: var(--white);
      border-radius: 5rem;
      cursor: pointer;
      transition: 0.1s ease;
      width: 8rem;
      height: 2rem;
      a {
        all: unset;
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
      }
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
    .policies-sec {
      width: 100%;
      display: flex;

      background-color: var(--white);
      .policies-sec_text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 25rem;
        padding: 1rem;
        background-color: var(--white);
      }
      p {
        overflow: hidden;
        line-height: 1;
        height: 11rem;
        padding: 0 3rem;
      }
    }

    #image-policies {
      min-width: 15rem;
      width: 100%;
      height: 25rem;
      background: url("https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
      background-size: cover;
    }
    #terms-image {
      min-width: 15rem;
      width: 100%;
      height: 25rem;
      background: url("https://images.unsplash.com/photo-1496115965489-21be7e6e59a0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
      background-size: cover;
    }
    @media screen and (width <= 1200px) {
      flex-direction: column;
      margin: 3rem 0;
      gap: 1rem;
      #image-policies {
        display: none;
      }
      #terms-image {
        display: none;
      }
    }
    h1 {
      font-size: 1.5rem;
      display: flex;
      white-space: nowrap;
      gap: 1rem;
      width: 80%;
      align-items: center;
      justify-content: center;
      font-weight: var(--fw-400);
      .about-title_line {
        border: 1px solid var(--gray);
        width: 100%;
      }
      span {
        color: var(--color-1);
      }
    }
  }
`;
