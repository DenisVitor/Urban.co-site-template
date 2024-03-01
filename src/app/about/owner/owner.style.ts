"use client";

import styled from "styled-components";

export const StyledOwnerPage = styled.main`
  display: flex;
  flex-direction: column;
  .owner-container_title {
    background: url("https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    background-attachment: fixed;
    h1 {
      display: flex;
      color: var(--white);
      align-items: center;
    }
  }
  .owner-title {
    border-radius: 2rem;
    height: fit-content;
    display: flex;
    justify-content: space-around;
    background: rgba(0, 0, 0, 0.2);
    gap: 4rem;
    margin: 4rem;
    padding: 3rem;
    img {
      width: 17rem;
      border-top-left-radius: 2rem;
      border-bottom-left-radius: 2rem;
    }
    @media screen and (width <= 846px) {
      background: none;
      img {
        display: none;
      }
    }
    .owner-title_text {
      display: flex;
      flex-direction: column;
      width: 17rem;
      align-items: center;
      justify-content: space-around;
      background-color: var(--black);
      border-top-right-radius: 2rem;
      border-bottom-right-radius: 2rem;
      color: var(--white);
      h2 {
        color: var(--color-1);
      }
      @media screen and (width <= 846px) {
        padding: 1rem;
        gap: 3rem;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        text-align: center;
        min-width: 15rem;
      }
    }
  }
  .owner-lorem {
    display: flex;
    flex-direction: column;
    padding: 4rem 5dvw;
    gap: 4rem;
    .owner-lorem_text-one {
      display: flex;
      width: 100%;
      border: 1px solid lightgray;
      border-bottom: transparent;
      justify-content: space-around;
      padding: 2rem;
      overflow-y: hidden;
      @media screen and (width <= 930px) {
        img {
          display: none;
        }
      }
      img {
        max-width: 17rem;
      }
      div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border: 1px solid lightgray;
        border-top: transparent;
        padding: 2rem;
        h2 {
          color: var(--color-2);
        }
        p {
          max-width: 25rem;
          max-height: 15rem;
          overflow: auto;
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
    .owner-lorem_text-two {
      display: flex;
      width: 100%;
      border: 1px solid lightgray;
      border-top: transparent;
      justify-content: space-around;
      padding: 2rem;
      padding-bottom: 3rem;
      overflow-y: hidden;
      @media screen and (width <= 930px) {
        img {
          display: none;
        }
      }
      img {
        max-width: 27rem;
      }
      div {
        display: flex;
        overflow-y: hidden;
        flex-direction: column;
        gap: 2rem;
        border: 1px solid lightgray;
        border-bottom: transparent;
        padding: 2rem;
        h2 {
          color: var(--color-2);
        }
        p {
          max-width: 25rem;
          max-height: 15rem;
          overflow: auto;
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
    .owner-lorem_text-three {
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        padding: 2rem;
        border-left: 1px solid lightgray;
        border-right: 1px solid lightgray;
        color: var(--color-2);
      }
      div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4rem;
        border-top: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
        flex-direction: column;
        gap: 0.2rem;
        @media screen and (width <= 930px) {
          img {
            display: none;
          }
          sub {
            display: none;
          }
        }
        img {
          max-width: 40rem;
        }
      }
      p {
        padding: 4rem;
        border-left: 1px solid lightgray;
        border-right: 1px solid lightgray;
        text-align: justify;
        max-height: 25rem;
        overflow: auto;
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
    .owner-lorem_text-four {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 6rem;
      h2 {
        color: var(--color-2);
      }
      padding: 4rem;
      border: 1px solid lightgray;
      border-top: transparent;
      p {
        max-height: 25rem;
        overflow: auto;
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
`;
