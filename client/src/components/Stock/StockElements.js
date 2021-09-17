import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Modal from "styled-react-modal";

export const StockContainer = styled.div`
  color: #010606;
  /* background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")}; */
  background: #f9f9f9;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  } ;
`;

export const StockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: auto;
  min-height: 860px;
  width: 100%;
  /* max-width: 1100px; */
  padding: 0 24px;
  margin-top: 80px;
`;

export const StockTitleContainer = styled.div``;

export const StockTitle = styled.h1`
  font-size: 3rem;
`;

export const StockChart = styled.div`
  width: 66vw;
  height: 50vh;
`;

export const StockBodyContainer = styled.div`
  display: flex;
  margin: 1rem 0;
`;

export const StockDetailContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 66vw;
`;

export const StockDetailWrapper = styled.div`
  text-align: center;
`;

export const StockDetailTitle = styled.h3`
  margin: 8px;
`;

export const StockDetailSubtitle = styled.p``;

export const StockTradeContainer = styled.div`
  width: 33vh;
  height: 50vh;
`;

export const StockTradeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
`;

export const StockPrice = styled.h2``;

export const StockPercent = styled.p`
  color: ${({ percentColor }) => (percentColor ? "limegreen" : "red")};
`;

export const StockBuyButton = styled.button`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 8vw;
  height: 6vh;
  margin: 2rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const StockSellButton = styled.button`
  border-radius: 50px;
  background: red;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 8vw;
  height: 6vh;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const StockModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  background-color: white;
`;

export const StockModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const StockModalInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const StockModalTitle = styled.h3``;

export const StockModalPrice = styled.h3``;

export const StockModalQuantityWrapper = styled.div``;

export const StockModalQuantityTitle = styled.p``;

export const StockModalQuantityInput = styled.input``;

export const StockModalButton = styled.button`
  background-color: lightgray;
  width: 6vw;
  height: 3vh;
`;
