import { EmailOutlined, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import {
  Container,
  Wrapper,
  Left,
  Title,
  Center,
  Links,
  Item,
  Right,
  RightIcon,
  RightContent,
} from "./style/style";
export default function Footer() {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Title>Hagar Ahmed</Title>
          </Left>
          <Center>
            <Links>
              <Item>
                <a href="https://www.linkedin.com/in/hagar-ahmed-83119a54">
                  <LinkedIn />
                </a>
              </Item>
              <Item>
                <a href="https://github.com/Hagar7">
                  <GitHub />
                </a>
              </Item>
              <Item>
                <a href="mailto:hagar_s_ahmed@hotmail.com">
                  <EmailOutlined />
                </a>
              </Item>
            </Links>
          </Center>
          <Right>
            <RightIcon>
              <EmailOutlined />
            </RightIcon>
            <RightContent>hagar_s_ahmed@hotmail.com</RightContent>
          </Right>
        </Wrapper>
      </Container>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3b3b3b" fill-opacity="1" d="M0,224L34.3,240C68.6,256,137,288,206,266.7C274.3,245,343,171,411,160C480,149,549,203,617,234.7C685.7,267,754,277,823,266.7C891.4,256,960,224,1029,224C1097.1,224,1166,256,1234,234.7C1302.9,213,1371,139,1406,101.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg> */}
    </>
  );
}
