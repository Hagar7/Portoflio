import styled, { keyframes } from "styled-components";


export  const show = keyframes`
   0% { opacity:0}
   50% { opacity:0.5}
   50% { opacity:1}
   100% { opacity:0}
  `
  export const Main = styled.div`
  transition:1s all ease-in-out;`


export const Container = styled.div`
width: 100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
position:fixed;
z-index: 1;
background: rgba(0, 0, 0, 0.834);
`


export const Title = styled.h2`
font-family: 'Dancing Script', cursive;
font-size:50px;
animation: ${show } 3s linear;
opacity: 0;
color: #F9004D;
`