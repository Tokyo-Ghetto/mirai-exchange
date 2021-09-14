import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  color: #fff;
  /* background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")}; */
  background: #f9f9f9;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  } ;
`;

export const HomeWrapper = styled.div`
display: flex;
  z-index: 1;
  height: 860px;
  width: 100%;
  /* max-width: 1100px; */
  padding: 0 24px;
  justify-content: center;
  align-items: center;
`;

export const HomeCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    height: 250px;
    width: 200px;
    margin: 0 1rem;

    &:hover{
        transform: scale(1.02)
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const HomeCardSymbol = styled.h3`
    color: black;
    font-size: 1.25rem;
`;

export const HomeCardPriceWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const HomeCardPrice = styled.h2`
    color: black;
    font-size: 2.5rem;
`;

export const HomeCardPercent = styled.p`
    /* color: limegreen; */
    color: ${({ percentColor }) => (percentColor ? 'limegreen' : "red")};
    font-size: 0.9rem;
`;

export const HomeCardName = styled.p`
    color: gray;
    font-size: 1rem;
    text-align: center;
`;

export const Test = styled.h4`
    font-size: 2rem;
    color: salmon;
`