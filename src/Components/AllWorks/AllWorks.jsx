import { CallMissedOutgoingOutlined } from "@mui/icons-material";
import React from "react";
import {
  Container,
  Title,
  Wrapper,
  HightLight,
  ContainerCard,
  Card,
  CardBtns,
  Btn,
  Icon,
  Image,
  ImageContainer,
} from "./style/style";
import { myWorks } from "../../Data.js";
export default function AllWorks() {
  return (
    <>
      <Container>
        <Title>
          <HightLight>All</HightLight> Projects
        </Title>
        <Wrapper>
          {myWorks.map((item) => (
            <ContainerCard key={item.id}>
              <ImageContainer>
                <Image img={item.img}></Image>
              </ImageContainer>
              <Card>
                <CardBtns>
                  <Btn color="#F9004D">{item.btn}</Btn>
                  <Btn color="#F9004D">{item.btn2}</Btn>
                  <Btn color="#F9004D">{item.btn3}</Btn>
                  {item.btn4 ? <Btn color="#F9004D">{item.btn4}</Btn> : ""}
                  {item.btn5 ? <Btn color="#F9004D">{item.btn5}</Btn> : ""}
                  <a href={item.link}>
                    <Icon>
                      <CallMissedOutgoingOutlined />
                    </Icon>
                  </a>
                </CardBtns>
              </Card>
            </ContainerCard>
          ))}
        </Wrapper>
      </Container>
    </>
  );
}
