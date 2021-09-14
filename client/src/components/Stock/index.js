/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import { StockContainer, StockWrapper, Test } from "./StockElements";

const Stock = () => {
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

      <h1>{stock}</h1>
  );
};

return (
    <>
    <StockContainer>
        <StockWrapper>
            <Test>{GetStockCard("AMD")}</Test>
        </StockWrapper>
      </StockContainer>
    </>
);
}

export default Stock;
