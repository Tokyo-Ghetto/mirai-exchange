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
  const stockList = ["NVDA"];

  const GetStockCard = (stock) => {
    const [stockData, setStockData] = useState({});

    const stockURL = `http://localhost:9000/stocks/${stock}`;

    // const stockJSON = (fetch(stockURL).then(res => res.json()).then(data => console.log(data)))

    async function createStockData() {
        let response = await fetch(stockURL)
        let data = await response.json()
        setStockData(data)
        console.log(stockData)
    }

    useEffect(() => {
        createStockData()
    },[])



    return (
      <HomeCard>
        <HomeCardSymbol>{stockData[1].ticker}</HomeCardSymbol>
        <HomeCardPriceWrapper>
          <HomeCardPrice>{stockData[0].c.toFixed(2)}</HomeCardPrice>
          <HomeCardPercent percentColor={stockData[0].dp >= 0 ? true : false}>
          {stockData[0].dp.toFixed(2)}%
          </HomeCardPercent>
        </HomeCardPriceWrapper>
        <HomeCardName>{stockData[1].name}</HomeCardName>
      </HomeCard>
    );
  };

  // let prueba = [];
  // const GetCards = () => {
  //   for (let i = 0; i <= stockList.length - 1; i++) {
  //     prueba.push(GetStockCard(stockList[i]));
  //   }
  //   return prueba;
  // };

  return (
    <>
      <HomeContainer>
        <HomeWrapper>{GetStockCard("NVDA")}</HomeWrapper>
      </HomeContainer>
    </>
  );
};


export default HomeExchange;
