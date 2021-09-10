import React, { useEffect } from "react";
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
import { useState } from "react";

const HomeExchange = () => {
  const [symbol, setSymbol] = useState("...");
  const [price, setPrice] = useState("...");
  const [percent, setPercent] = useState("...");
  const [name, setName] = useState("...");

  const stockList = ["TSLA", "AMZN", "AMD", "NVDA", "JNJ"]

  useEffect(() => {
    fetch("http://localhost:9000/stocks/JNJ")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(typeof data);

        setSymbol(data[1].ticker.toString());
        setPrice(data[0].c.toFixed(2));
        setPercent(data[0].dp.toFixed(2));
        setName(data[1].name.toString());
      });
  }, []);

  const getStockCards = () => {
    return (
      <HomeCard stock={"TSLA"}>
            <HomeCardSymbol>{symbol}</HomeCardSymbol>
            <HomeCardPriceWrapper>
              <HomeCardPrice>{price}</HomeCardPrice>
              <HomeCardPercent percentColor={percent >= 0 ? true : false}>
                {percent}%
              </HomeCardPercent>
            </HomeCardPriceWrapper>
            <HomeCardName>{name}</HomeCardName>
          </HomeCard>
    )
  }

  return (
    <>
      <HomeContainer>
        <HomeWrapper>
          {/* <HomeCard stock={"TSLA"}>
            <HomeCardSymbol>{symbol}</HomeCardSymbol>
            <HomeCardPriceWrapper>
              <HomeCardPrice>{price}</HomeCardPrice>
              <HomeCardPercent percentColor={percent >= 0 ? true : false}>
                {percent}%
              </HomeCardPercent>
            </HomeCardPriceWrapper>
            <HomeCardName>{name}</HomeCardName>
          </HomeCard> */}
          {getStockCards()}
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};

export default HomeExchange;
