import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const StockContainer = styled.div`
  color: #fff;
  /* background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")}; */
  background: #f9f9f9;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  } ;
`;

export const StockWrapper = styled.div`
display: flex;
  z-index: 1;
  height: auto;
  min-height: 860px;
  width: 100%;
  /* max-width: 1100px; */
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 80px;
`;

export const Test = styled.h1`
color: salmon;
font-size: 2rem
`