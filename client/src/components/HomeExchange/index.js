/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
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
import { useState } from "react";

const HomeExchange = () => {
  const stockList = ["AMGN", "AAPL", "MSFT", "GOOG", "AMZN", "FB", "CTAS", "TSLA", "MCHP", "BBIG", "NVDA", "JPM", "V", "IDXX"];

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
      <HomeCard id={stock} to={`/stocks/${stock}`}>
        <HomeCardSymbol>{stockData[1].ticker}</HomeCardSymbol>
        <HomeCardPriceWrapper>
          <HomeCardPrice>{(stockData[0].c) ? stockData[0].c.toFixed(2) : stockData[0].c}</HomeCardPrice>
          <HomeCardPercent percentColor={stockData[0].dp >= 0 ? true : false}>
            {(stockData[0].dp) ? stockData[0].dp.toFixed(2) : stockData[0].dp}%
          </HomeCardPercent>
        </HomeCardPriceWrapper>
        <HomeCardName>{stockData[1].name}</HomeCardName>
      </HomeCard>
    );
  };

  let prueba = [];
  const GetCards = () => {
    for (let i = 0; i <= stockList.length - 1; i++) {
      prueba.push(GetStockCard(stockList[i]));
    }
    return prueba;
  };

  return (
    <>
      <HomeContainer>
        <HomeWrapper>{GetCards()}</HomeWrapper>
      </HomeContainer>
    </>
  );
};

export default HomeExchange;
