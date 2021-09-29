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
        mode: 'cors'
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          setUserData(json);
          console.log(userData);
        });
      } else {
        console.log("Fetch error.");
      }
    });
  }, []);

  const GetPortfolioCard = (portfolioStockIndex) => {
    const [symbol, setSymbol] = useState("AAPL");

    // useEffect(() => {
    //   setSymbol(Object.keys(userData[0].portfolio[portfolioStockIndex]).join())
    // },[userData])

    const stockURL = `http://localhost:9000/stocks/${symbol}/full`;

    const [stockData, setStockData] = useState("...");

    useEffect(() => {
      fetch(stockURL, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }).then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            setStockData(json);
            // setLoading(false);
          });
        }
      });
    }, [symbol]);

    return (
      <ProfilePortfolioCard>
        <ProfilePortfolioCardLeftContainer>
          <ProfilePortfolioCardStock>
            {stockData[1].ticker}
          </ProfilePortfolioCardStock>
          <ProfilePortfolioCardPercent>
            {stockData[0].dp}%
          </ProfilePortfolioCardPercent>
        </ProfilePortfolioCardLeftContainer>
        <ProfilePortfolioCardRightContainer>
          <ProfilePortfolioCardShares>
            {userData[0].portfolio[6].AAPL} Shares
          </ProfilePortfolioCardShares>
          <ProfilePortfolioCardTotal>
            {userData[0].portfolio[6].AAPL * stockData[0].c}
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
            {/* {GetPortfolioCard(3)} */}
          </ProfilePortfolioContainer>
        </ProfileWrapper>
      </ProfileContainer>
    </React.Fragment>
  );
};

export default Profile;
