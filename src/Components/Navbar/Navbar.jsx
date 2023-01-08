import { MenuOpenOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Image,
  Right,
  Icon,
  RightContainer,
  MenuItem,
  Title,
  MobileContainer,
  LeftMobile,
  LeftLogo,
  Items,
  MenuItems,
} from "./Style/style";

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Logo>
              <Image src="images/2.jpg"></Image>
              <Title>Hagar</Title>
            </Logo>
          </Left>
          <Right>
            <RightContainer>
              <MenuItem>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? " mainBG txtFont" : "txtFont"
                  }
                >
                  Home
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  to="projects"
                  className={({ isActive }) =>
                    isActive ? "  mainBG txtFont" : "txtFont"
                  }
                >
                  Projects
                </NavLink>
              </MenuItem>
            </RightContainer>
          </Right>
        </Wrapper>
      </Container>

      <MobileContainer
        style={{
          height: isOpen ? " 160px" : "70px",
          transition: "all 0.5s ease",
        }}
      >
        <LeftMobile>
          <LeftLogo>
            <Image src="images/2.jpg"></Image>
          </LeftLogo>
          <Icon onClick={toggle}>
            <MenuOpenOutlined />
          </Icon>
        </LeftMobile>
        <Items
          style={{
            display: isOpen ? " block" : "none",
            transition: "all 0.5s ease",
          }}
        >
          <MenuItems>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? " mainBGM txtFont" : "txtFont"
              }
            >
              Home
            </NavLink>
          </MenuItems>
          <MenuItems>
            <NavLink
              to="projects"
              className={({ isActive }) =>
                isActive ? "  mainBG txtFont" : "txtFont"
              }
            >
              Projects
            </NavLink>
          </MenuItems>
        </Items>
      </MobileContainer>
    </>
  );
}
