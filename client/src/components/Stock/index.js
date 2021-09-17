/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import StockPageChart from "../StockPageChart/index";
import Modal from "styled-react-modal";
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
  StockModal,
  StockModalPrice,
  StockModalQuantityTitle,
  StockModalQuantityInput,
  StockModalQuantityWrapper,
  StockModalTitle,
  StockModalWrapper,
  StockModalButton,
  StockModalInfo,
} from "./StockElements";

const Stock = () => {
  const stockList = [];
  const { symbol } = useParams();

  const [stockData, setStockData] = useState("...");
  const [candleData, setCandleData] = useState("...");
  const [isLoading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  const stockURL = `http://localhost:9000/stocks/${symbol}/full`;
  const candleURL = `http://localhost:9000/stocks/${symbol}/candles/60`;

  const formatMarketCap = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(2) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(2) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T";
  };

  async function createCandleData() {
    fetch(candleURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          setCandleData(json);
        });
      }
    });
  }

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
          setLoading(false);
        });
      }
    });
  }

  useEffect(() => {
    createCandleData();
    createStockData();
  }, []);

  if (isLoading === true) {
    return (
      <StockContainer>
        <StockWrapper></StockWrapper>
      </StockContainer>
    );
  } else {
    let convertedEpoch = candleData[0].t.map(function (element) {
      return element * 1000;
    });

    convertedEpoch = convertedEpoch.map(function (element) {
      return new Date(element).toISOString().slice(0, 10);
    });

    return (
      <>
        <StockContainer>
          <StockWrapper>
            <StockTitleContainer>
              <StockTitle>{stockData[1].ticker}</StockTitle>
            </StockTitleContainer>
            <StockBodyContainer>
              <StockChart>
                {StockPageChart(convertedEpoch, candleData[0].c)}
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
                  <StockBuyButton onClick={toggleModal}>BUY</StockBuyButton>
                  <StockModal
                    isOpen={isOpen}
                    onBackgroundClick={toggleModal}
                    onEscapeKeydown={toggleModal}
                  >
                    <StockModalWrapper>
                      <StockModalInfo>
                        <StockModalTitle>Buy {symbol}</StockModalTitle>
                        <StockModalPrice>
                          {stockData[0].c.toFixed(2)}$
                        </StockModalPrice>
                      </StockModalInfo>
                      <StockModalQuantityWrapper>
                        <StockModalQuantityTitle>
                          Quantity
                        </StockModalQuantityTitle>
                        <StockModalQuantityInput></StockModalQuantityInput>
                      </StockModalQuantityWrapper>
                      <StockModalButton onClick={toggleModal}>
                        Buy
                      </StockModalButton>
                    </StockModalWrapper>
                  </StockModal>
                  <StockSellButton>SELL</StockSellButton>
                </StockTradeWrapper>
              </StockTradeContainer>
            </StockBodyContainer>
            <StockDetailContainer>
              <StockDetailWrapper>
                <StockDetailTitle>Market Cap</StockDetailTitle>
                <StockDetailSubtitle>
                  {formatMarketCap(
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
