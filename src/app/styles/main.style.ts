"use client";

import styled from "styled-components";

export const MainSectionOne = styled.section`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  background: url("/bgc-img.jpg");
  background-size: cover;
  background-attachment: fixed;

  .container-titles {
    display: flex;
    padding: 0 5dvw;
    justify-content: center;
    align-items: start;
    width: 100%;
    height: 100%;
    flex-direction: column;
    gap: 3rem;
    background-color: rgba(0, 0, 0, 0.3);

    .title-one {
      animation: fadeTop 0.8s ease 0s 1 normal forwards;
      display: flex;
      font-size: 4rem;
      color: var(--color-1);
    }
    .title-two {
      animation: fadeTop 0.8s ease 0.1s 1 normal forwards;
      display: flex;
      color: var(--white);
    }
    .title-buttons {
      display: flex;
      flex-direction: row;
      width: 100%;
      gap: 3rem;
      button {
        width: 6rem;
        height: 3rem;
        font-size: 1rem;
        font-weight: var(--fw-600);
        cursor: pointer;
        transition: 2ms ease;
        display: flex;
        a {
          all: unset;
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
        }
      }
      #button-one {
        background-color: var(--color-2);
        color: var(--white);
        animation: fadeBottom 0.8s ease 0s 1 normal forwards;

        &:hover {
          transform: scale(1.04);
          background-color: var(--color-1);
          color: var(--black);
        }
        &:active {
          transform: scale(1.02);
          background-color: var(--black);
          color: var(--white);
        }
      }
      #button-two {
        background-color: transparent;
        border: 1px solid var(--white);
        animation: fadeBottom 0.8s ease 0.1s 1 normal forwards;
        color: var(--white);
        a {
          border: 1px solid transparent;
        }
        &:hover {
          transform: scale(1.04);
          border: none;
          background-color: var(--white);
          color: var(--black);
          a {
            border: 1px solid transparent;
          }
        }
        &:active {
          transform: scale(1.02);
          background-color: var(--black);
          color: var(--white);
        }
      }
    }
    @media screen and (width <= 650px) {
      align-items: center;
      justify-content: center;
      gap: 5rem;
      .title-one {
        display: flex;
        font-size: 2rem;
        width: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      .title-two {
        display: flex;
        text-align: center;
        margin-top: 4rem;
      }
      .title-buttons {
        display: flex;
        justify-content: center;
        width: 100%;
        align-items: center;
      }
    }
  }
`;

export const MainSectionTwo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .why-sec {
    overflow: hidden;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 2rem;
    overflow: hidden;
    padding: 5rem 0;
    span {
      color: var(--color-2);
      font-weight: var(--fw-600);
    }
  }
  .line-one {
    background-color: var(--gray);
    display: flex;
    width: 90dvw;
    height: 0.1rem;
    border-radius: 255rem;
    justify-self: center;
  }
  .title-sec {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: var(--color-1);
    padding: 2rem 0;
    @media screen and (width <= 460px) {
      display: flex;
      justify-content: center;
      h1 {
        display: flex;
        width: 100%;
        margin-bottom: 2rem;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      .title-sec_text {
        display: flex;
        flex-direction: column;
      }
    }
    .title-sec_text {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    h1 {
      font-size: 40px;
    }
    hr {
      width: 7rem;
      margin: 2px 0;
      outline: none;
      border: 1px solid var(--gray);
      height: 1px;
    }
    p {
      color: var(--black);
    }
  }
`;

export const MainSectionThree = styled.section`
  display: flex;
  padding: 2rem 1rem;
  margin: 8rem 5dvw;
  border-top: 0.5rem solid var(--color-1);
  border-bottom: 0.5rem solid var(--color-1);
  justify-content: center;
  @media screen and (width <= 1000px) {
    flex-direction: column;
    gap: 4rem;
    .panel-title {
      padding: 2rem 0;
      span {
        margin-bottom: 4rem;
      }
    }
    .panel-lists {
      width: 100%;
      padding: 2rem 0;
      justify-content: center;
      gap: 2rem;
      border: 1px solid var(--color-1);
      border-left: transparent;
      border-right: transparent;
      h3 {
        display: flex;
        text-align: center;

        width: 100%;
        align-items: center;
        justify-content: center;
      }
      ul {
        align-items: center;
        li {
          white-space: nowrap;
        }
      }
    }
  }
  .panel-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    border-left: 1px solid var(--color-1);
    border-right: 1px solid var(--color-1);
    flex-grow: 1;
    span {
      display: inline-block;
      flex-direction: row;
      font-size: 35px;
      color: var(--color-2);
      cursor: pointer;
      &:hover {
        transform: scale(1.07);
        color: var(--color-1);
      }
    }
    i {
      quotes: "" " " "";
    }
  }
  .panel-lists {
    display: flex;
    flex-grow: 1;
    gap: 5rem;
    justify-content: center;
    a {
      all: unset;
    }
    h3 {
      font-size: 28px;
      color: var(--color-1);
    }
    ul {
      display: flex;
      flex-direction: column;
      padding-left: 0.5rem;
      padding-top: 0.6rem;
      gap: 0.5rem;

      li {
        transition: 0.05s ease;
        cursor: pointer;
        &:hover {
          color: var(--color-2);
          transform: scale(1.06);
          border: 1px 0 1px 0 solid var(--color-2);
        }
        &:active {
          color: var(--color-1);
          transform: scale(1);
          user-select: none;
        }
      }
    }
  }
  .panel-contact {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    border-right: 1px solid var(--color-1);
    border-left: 1px solid var(--color-1);
    button {
      width: fit-content;
      align-self: center;
      width: 10rem;
      height: 2rem;
      font-size: 16px;
      background-color: var(--color-2);
      font-weight: var(--fw-600);
      color: var(--white);
      border-radius: 5rem;
      cursor: pointer;
      a {
        all: unset;
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
      }
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
    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      gap: 0.3rem;
      h2 {
        font-size: 30px;
      }
      p {
        width: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;
        color: var(--color-2);
        span {
          border: 1px solid var(--gray);
          width: 2rem;
        }
      }
    }
    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      input {
        border: 1px solid var(--gray);
        padding: 5px;
        margin: 1rem 0;
      }
    }
  }
`;
