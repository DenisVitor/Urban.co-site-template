"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ul, ol, li {
        list-style: none;
    }
    input, button {
        outline: none;
        border: none;
    }
    :root {
      @keyframes fadeTop {
      0% {
        opacity: 0;
        transform: translateY(50px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
       
      }
    }
        --fw-200: 200;
        --fw-300: 300;
        --fw-400: 400;
        --fw-500: 500;
        --fw-600: 600;
        --color-1: #f7b231;
        --color-2:#cf8702;
        --white: #fff;
        --black: #0e0f0f;
        --gray: #b3b3b3;
        --red: #fa2828;
        --blue: #0588fa;
        --toastify-color-info: #f7b231;

        @keyframes fadeBottom {
      0% {
        opacity: 0;
        transform: translateY(-50px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  
  @keyframes bounceLeft {
	0% {
		animation-timing-function: ease-in;
		opacity: 0;
		transform: translateX(-250px);
	}

	38% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform: translateX(0);
	}

	55% {
		animation-timing-function: ease-in;
		transform: translateX(-68px);
	}

	72% {
		animation-timing-function: ease-out;
		transform: translateX(0);
	}

	81% {
		animation-timing-function: ease-in;
		transform: translateX(-28px);
	}

	90% {
		animation-timing-function: ease-out;
		transform: translateX(0);
	}

	95% {
		animation-timing-function: ease-in;
		transform: translateX(-8px);
	}

	100% {
		animation-timing-function: ease-out;
		transform: translateX(0);
	}

  
}
}
   body {
    width: 100%;
    height: 100dvh;
    overflow-x: hidden;
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
`;
