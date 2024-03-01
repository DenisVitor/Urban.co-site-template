"use client";

import styled from "styled-components";

export const ItemLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20rem;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
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

export const CommentaryModal = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--white);
  padding: 3rem;
  width: 40dvw;
  span {
    font-weight: var(--fw-600);
    color: var(--gray);
  }
  @media screen and (width <= 830px) {
    width: 80dvw;
    height: 90dvh;
    overflow: auto;
  }


  .commentary-title {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 5px solid var(--gray);
    h1 {
      font-size: 18px;
      color: var(--color-1);
    }
    button {
      font-size: 20px;
      font-weight: var(--fw-600);
      background: transparent;
      color: var(--color-2);
      cursor: pointer;
      transition: 0.1s ease;
      &:hover {
        color: var(--color-1);
      }
      &:active {
        color: var(--gray);
      }
    }
  }
  .commentary-input {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding-bottom: 3rem;
    border-bottom: 5px solid var(--color-1);
    span {
      font-size: 18px;
    }
    textarea {
      border-color: var(--color-2);
      outline: none;
      padding: 0.5rem;
    }
  }
  .post-comment {
    display: flex;
    font-size: 15px;
    font-weight: var(--fw-600);
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 25px;
    background-color: var(--color-1);
    color: var(--white);
    cursor: pointer;
    transition: 0.1s ease;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 1px 2px 5px darkgray;
      background-color: var(--color-2);
    }
    &:active {
      transform: translateY(0px);
      box-shadow: none;
      background-color: var(--black);
      color: var(--white);
    }
    &:disable {
      cursor: not-allowed;
      opacity: 0.7;
      &:hover {
        transform: none;
        box-shadow: none;
        background-color: var(--color-1);
      }
    }
  }
  .commentary-select {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 3rem;
    border-bottom: 5px solid var(--color-1);
    span {
      font-size: 18px;
    }
    select {
      padding: 1rem;
      font-size: 17px;
      border-color: var(--color-2);
      outline: none;
    }
  }
`;

export const StyledItemMainPage = styled.section`
  display: flex;
  padding: 2rem 5dvw;
  background-color: rgba(237, 237, 237, 0.9);
  gap: 2rem;
  @media screen and (width <= 1180px) {
    flex-direction: column;
    .img-sec {
      flex-direction: column;
    }
  }
  .buy-button {
    display: flex;
    font-size: 19px;
    font-weight: var(--fw-600);
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin: 2rem 0;
    border-radius: 25px;
    background-color: var(--color-1);
    color: var(--white);
    cursor: pointer;
    transition: 0.1s ease;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 1px 2px 5px darkgray;
      background-color: var(--color-2);
    }
    &:active {
      transform: translateY(0px);
      box-shadow: none;
      background-color: var(--black);
      color: var(--white);
    }
  }
  .img-sec {
    display: flex;
    height: 40rem;
    @media screen and (width <= 1180px){
      height: 44rem;
    }
    .img-screen {
      background-color: var(--white);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      @media screen and (width <= 1180px){
           margin-bottom: 1rem;
            
        }
      .img-screen_img {
        max-width: 30rem;
        
        @media screen and (width <= 500px){
            width: 90%;
            
        }
      }
    }
    .img-list {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow-y: hidden;
      scroll-behavior: smooth;
      scroll-snap-stop: always;
      scroll-snap-type: y mandatory;
      gap: 1rem;

      &::-webkit-scrollbar {
        appearance: none;
      }
      &::-webkit-scrollbar-thumb {
        appearance: none;
      }
      .not-selected {
        opacity: 0.8;
        background-color: rgba(245, 170, 49, 0.3);
      }
      img {
        transition: 0.2s ease;
        max-width: 8rem;
        scroll-snap-align: start;
        image-rendering: optimizeQuality;
        background-color: var(--white);
        cursor: pointer;
      }
      @media screen and (width <= 1180px) {
        flex-direction: row;
        order: 2;
        gap: 3rem;
        height: 15rem;
      }
    }
  }
  .item-data {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.7rem;
    background-color: var(--white);
    padding: 1rem;
    #item-price {
      font-size: 17px;
    }
    #item-title {
      font-weight: var(--fw-400);
      color: var(--color-2);
    }
    .item-data_links {
      display: flex;
      a {
        all: unset;
        cursor: pointer;
        transition: 0.1s ease;
        &:hover {
          color: var(--color-1);
        }
      }
    }
    .item-type {
      color: var(--gray);
      font-weight: var(--fw-600);
      border-left: 4px solid var(--gray);
      padding-left: 0.3rem;
    }
    .item-rating {
      margin-top: 1rem;
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      .item-rating_stars {
        display: flex;
        gap: 1rem;
        align-items: center;
        p {
          font-weight: var(--fw-600);
        }
        .on {
          color: var(--color-1);
        }
        .off {
          color: var(--gray);
        }
        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
    .item-lorem {
      color: var(--gray);
      padding: 1rem 0;
      max-height: 5rem;
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
    .item-size {
      display: flex;
      align-items: center;
      gap: 1rem;

      .item-size_text {
        color: var(--gray);
        font-weight: var(--fw-600);
        height: 3rem;
        text-align: center;
        gap: 0.3rem;
        display: flex;
        justify-content: center;
        align-items: start;
        padding-top: 0.4rem;
        width: 4rem;
        span {
          color: var(--color-2);
          font-weight: var(--fw-600);
          width: 2rem;
        }
      }
      .item-sizes_inputs {
        height: 3rem;
        display: flex;
        gap: 1rem;
        @media screen and (width <= 500px) {
          overflow: auto;
          label {
            width: 4.25rem;
            height: 3rem;
            padding: 0 0.5rem;
          }
        }
        .marked {
          border-color: var(--black);
        }
        label {
          position: relative;
          display: flex;
          width: 2rem;
          height: 2rem;
          background: transparent;
          border: 3px solid var(--gray);
          border-radius: 50%;
          cursor: pointer;
          transition: 0.2s ease;
          &:hover {
            border-color: var(--color-1);
          }
          p {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            text-align: center;
            border-radius: 50%;
            font-size: 14px;
            font-weight: var(--fw-600);
          }
          input {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
          }
        }
      }
    }
    .item-counter {
      display: flex;
      gap: 2rem;
      align-items: center;
      div {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: var(--fw-600);
        font-size: 1.2rem;
        border: 3px solid var(--gray);
        border-radius: 20px;
        span {
          user-select: none;
        }
        #value {
          width: 2rem;
        }
        #minus {
          cursor: pointer;
          transition: 0.1s ease;
          width: 100%;
          height: 100%;
          padding: 0.2rem 0.6rem;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          &:hover {
            background-color: var(--color-1);
          }
          &:active {
            background-color: var(--black);
            color: var(--white);
          }
        }
      }
      #plus {
        cursor: pointer;
        transition: 0.1s ease;
        width: 100%;
        height: 100%;
        padding: 0.2rem 0.6rem;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        &:hover {
          background-color: var(--color-1);
        }
        &:active {
          background-color: var(--black);
          color: var(--white);
        }
      }
    }
    .item-counter_text {
      font-weight: var(--fw-600);
      color: var(--gray);
      width: 7rem;
      span {
        color: var(--color-2);
        font-weight: var(--fw-600);
      }
    }
    .item-categories {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      @media screen and (width <= 525px) {
        flex-wrap: wrap;
      }
      p {
        display: flex;
        width: 100%;
        justify-content: center;
        border: 1px solid var(--gray);
        padding: 1rem 0;
        gap: 1rem;
        font-weight: var(--fw-600);
        span {
          color: var(--color-2);
        }
      }
    }
  }
`;

export const CommentarySec = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 6rem 0;
  @media screen and (width <= 750px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  
  }
  .logged-button_list {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    width: 100%;
    align-items: flex-end;
    button {
      all: unset;
    }
    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: var(--color-2);
      transition: 0.1s ease;
      cursor: pointer;
      &:hover {
        color: var(--color-1);
      }
      &:active {
        color: var(--black);
      }
    }
  }
  h1 {
    font-size: 2rem;
    display: flex;
    gap: 1rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-weight: var(--fw-300);
    margin: 2rem 0;
    color: var(--color-1);
    .about-title_line {
      border: 1px solid var(--gray);
      width: 100%;
    }
    span {
      color: var(--color-1);
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 60%;
    overflow-y: auto;
    height: 20rem;
    @media screen and (width <= 750px) {
      width: 100%;
      li {
        height: auto;
      }
    }
    &::-webkit-scrollbar {
      appearance: none;
      background-color: var(--gray);
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
    display: flex;
    height: 6rem;
    align-items: center;
    gap: 1rem;
    border: 1px solid var(--gray);
    padding: 1rem;
    margin: 0 1rem;
    .item-data_text {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .person-svg {
      width: 3rem;
      height: 3rem;
      color: var(--gray);
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
  }
  .commentary-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20rem;
    gap: 1rem;
    width: 40%;
    border: 1px solid;
    border-color: var(--gray);
    @media screen and (width <= 750px) {
      width: 100%;
    }
    h2 {
      font-size: 40px;
      color: var(--color-2);
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
      &:hover {
        background-color: var(--black);
      }
      &:active {
        background-color: var(--white);
        color: var(--black);
        border: 1px solid var(--black);
      }
    }
    .item-rating {
      display: flex;
      gap: 5px;
      align-items: center;
      flex-direction: column;
      text-align: center;
      font-weight: var(--fw-600);
      justify-content: center;

      .on {
        color: var(--color-1);
      }
      .off {
        color: var(--gray);
      }
      #stars {
        display: flex;
        gap: 1rem;
        svg {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
`;

export const ToggleComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 5dvw;
  gap: 2rem;
  margin-bottom: 6rem;
  h1 {
    font-size: 2rem;
    display: flex;
    gap: 1rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-weight: var(--fw-300);
    color: var(--color-1);
    .about-title_line {
      border: 1px solid var(--gray);
      width: 100%;
    }
  }
  .button-container {
    display: flex;
    gap: 0.3rem;
    background-color: var(--white);
    width: 100%;
    height: 8rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .activated {
      background-color: var(--black);
    }
    #button-right {
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
    }
    #button-left {
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
    button {
      font-size: 20px;
      padding: 0.5rem;
      width: 14rem;
      height: fit-content;
      background-color: var(--color-1);
      color: var(--white);
      cursor: pointer;
      transition: 0.1s ease;
      border: 1px solid transparent;
      &:hover {
        background-color: var(--white);
        color: var(--black);
        border: 1px solid var(--gray);
      }
    }
    @media screen and (width <= 490px) {
      #button-right {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      #button-left {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }

  .content-container {
    display: none;
    padding: 0.3rem;
    &.active {
      display: flex;
      width: 100%;
    }
    .content {
      width: 100%;
    }
  }
   .content-desc_two {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      width: 100%;
      text-align: center;
    }
  }
  .content-desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    h2 {
      color: var(--color-2);
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      table {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        tbody {
          display: flex;
          flex-direction: column;
          width: 100%;
          justify-content: center;
          @media screen and (width <= 1020px) {
            display: none;
          }
          align-items: center;
        }
        .td-titles {
          td {
            font-weight: var(--fw-600);
            color: var(--color-2);
            border-color: var(--black);
          }
        }
        tr {
          gap: 0.3rem;
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          td {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            border: 1px solid;
            margin: 0.3rem 0;
            padding: 1rem;
            font-weight: var(--fw-600);
          }
        }
      }
    }
  }
`;

export const DeleteModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: var(--white);
  width: clamp(20rem, 80dvw, 90dvw);
  align-items: center;
  gap: 4rem;
  h1 {
    color: var(--color-2);
    width: 100%;
    border-bottom: 3px solid var(--gray);
    text-align: center;
    padding-bottom: 1rem;
  }
  .modal-delete_buttons {
    display: flex;
    gap: 2rem;
    button {
      padding: 1rem 1.6rem;
      font-size: 17px;
      font-weight: var(--fw-600);
    }
    #button_one {
      background-color: var(--color-2);
      color: var(--white);
      cursor: pointer;
      transition: 0.1s ease;
      &:hover {
        background-color: var(--color-1);
      }
      &:active {
        background-color: var(--black);
      }
    }
    #button_two {
      background-color: var(--black);
      color: var(--white);
      cursor: pointer;
      transition: 0.1s ease;
      &:hover {
        background-color: var(--color-1);
      }
      &:active {
        background-color: var(--white);
        color: var(--black);
      }
    }
  }
`;
