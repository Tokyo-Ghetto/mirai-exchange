/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import StockPageChart from "../StockPageChart/index";
import {
  StockContainer,
  StockWrapper,
  StockDetailContainer,
  StockTitle,
  StockChart,
  StockDetailSubtitle,
  StockDetailTitle,
  StockDetailWrapper,
  StockBuyButton,
  StockPercent,
  StockPrice,
  StockSellButton,
  StockTradeContainer,
  StockTradeWrapper,
  StockBodyContainer,
  StockTitleContainer,
} from "./StockElements";

const Stock = () => {
  const stockList = [];
  const { symbol } = useParams();

  const [stockData, setStockData] = useState("...");
  const [isLoading, setLoading] = useState(true);

  const stockURL = `http://localhost:9000/stocks/${symbol}/full`;

  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(2) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(2) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T";
  };

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
          setLoading(false);
        });
      }
    });
  }

  useEffect(() => {
    createStockData();
  }, []);


  if (isLoading === true) {
    return (
      <StockContainer>
        <StockWrapper></StockWrapper>
      </StockContainer>
    );
  } else {
    return (
      <>
        <StockContainer>
          <StockWrapper>
            <StockTitleContainer>
              <StockTitle>{stockData[1].ticker}</StockTitle>
            </StockTitleContainer>
            <StockBodyContainer>
              <StockChart>
                <StockPageChart></StockPageChart>
              </StockChart>
              <StockTradeContainer>
                <StockTradeWrapper>
                  <StockPrice>
                    {stockData[0].c
                      ? stockData[0].c.toFixed(2)
                      : stockData[0].c}
                    $
                  </StockPrice>
                  <StockPercent
                    percentColor={stockData[0].dp >= 0 ? true : false}
                  >
                    {stockData[0].dp
                      ? stockData[0].dp.toFixed(2)
                      : stockData[0].dp}
                    %
                  </StockPercent>
                  <StockBuyButton>BUY</StockBuyButton>
                  <StockSellButton>SELL</StockSellButton>
                </StockTradeWrapper>
              </StockTradeContainer>
            </StockBodyContainer>
            <StockDetailContainer>
              <StockDetailWrapper>
                <StockDetailTitle>Market Cap</StockDetailTitle>
                <StockDetailSubtitle>
                  {formatCash(
                    stockData[0].c * stockData[1].shareOutstanding * 1000000
                  )}
                </StockDetailSubtitle>
              </StockDetailWrapper>
              <StockDetailWrapper>
                <StockDetailTitle>52 week Low</StockDetailTitle>
                <StockDetailSubtitle>
                  {stockData[2].metric["52WeekLow"]}$
                </StockDetailSubtitle>
              </StockDetailWrapper>
              <StockDetailWrapper>
                <StockDetailTitle>52 week High</StockDetailTitle>
                <StockDetailSubtitle>
                  {stockData[2].metric["52WeekHigh"]}$
                </StockDetailSubtitle>
              </StockDetailWrapper>
              <StockDetailWrapper>
                <StockDetailTitle>YTD Change</StockDetailTitle>
                <StockDetailSubtitle>
                  {stockData[2].metric.yearToDatePriceReturnDaily.toFixed(2)}%
                </StockDetailSubtitle>
              </StockDetailWrapper>
              <StockDetailWrapper>
                <StockDetailTitle>Avg. Volume</StockDetailTitle>
                <StockDetailSubtitle>
                  {stockData[2].metric["10DayAverageTradingVolume"].toFixed(2)}M
                </StockDetailSubtitle>
              </StockDetailWrapper>
            </StockDetailContainer>
            {/* <Test>{GetStockCard("AAPL")}</Test> */}
          </StockWrapper>
        </StockContainer>
      </>
    );
  }
};

export default Stock;
