import React, { useEffect, useState } from "react";
import {
  ProfileContainer,
  ProfileWrapper,
  ProfilePortfolioCard,
  ProfilePortfolioCardLeftContainer,
  ProfilePortfolioCardPercent,
  ProfilePortfolioCardPercentChange,
  ProfilePortfolioCardStock,
  ProfilePortfolioCardTotal,
  ProfilePortfolioContainer,
  ProfilePortfolioCardRightContainer,
  ProfilePortfolioCardShares,
} from "./ProfileElements";

const Profile = () => {
  const bearer = "Bearer " + sessionStorage.getItem("access_token");
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9000/user/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: bearer,
        mode: "cors",
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          setUserData(json);
          setIsLoading(false);
          console.log(userData);
        });
      } else {
        console.log("Fetch error.");
      }
    });
  }, []);

  const GetPortfolioCard = (portfolioStockIndex) => {
    const [symbol, setSymbol] = useState("AAPL");
    const [stockData, setStockData] = useState("...");

    const stockURL = `http://localhost:9000/stocks/${symbol}/full`;

    async function createStockData() {
      fetch(stockURL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          mode: "cors",
        },
      }).then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            setStockData(json);
            console.log(stockData);
            // setLoading(false);
          });
        }
      });
    }

    function createStockSymbol() {
      setSymbol(Object.keys(userData[0].portfolio[portfolioStockIndex]).join());
    }

    useEffect(() => {
      createStockSymbol();
      createStockData();
    }, []);

    return (
      <ProfilePortfolioCard>
        <ProfilePortfolioCardLeftContainer>
          <ProfilePortfolioCardStock>
            {stockData[1].ticker}
          </ProfilePortfolioCardStock>
          <ProfilePortfolioCardPercent>
            {stockData[0].dp.toFixed(2)}%
          </ProfilePortfolioCardPercent>
        </ProfilePortfolioCardLeftContainer>
        <ProfilePortfolioCardRightContainer>
          <ProfilePortfolioCardShares>
            {userData[0].portfolio[portfolioStockIndex].AAPL} Shares
          </ProfilePortfolioCardShares>
          <ProfilePortfolioCardTotal>
            {userData[0].portfolio[portfolioStockIndex].AAPL * stockData[0].c}
          </ProfilePortfolioCardTotal>
          <ProfilePortfolioCardPercentChange>
            13.2%
          </ProfilePortfolioCardPercentChange>
        </ProfilePortfolioCardRightContainer>
      </ProfilePortfolioCard>
    );
  };

  // let portfolioArray = [];
  // const GetPortfolio = () => {
  //   for (let i = 0; i <= 5 - 1; i++) {
  //     portfolioArray.push(GetPortfolioCard());
  //   }
  //   return portfolioArray;
  // };

  return (
    <React.Fragment>
      <ProfileContainer>
        <ProfileWrapper>
          <ProfilePortfolioContainer>
            {GetPortfolioCard(6)}
          </ProfilePortfolioContainer>
        </ProfileWrapper>
      </ProfileContainer>
    </React.Fragment>
  );
};

export default Profile;
