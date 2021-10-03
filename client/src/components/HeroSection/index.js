import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import {
  HeroContainer,
  HeroBG,
  VideoBG,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const { t, i18n } = useTranslation();

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBG>
        <VideoBG autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBG>
      <HeroContent>
        <HeroH1>{t('Trading made easy')}</HeroH1>
        {/* Add an animation for Easy to change to Modern, Elegant, Worldwide, Secure */}
        <HeroP>
          {t('Sign up for a new account today and receive up to $50 in free stocks.')}
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            {t('Get started')} {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
