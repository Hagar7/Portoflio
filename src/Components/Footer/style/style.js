import styled from "styled-components";


export const Container = styled.div`
width:90%;
margin:auto;`

export const Wrapper = styled.div`
padding: 30px 0;
display:flex;
justify-content:space-between;
align-items:center;
@media screen and (max-width:991px) {
    flex-direction: column;
}`


export const Left = styled.div`
width:30%;
@media screen and (max-width:991px) {
    width: 95%;
}`


export const Title = styled.h2`
font-family: 'Dancing Script', cursive;
font-size: 40px;
color:#fff;
@media screen and (max-width:991px) {
   text-align:center;
   margin: 20px 0;
}`


export const Center = styled.div`
width:30%;
@media screen and (max-width:991px) {
    width: 95%;
}`


export const Links = styled.ul`
display:flex;
align-items:center;
justify-content:center;`
export const Item = styled.li`
height:50px;
width:50px;
border-radius:10px;
background-color:#212428;
box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
display:flex;
align-items:center;
justify-content:center;
padding: 10px;
margin-right: 10px;
transition: 1s all ease;
&:hover{
    background-color:#F9004D ;
}
`


export const Right= styled.div`
width:30%;
display:flex;
justify-content:center;
align-items:center;
@media screen and (max-width:991px) {
    width: 95%;
}`

export const RightIcon = styled.div`
height:50px;
width:50px;
border-radius:50%;
background-color:#F9004D;
display:flex;
align-items:center;
justify-content:center;
margin-right:10px;`

export const RightContent = styled.div`
font-size:18px;`

