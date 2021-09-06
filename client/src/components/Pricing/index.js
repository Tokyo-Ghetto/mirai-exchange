import React from "react";
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { PricingContainer, PricingCard, PricingH1, PricingH2, PricingIcon, PricingP, PricingWrapper  } from "./PricingElements";

const Pricing = () => {
  return (
    <PricingContainer id="Pricing">
      <PricingH1>Our Pricing</PricingH1>
      <PricingWrapper>
        <PricingCard>
          <PricingIcon src={Icon1} />
          <PricingH2>No comissions</PricingH2>
          <PricingP>
           Investing is no longer a  luxury. Anyone can trade with Mirai.
          </PricingP>
        </PricingCard>
        <PricingCard>
          <PricingIcon src={Icon2} />
          <PricingH2>Virtual Offices</PricingH2>
          <PricingP> 
            You can access our platform online anywhere in the world.
          </PricingP>
        </PricingCard>
        <PricingCard>
          <PricingIcon src={Icon3} />
          <PricingH2>Premium Benefits</PricingH2>
          <PricingP>
            Unlock our special membership card that returns 5% cash back.
          </PricingP>
        </PricingCard>
      </PricingWrapper>
    </PricingContainer>
  );
};

export default Pricing;
