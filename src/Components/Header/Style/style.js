import styled from "styled-components";



export const Container = styled.div`
min-height:90vh;
@media screen and (max-width:991px) {
    min-height:100vh;
}
`


export const Wrapper = styled.div`
width:90%;
display:flex;
justify-content:space-between;
align-items:center;
margin:auto;
border-bottom:1px solid #302d2d;
@media screen and (max-width:991px) {
    flex-direction:column;
    margin-top: 60px;
}
@media screen and (max-width:767px) {
    flex-direction:column;
    margin-top: 80px;
}`




export const Content = styled.div`
width:50%;
@media screen and (max-width:991px) {
    width: 100%;
}`




export const Title = styled.h3`
color:#C4CFD3;
letter-spacing:2px;
font-size:22px;
font-family: 'Montserrat', sans-serif;
font-weight:500;
margin: 0px 0 10px;
@media screen and (max-width:991px) {
   margin-bottom: 25px;
}
`



export const Name = styled.h2`
font-family: 'Montserrat', sans-serif;
font-weight:900;
font-size:55px;

@media screen and (max-width:991px) {
    font-size:50px;
    margin-bottom: 25px;
}
@media screen and (max-width:767px) {
    font-size:30px;
}
`


export const HighLight = styled.span`
font-family: 'Dancing Script', cursive;;
color:#F9004D;`


export const AnimationTitle = styled.h3`
font-family: 'Montserrat', sans-serif;
font-weight:500;
letter-spacing:1px;
margin:10px 0 20px;
@media screen and (max-width:991px) {
    font-size:25px;
    margin-bottom: 25px;
    
}
@media screen and (max-width:767px) {
    font-size:16px;
   
}`




export const Description = styled.p`
margin:20px 0 20px;
color:#c4cfde;
font-size:16px;
@media screen and (max-width:991px) {
    margin:30px 0 40px;
    line-height: 25px;
}
@media screen and (max-width:767px) {
    margin:30px 0 20px;
    line-height: 25px;
}`



export const Right = styled.div`
width:50%;
height:fit-content;
padding: 80px 0;
display:flex;
align-items:center;
justify-content:center;
@media screen and (max-width:991px) {
    width: 100%;
}
@media screen and (max-width:767px) {
    padding: 0px 0 0px;
    margin: 30px 0;
    width: 100%;
}`

export const ImageContainer = styled.div`
background-color:#202327;
box-shadow:  10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
width:53%;
display: flex;
align-items: center;
justify-content: center;
margin: 30px 0;
@media screen and (max-width:991px) {
    width: 95%;
}
`
export const Image = styled.img`
max-width:100%;
height: 250px;
transform:translateY(-15%);`


export const SocialTitle = styled.h4`
color:#C4CFD3;
padding: 20px 0 30px;
@media screen and (max-width:991px) {
    margin-top:30px;
}

`
export const Social = styled.div`
display:flex;
@media screen and (max-width:991px) {
    margin: 20px 0;
}
`


export const BtnContainer = styled.div`
background-color:#212428;
box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
padding: 10px;
width:50px;
height: 50px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
margin-left: 20px;
cursor: pointer;
transition: 1s all ease-in-out;
&:hover{
    background-color:#F9004D ;
}
`
