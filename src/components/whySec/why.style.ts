"use client";

import styled, { keyframes } from "styled-components";

export const StyledWhyPage = styled.section`
  .why-title {
    font-size: 3rem;
    margin-top: 3rem;
    animation: fadeTop 1s ease 0s 1 normal forwards;
    animation-timeline: view();
    @media screen and (width <= 500px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .why-sec_text {
    display: flex;
    width: 100%;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    hr {
      width: 4rem;
    }
    margin-bottom: 3rem;
  }
  .why-sec_list {
    display: flex;
    gap: 5rem;
  }
`;

const listCycle = keyframes`
from {
  transform: translateX(-200%);
}
  to {
    transform: translateX(200%);
  }
`;

const tiltSvg = keyframes`
    0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0eg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

export const StyledList = styled.ul`
  display: flex;
  margin: 0 4rem;
  width: 90%;
  padding: 0 4rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 30rem;
  overflow-y: scroll;
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
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  height: 15rem;
  width: 15rem;
  align-items: center;
  gap: 1rem;
  svg {
    width: 3rem;
    height: 3rem;
    transition: 0.2s ease;
    cursor: grab;
    &:hover {
      transform: scale(1.05);
      color: var(--color-2);
    }
    &:active {
      cursor: grabbing;
      animation: ${tiltSvg} 5ms ease infinite;
      color: var(--gray);
    }
  }
  h2 {
    font-size: 20px;
    text-align: center;
    color: var(--color-2);
  }
`;
