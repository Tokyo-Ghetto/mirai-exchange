import React from "react";
import { useTranslation } from 'react-i18next';
import { animateScroll as scroll } from "react-scroll";
import {
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMediaWrap,
  SocialMedia,
  WebsiteRights,
  SocialLogoImg,
  FooterLanguage
} from "./FooterElements";
import MiraiLogo from '../../images/logo.png'

const Footer = () => {
  const { t, i18n } = useTranslation();
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{t('About us')}</FooterLinkTitle>
              <FooterLink to="/signin">{t('How it works')}</FooterLink>
              <FooterLink to="/signin">{t('Testimonials')}</FooterLink>
              <FooterLink to="/signin">{t('Careers')}</FooterLink>
              <FooterLink to="/signin">{t('Investors')}</FooterLink>
              <FooterLink to="/signin">{t('Terms of Service')}</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{t('Contact Us')}</FooterLinkTitle>
              <FooterLink to="/signin">{t('Contact')}</FooterLink>
              <FooterLink to="/signin">{t('Support')}</FooterLink>
              <FooterLink to="/signin">{t('Sponsorships')}</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{t('Social Media')}</FooterLinkTitle>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Youtube</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
              <FooterLink to="/signin">Linkedin</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{t('Language')}</FooterLinkTitle>
              <FooterLanguage onClick={() => handleClick('en')}>English</FooterLanguage>
              <FooterLanguage onClick={() => handleClick('es')}>Español</FooterLanguage>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <SocialLogoImg src={MiraiLogo}/>
            </SocialLogo>
            <WebsiteRights>
              Mirai Exchange © {new Date().getFullYear()} {t('All rights reserved')}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.facebook.com/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//www.youtube.com/"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
