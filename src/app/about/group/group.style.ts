"use client"

import styled from "styled-components"

export const StyledGroupMainPage = styled.main`
    display: flex;
    flex-direction: column;
    .group-title {
        background: url("https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
        background-size: cover;
        background-attachment: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 25rem;
        gap: 1rem;
        h1 {
            font-size: 35px;
            color: var(--color-2);
        }
    }
    .group-list {
        display: flex;
        flex-direction: column;
        padding: 4rem 5dvw;
        width: 100%;
        ul {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
            align-items: center;
            gap: 3rem;
            li {
                align-items: center;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                max-width: 20rem;
                
                padding: 2rem;
                border: 1px solid var(--gray);
                h3 {
                    color: var(--color-2);
                }
                img {
                    max-width: 15rem;
                }
                
            }
        }
    }
`