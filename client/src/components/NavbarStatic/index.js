import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
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
  NavLogoImg
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import MiraiLogo from '../../images/logo.png'

const NavbarStatic = ({ toggle }) => {
  const { t, i18n } = useTranslation();

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <NavLogoImg src={MiraiLogo}/>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {t('About')}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {t('Discover')}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="Pricing"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {t('Pricing')}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {t('Sign Up')}
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink
                to="/signin"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {t('Sign In')}
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavbarStatic;
