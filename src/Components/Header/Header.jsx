import { EmailOutlined, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import Typewriter from "typewriter-effect";
import {
  Container,
  Wrapper,
  Content,
  Title,
  Name,
  HighLight,
  AnimationTitle,
  Description,
  Right,
  Image,
  ImageContainer,
  Social,
  SocialTitle,
  BtnContainer,
} from "./Style/style";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Welcome to my Portoflio</Title>
          <Name>
            Hi, i'm <HighLight>Hagar Ahmed</HighLight>
          </Name>
          <AnimationTitle>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["a React Developer"],
              }}
            />{" "}
          </AnimationTitle>
          <Description>
            I am a Front End developer with industry experience building
            websites and web applications. I specialize in JavaScript and have
            professional experience working with React.js. I also have
            experience working with WordPress.
          </Description>
          <SocialTitle>Follow Me</SocialTitle>
          <Social>
            <BtnContainer>
              <a href="https://www.linkedin.com/in/hagar-ahmed-83119a54">
                <LinkedIn />
              </a>
            </BtnContainer>
            <BtnContainer>
              <a href="https://github.com/Hagar7">
                <GitHub />
              </a>
            </BtnContainer>
            <BtnContainer>
              <a href="mailto:hagar_s_ahmed@hotmail.com">
                <EmailOutlined />
              </a>
            </BtnContainer>
          </Social>
        </Content>
        <Right>
          <ImageContainer>
            <Image src="images/photo1.png"></Image>
          </ImageContainer>
        </Right>
      </Wrapper>
    </Container>
  );
}
