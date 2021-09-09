import React from "react";
import {
  HomeContainer,
  HomeWrapper,
  HomeCard,
  HomeCardName,
  HomeCardPrice,
  HomeCardSymbol,
  HomeCardPercent,
  HomeCardPriceWrapper,
} from "./HomeExchangeElements";

const HomeExchange = () => {
  return (
    <>
      <HomeContainer>
        <HomeWrapper>
          <HomeCard>
            <HomeCardSymbol>AAPL</HomeCardSymbol>
            <HomeCardPriceWrapper>
              <HomeCardPrice>155.88</HomeCardPrice>
              <HomeCardPercent>0.32%</HomeCardPercent>
            </HomeCardPriceWrapper>
            <HomeCardName>Apple Inc</HomeCardName>
          </HomeCard>
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};

export default HomeExchange;
