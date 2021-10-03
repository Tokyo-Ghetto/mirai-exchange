/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
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
  StockModalBalanceNumber,
  StockModalBalanceTitle,
  StockModalBalanceWrapper,
  StockModalQuantityTotal,
  StockSubtitle,
  StockModalPopupWrapper,
  StockModalPopupText,
  StockModalPopupImg,
  StockModalPopupButton,
} from "./StockElements";
import bullGIF from "../../images/bull.gif";

const Stock = () => {
    const [theme, setTheme] = useState("dark");
  const { t, i18n } = useTranslation();
  const stockList = [];
  const { symbol } = useParams();

  const bearer = "Bearer " + sessionStorage.getItem("access_token");
  const stockURL = `http://localhost:9000/stocks/${symbol}/full`;
  const candleURL = `http://localhost:9000/stocks/${symbol}/candles/60`;
  const buyURL = `http://localhost:9000/user/buy`;

  const [stockData, setStockData] = useState("...");
  const [candleData, setCandleData] = useState("...");
  const [isLoading, setLoading] = useState(true);
  const [isOpenBuy, setIsOpenBuy] = useState(false);
  const [isOpenSell, setIsOpenSell] = useState(false);
  const [userData, setUserData] = useState("...");
  const [quantity, setQuantity] = useState(100);
  const [updated, setUpdated] = useState({
    balance: 0,
    portfolio: [],
  });
  const [currentShares, setCurrentShares] = useState(0);
  const [isBought, setIsBought] = useState(false);
  const [isSold, setIsSold] = useState(false);

  useEffect(() => {
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

    fetch("http://localhost:9000/user/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: bearer,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((userData) => {
          setUserData(userData);
          setUpdated({
            balance: userData[0]["balance"],
            portfolio: userData[0]["portfolio"],
          });
        });
      }
    });
  }, [bearer, stockURL, candleURL]);

  useEffect(() => {
    if (updated.balance > 0 && updated.portfolio.length > 0) {
      fetch(buyURL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: bearer,
        },
        body: JSON.stringify(updated),
        //hacer fetch con updated actualizado
      }).then((response) => {
        if (response.ok) {
          console.log("Done.");
        }
      });
      const indexStock = updated.portfolio.findIndex(
        (e) => e[symbol] !== undefined
      );
      if(updated.portfolio[indexStock]){
        setCurrentShares(updated.portfolio[indexStock][symbol]);
        console.log((updated.portfolio[indexStock][symbol]))
      }else{
        setCurrentShares(0)
      }

    }
  }, [updated]);

  function toggleModalBuy(e) {
    setIsOpenBuy(!isOpenBuy);
  }

  function toggleModalSell(e) {
    setIsOpenSell(!isOpenSell);
  }

  const formatMarketCap = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(2) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(2) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T";
  };

  const handleBuy = (e) => {
    e.preventDefault();
    if (
      updated["balance"] > 0 &&
      stockData[0]["c"] * quantity < updated["balance"]
    ) {
      const indexStock = updated.portfolio.findIndex(
        (e) => e[symbol] !== undefined
      );
      if (indexStock >= 0) {
        updated.portfolio[indexStock][symbol] += quantity;
        setUpdated({
          balance: updated["balance"] - stockData[0]["c"] * quantity,
          portfolio: updated.portfolio.slice(),
        });
        setIsBought(true);
      } else {
        setUpdated({
          balance: updated["balance"] - stockData[0]["c"] * quantity,
          portfolio: [
            ...updated["portfolio"],
            { [stockData[1]["ticker"]]: quantity },
          ],
        });
        setIsBought(true);
      }
    } else {
      console.log("Not enough balance in your account.");
    }
  };

  const handleSell = (e) => {
    e.preventDefault();
    const indexStock = updated.portfolio.findIndex(
      (e) => e[symbol] !== undefined
    );
    if (indexStock >= 0) {
      if (updated.portfolio[indexStock][symbol] === quantity) {
        updated.portfolio[indexStock][symbol] = 0;
      } else if (updated.portfolio[indexStock][symbol] > quantity) {
        updated.portfolio[indexStock][symbol] -= quantity;
      } else if (updated.portfolio[indexStock][symbol] < quantity) {
        console.log("Insufficient shares to sell.");
      }
      setUpdated({
        balance: updated["balance"] + stockData[0]["c"] * quantity,
        portfolio: updated.portfolio.slice(),
      });
      setIsSold(true);
    } else {
      console.log("indexStock error: Stock doesn't exist.");
    }
  };

  const popupBuy = () => {
    if (isBought === true) {
      return (
        <StockModalPopupWrapper>
          <StockModalPopupText>
          {t('Youve succesfully purchased')} {quantity} {t('shares of')} {symbol} {t('at')} {" "}
            {stockData[0].c.toFixed(2)}$
          </StockModalPopupText>
          <StockModalPopupButton
            onClick={function () {
              window.location.reload();
            }}
          >
            {t('Back to')} {symbol}
          </StockModalPopupButton>
        </StockModalPopupWrapper>
      );
    } else if (isBought === false) {
      return (
        <StockModalWrapper>
          <StockModalInfo>
            <StockModalTitle>{t('Buy')} {symbol}</StockModalTitle>
            <StockModalPrice>{stockData[0].c.toFixed(2)}$</StockModalPrice>
          </StockModalInfo>
          <StockModalQuantityWrapper>
            <StockModalQuantityTitle>{t('Quantity')}</StockModalQuantityTitle>
            <StockModalQuantityInput
              type="number"
              min={100}
              placeholder="100"
              step="100"
              value={quantity}
              onInput={(e) => setQuantity(parseInt(e.target.value))}
            ></StockModalQuantityInput>
            <StockModalQuantityTotal>
              {(stockData[0].c.toFixed(2) * quantity).toFixed(2)}
            </StockModalQuantityTotal>
          </StockModalQuantityWrapper>
          <StockModalBalanceWrapper>
            <StockModalBalanceTitle>{t('Current balance:')}</StockModalBalanceTitle>
            <StockModalBalanceNumber>{updated.balance}$</StockModalBalanceNumber>
          </StockModalBalanceWrapper>
          <StockModalBalanceWrapper>
            <StockModalBalanceTitle>{t('Current shares:')}</StockModalBalanceTitle>
            <StockModalBalanceNumber>{currentShares}</StockModalBalanceNumber>
          </StockModalBalanceWrapper>
          <StockModalButton onClick={handleBuy}>Buy</StockModalButton>
        </StockModalWrapper>
      );
    }
  };

  const popupSell = () => {
    if (isSold === true) {
      return (
        <StockModalPopupWrapper>
          <StockModalPopupText>
            {t('Youve succesfully sold')} {quantity} {t('shares of')} {symbol} {t('at')} {" "}
            {stockData[0].c.toFixed(2)}$
          </StockModalPopupText>
          <StockModalPopupButton
            onClick={function () {
              window.location.reload();
            }}
          >
            {t('Back to')} {symbol}
          </StockModalPopupButton>
        </StockModalPopupWrapper>
      );
    } else if (isSold === false) {
      return (
        <StockModalWrapper>
          <StockModalInfo>
            <StockModalTitle>{t('Sell')} {symbol}</StockModalTitle>
            <StockModalPrice>{stockData[0].c.toFixed(2)}$</StockModalPrice>
          </StockModalInfo>
          <StockModalQuantityWrapper>
            <StockModalQuantityTitle>{t('Quantity')}</StockModalQuantityTitle>
            <StockModalQuantityInput
              type="number"
              min={100}
              placeholder="100"
              step="100"
              value={quantity}
              onInput={(e) => setQuantity(parseInt(e.target.value))}
            ></StockModalQuantityInput>
            <StockModalQuantityTotal>
              {(stockData[0].c.toFixed(2) * quantity).toFixed(2)}
            </StockModalQuantityTotal>
          </StockModalQuantityWrapper>
          <StockModalBalanceWrapper>
            <StockModalBalanceTitle>{t('Current balance:')}</StockModalBalanceTitle>
            <StockModalBalanceNumber>{updated.balance}$</StockModalBalanceNumber>
          </StockModalBalanceWrapper>
          <StockModalBalanceWrapper>
            <StockModalBalanceTitle>{t('Current shares:')}</StockModalBalanceTitle>
            <StockModalBalanceNumber>{currentShares}</StockModalBalanceNumber>
          </StockModalBalanceWrapper>
          <StockModalButton onClick={handleSell}>Buy</StockModalButton>
        </StockModalWrapper>
      );
    }
  };

  if (isLoading) {
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
      <React.Fragment>
        <StockContainer>
          <StockWrapper>
            <StockTitleContainer>
              <StockTitle>{stockData[1]["ticker"]}</StockTitle>
              <StockSubtitle>{stockData[1]["name"]}</StockSubtitle>
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
                  <StockBuyButton onClick={toggleModalBuy}>{t('BUY')}</StockBuyButton>
                  <StockModal
                    isOpen={isOpenBuy}
                    onBackgroundClick={toggleModalBuy}
                    onEscapeKeydown={toggleModalBuy}
                  >
                    {popupBuy()}
                  </StockModal>
                  <StockSellButton onClick={toggleModalSell}>
                    {t('SELL')}
                  </StockSellButton>
                  <StockModal
                    isOpen={isOpenSell}
                    onBackgroundClick={toggleModalSell}
                    onEscapeKeydown={toggleModalSell}
                  >
                    {popupSell()}
                  </StockModal>
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
      </React.Fragment>
    );
  }
};

export default Stock;
