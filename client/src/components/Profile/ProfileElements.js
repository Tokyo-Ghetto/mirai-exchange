import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const ProfileContainer = styled.div`
  color: #010606;
  /* background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")}; */
  background: #f9f9f9;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  } ;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  height: auto;
  min-height: 860px;
  width: 100%;
  /* max-width: 1100px; */
  padding: 0 24px;
  margin-top: 80px;
`;
export const ProfilePortfolioContainer = styled.div`
  width: 90vw;
  height: 80vh;
  background-color: lightgray;
`;

export const ProfilePortfolioCard = styled.div`
  height: 10vh;
  width: 100%;
  background-color: lightcoral;
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
  color: black;
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
