/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  HomeContainer,
  HomeWrapper,
  // eslint-disable-next-line no-unused-vars
  HomeCard,
  HomeCardName,
  HomeCardPrice,
  HomeCardSymbol,
  HomeCardPercent,
  HomeCardPriceWrapper,
  Test,
} from "./HomeExchangeElements";
import { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme} from './../../themes'

const HomeExchange = () => {
  const stockList = [
    "AMGN",
    "AAPL",
    "MSFT",
    "GOOG",
    "AMZN",
    "FB",
    "CTAS",
    "TSLA",
    "MCHP",
    "BBIG",
    "NVDA",
    "JPM",
    "V",
    "IDXX",
  ];

  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const GetStockCard = (stock) => {
    const [stockData, setStockData] = useState("...");

    const stockURL = `http://localhost:9000/stocks/${stock}`;

    async function createStockData() {
      fetch(stockURL, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }).then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            setStockData(json);
            console.log(stockData);
          });
        }
      });
    }

    useEffect(() => {
      createStockData();
    }, []);

    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <HomeCard id={stock} to={`/stocks/${stock}`}>
          <HomeCardSymbol>{stockData[1].ticker}</HomeCardSymbol>
          <HomeCardPriceWrapper>
            <HomeCardPrice>
              {stockData[0].c ? stockData[0].c.toFixed(2) : stockData[0].c}
            </HomeCardPrice>
            <HomeCardPercent percentColor={stockData[0].dp >= 0 ? true : false}>
              {stockData[0].dp ? stockData[0].dp.toFixed(2) : stockData[0].dp}%
            </HomeCardPercent>
          </HomeCardPriceWrapper>
          <HomeCardName>{stockData[1].name}</HomeCardName>
        </HomeCard>
      </ThemeProvider>
    );
  };

  let cardsArray = [];
  const GetCards = () => {
    for (let i = 0; i <= stockList.length - 1; i++) {
      cardsArray.push(GetStockCard(stockList[i]));
    }
    return cardsArray;
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <HomeContainer>
        <HomeWrapper>{GetCards()}</HomeWrapper>
      </HomeContainer>
    </ThemeProvider>
  );
};

export default HomeExchange;
