"use client";

import styled, { keyframes } from "styled-components";

export const StyledWhyPage = styled.section`
  .why-title {
    font-size: 3rem;
    margin: 3rem 0;
    animation: fadeTop 1s ease 0s 1 normal forwards;
    animation-timeline: view();
    @media screen and (width <= 500px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .why-sec_list {
    display: flex;
    gap: 5rem;
  }
`;

const listCycle = keyframes`
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
  justify-content: space-around;
  gap: 4rem;
  align-items: start;
  animation: ${listCycle} 32s ease 0s infinite;
  animation-timing-function: linear;
  will-change: transform;
  &:hover {
    animation-play-state: paused;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  min-height: fit-content;
  min-width: 20rem;
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
    white-space: nowrap;
    color: var(--color-2);
  }
`;
