import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Modal from "styled-react-modal";
import bullGIF from "../../images/bull.gif";

export const StockContainer = styled.div`
  color: ${(props) => props.theme.fontColor};
  background: ${(props) => props.theme.backgroundColor};

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
  padding: 1rem;
  margin-top: 80px;
`;

export const StockTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const StockTitle = styled.h1`
  font-size: 3rem;
`;

export const StockSubtitle = styled.h3`
  font-size: 1.5rem;
  margin-left: 1rem;
`;

export const StockChart = styled.div`
  width: 66vw;
  height: 50vh;
`;

export const StockBodyContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: space-around;
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
  background: ${(props) => props.theme.fontColor};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${(props) => props.theme.backgroundColor};
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
    background: #01bf71;
    color: #010606;
  }
`;

export const StockSellButton = styled.button`
  border-radius: 50px;
  background-color: ${(props) => props.theme.fontColor};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 8vw;
  height: 6vh;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: red;
    color: #010606;
  }
`;

export const StockModal = Modal.styled`
  width: 23rem;
  height: 23rem;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.fontColor};
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

export const StockModalQuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StockModalQuantityTitle = styled.p``;

export const StockModalQuantityInput = styled.input`
  margin: 0.5rem;
`;

export const StockModalButton = styled.button`
  background-color: black;
  color: white;
  width: 6vw;
  height: 3vh;
  border-radius: 5px;
  border: 0;
`;

export const StockModalBalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StockModalBalanceTitle = styled.h3``;

export const StockModalBalanceNumber = styled.h3``;

export const StockModalQuantityTotal = styled.h5``;

export const StockModalPopupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const StockModalPopupText = styled.h3`
  font-size: 1.5rem;
  padding: 0 1rem;
  text-align: center;
`;

export const StockModalPopupImg = styled.image`
  width: 200px;
  height: 200px;
`;

export const StockModalPopupButton = styled(StockModalButton)`
  width: 40%;
  height: 10%;
`;
