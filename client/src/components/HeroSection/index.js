import React, {useState} from "react";
import { HeroContainer, HeroBG, VideoBG, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from "./HeroElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  
    return (
    <HeroContainer id="home">
      <HeroBG>
        <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBG>
      <HeroContent>
          <HeroH1>Trading Made Easy</HeroH1>
          {/* Add an animation for Easy to change to Modern, Elegant, Worldwide, Secure */}
          <HeroP>
              Sign up for a new account today and receive $250 in credit towards your next payment.
          </HeroP>
          <HeroBtnWrapper>
              <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                  Get started {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
          </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
