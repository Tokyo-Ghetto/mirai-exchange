import React from "react";
import { useTranslation } from "react-i18next";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import {
  PricingContainer,
  PricingCard,
  PricingH1,
  PricingH2,
  PricingIcon,
  PricingP,
  PricingWrapper,
} from "./PricingElements";

const Pricing = () => {
  const { t, i18n } = useTranslation();

  return (
    <PricingContainer id="Pricing">
      <PricingH1>{t("Our Benefits")}</PricingH1>
      <PricingWrapper>
        <PricingCard>
          <PricingIcon src={Icon1} />
          <PricingH2>{t("No comissions")}</PricingH2>
          <PricingP>
            {t("Investing is no longer a  luxury. Anyone can trade with Mirai.")}
          </PricingP>
        </PricingCard>
        <PricingCard>
          <PricingIcon src={Icon2} />
          <PricingH2>{t("Virtual Offices")}</PricingH2>
          <PricingP>
            {t("You can access our platform online anywhere in the world.")}
          </PricingP>
        </PricingCard>
        <PricingCard>
          <PricingIcon src={Icon3} />
          <PricingH2>{t("Premium Benefits")}</PricingH2>
          <PricingP>
            {t("Unlock our special membership card that returns 5% cash back.")}
          </PricingP>
        </PricingCard>
      </PricingWrapper>
    </PricingContainer>
  );
};

export default Pricing;
