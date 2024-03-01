import { styled } from "styled-components";

export const StyledLoading = styled.div`
  display: flex;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
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
