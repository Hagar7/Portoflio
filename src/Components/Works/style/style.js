import styled from "styled-components";
export const Container = styled.div`
min-height:100vh;
width:90%;
margin:auto;
padding:30px 0;
border-bottom:1px solid #302d2d;`



export const Title = styled.h2`
font-size:40px;
margin-bottom:30px;`


export const HightLight = styled.span`
color:#F9004D;`



export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
width:100%;
`


export const Card = styled.div`
background-color: #3b3b3b;
position: absolute;
bottom:0%;
z-index: 1;
width: 100%;
padding: 5px 2px;
left: 50%;
transform: translateX(-50%);
transition: 0.5s all ease;
opacity: 0;
margin-top: 15px;

`
export const ContainerCard = styled.div`
position: relative;
background-color: #202327;
width: 30%;
margin: 20px;
box-shadow:  10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
display:flex;
justify-content:center;
align-items:center;
transition: 1s all ease;

&:hover {
    transform: translateY(-10%);
}
&:hover ${Card}{
    opacity: 1;
}
@media screen and (max-width:991px) {
  width: 40%;
  margin:20px auto;
}
@media screen and (max-width:767px) {
    width: 100%;
}
`
export const ImageContainer = styled.div`
overflow:hidden;
height:300px;
`

export const Image = styled.img`
background-image: url(${props => props.img});
background-size: cover;
transform: translateX(-50%);
border-radius: 5px;
border: 5px solid #3b3b3b;
top:0;
position: absolute;
width:100%;
height: 100%;
background-position: top;
transition: 05s all ease;
&:hover{
background-position: bottom;
}

`





export const CardBtns = styled.div`
display:flex;
flex-wrap: wrap;
align-items:center;
justify-content:center;`



export const Btn = styled.button`
background-color:${props=>props.color};
color:#fff;
padding:7px;
border-radius:5px;
margin:0 2px;
border:1px solid transparent;`

export const Icon = styled.div`
background-color:#F9004D;
padding:10px;
height:50px;
width:50px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
cursor: pointer;
margin:5px;`



