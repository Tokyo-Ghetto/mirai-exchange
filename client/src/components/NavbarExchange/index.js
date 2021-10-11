import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLogoImg,
  NavBtnTheme,
  NavBtnContainer
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import MiraiLogo from "../../images/logo.png";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./../../themes";

const NavbarExchange = ({ toggle }) => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const themeToggler = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
    window.location.reload();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/home" onClick={toggleHome}>
              <NavLogoImg src={MiraiLogo} />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              {/* <NavItem>
                <NavLinks
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="hot40"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Hot 40
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="category"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Category
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="search"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Search
                </NavLinks>
              </NavItem> */}
            </NavMenu>
            <NavBtnContainer>
            <NavBtn>
              <NavBtnLink
                to="/profile"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {t("Profile")}
              </NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnTheme onClick={() => themeToggler()}>
              {t('CHANGE THEME')}
              </NavBtnTheme>
            </NavBtn>
            </NavBtnContainer>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavbarExchange;
