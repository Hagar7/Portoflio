import styled from "styled-components";


export  const Container = styled.div`
height:80px;
box-shadow:  10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
@media screen and (max-width:991px) {
    display: none;
}
`
export const Wrapper = styled.div`
width:95%;
display:flex;
justify-content:space-between;
align-items: center;
`


export const Left = styled.div`
padding: 10px;
`



export const Logo = styled.div`
display:flex;
justify-content:space-between;
align-items:center;`




export const Image = styled.img`
width:55px;
height:55px;
border-radius: 50%;
`




export const Title = styled.h2`
font-family: 'Dancing Script', cursive;
margin-left:10px;`




export const Right = styled.div``


export const Icon = styled.div`
color:#fff;
padding: 10px;
cursor: pointer;
display: none;
@media screen and (max-width:991px) {
   display : block;
}
`

export const RightContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
@media screen and (max-width:767px) {
   flex-direction: column;
  
}`


export const MenuItem = styled.div`
margin-left:20px;
color:#fff;
@media screen and (max-width:767px) {
  display: none;
}
`
export const MobileContainer = styled.div`
height: 160px;
box-shadow:  10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
@media screen and (min-width:992px) {
   display:none ;
}`
export const LeftMobile = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:10px;`

export const LeftLogo = styled.div``
export const Items = styled.ul`
list-style:none;
`
export const MenuItems = styled.li`
padding: 10px 10px;
white-space:nowrap;
`
