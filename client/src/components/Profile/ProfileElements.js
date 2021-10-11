import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Modal from "styled-react-modal";

export const ProfileContainer = styled.div`
  color: ${(props) => props.theme.fontColor};
  background: ${(props) => props.theme.backgroundColor};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  } ;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
  height: auto;
  min-height: 860px;
  width: 100%;
  /* max-width: 1100px; */
  padding: 0 24px;
  margin-top: 80px;
`;

export const ProfileSettingsContainer = styled.div`
  width: 5vw;
  /* background-color: turquoise; */
  display: flex;
  flex-direction: column;
  height: 80vh;
  align-items: center;
`

export const ProfileDeposit = styled.button`
  color: ${(props) => props.theme.fontColor};
  background-color: transparent;
  text-decoration: underline;
  text-decoration-color: #01bf71;
  border: 0;
  font-size: 1.5rem;
  margin: 2rem 0;
  cursor: pointer;
`

export const ProfileWithdraw = styled.button`
  color: ${(props) => props.theme.fontColor};
  background-color: transparent;
  text-decoration: underline;
  text-decoration-color: #01bf71;
  border: 0;
  font-size: 1.5rem;
  cursor: pointer;
`

export const ProfilePortfolioContainer = styled.div`
  width: 70vw;
  height: 80vh;
  /* background-color: lightgray; */
  overflow: auto;
`;

export const ProfilePortfolioCard = styled.div`
  height: 10vh;
  width: 100%;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

export const ProfilePortfolioCardLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const ProfilePortfolioCardStock = styled.h3`
  font-size: 2rem;
  color:  ${(props) => props.theme.fontColor};
  margin-right: 1rem;
`;

export const ProfilePortfolioCardPercent = styled.p``;

export const ProfilePortfolioCardRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const ProfilePortfolioCardShares = styled.h4``;

export const ProfilePortfolioCardTotal = styled.h3`
margin: 0 1rem;
`;

export const ProfilePortfolioCardPercentChange = styled.p`
`;









export const ProfileModal = Modal.styled`
  width: 23rem;
  height: 23rem;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.fontColor};
`;

export const ProfileModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ProfileModalInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const ProfileModalTitle = styled.h3``;

export const ProfileModalPrice = styled.h3``;

export const ProfileModalQuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileModalQuantityTitle = styled.p``;

export const ProfileModalQuantityInput = styled.input`
  margin: 0.5rem;
`;

export const ProfileModalButton = styled.button`
  background-color: black;
  color: white;
  width: 6vw;
  height: 3vh;
  border-radius: 5px;
  border: 0;
`;

export const ProfileModalBalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ProfileModalBalanceTitle = styled.h3``;

export const ProfileModalBalanceNumber = styled.h3``;

export const ProfileModalQuantityTotal = styled.h5``;

export const ProfileModalPopupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const ProfileModalPopupText = styled.h3`
  font-size: 1.5rem;
  padding: 0 1rem;
  text-align: center;
`;

export const ProfileModalPopupImg = styled.image`
  width: 200px;
  height: 200px;
`;

export const ProfileModalPopupButton = styled(ProfileModalButton)`
  width: 40%;
  height: 10%;
`;
