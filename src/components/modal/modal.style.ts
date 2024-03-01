"use client"

import styled from "styled-components"

export const Overlay = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    justify-content: center;
`
export const Layout = styled.div`
   display: flex;
   justify-self: center;
   align-self: center;
`