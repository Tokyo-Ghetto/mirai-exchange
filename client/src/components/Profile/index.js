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
  ProfileSettingsContainer,
  ProfileDeposit,
  ProfileWithdraw,
  ProfileModal,
  ProfileModalButton,
  ProfileModalBalanceNumber,
  ProfileModalBalanceTitle,
  ProfileModalBalanceWrapper,
  ProfileModalPopupButton,
  ProfileModalInfo,
  ProfileModalPopupImg,
  ProfileModalPopupText,
  ProfileModalPopupWrapper,
  ProfileModalPrice,
  ProfileModalQuantityWrapper,
  ProfileModalQuantityInput,
  ProfileModalQuantityTitle,
  ProfileModalQuantityTotal,
  ProfileModalTitle,
  ProfileModalWrapper,
} from "./ProfileElements";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./../../themes";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const bearer = "Bearer " + sessionStorage.getItem("access_token");
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [quantity, setQuantity] = useState(0);
  const [isDeposited, setIsDeposited] = useState(false);
  const [isWithdrawed, setIsWithdrawed] = useState(false);
  const [isOpenDeposit, setIsOpenDeposit] = useState(false);
  const [isOpenWithdraw, setIsOpenWithdraw] = useState(false);

  const { t, i18n } = useTranslation();

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

  function toggleModalDeposit(e) {
    setIsOpenDeposit(!isOpenDeposit);
  }

  function toggleModalWithdraw(e) {
    setIsOpenWithdraw(!isOpenWithdraw);
  }

  const handleDeposit = (e) => {};

  const handleWithdraw = (e) => {};

  const popupDeposit = () => {
    if (isDeposited === true) {
      return (
        <ProfileModalPopupWrapper>
          <ProfileModalPopupText>
            {t("Youve succesfully deposited")} {quantity}
          </ProfileModalPopupText>
          <ProfileModalPopupButton
            onClick={function () {
              window.location.reload();
            }}
          >
            {t("Back to")}
          </ProfileModalPopupButton>
        </ProfileModalPopupWrapper>
      );
    } else if (isDeposited === false) {
      return (
        <ProfileModalWrapper>
          <ProfileModalInfo>
            <ProfileModalTitle>{t("Deposit")}</ProfileModalTitle>
          </ProfileModalInfo>
          <ProfileModalQuantityWrapper>
            <ProfileModalQuantityTitle>
              {t("Quantity")}
            </ProfileModalQuantityTitle>
            <ProfileModalQuantityInput
              type="number"
              min={10}
              placeholder="1000"
              value={quantity}
              onInput={(e) => setQuantity(parseInt(e.target.value))}
            ></ProfileModalQuantityInput>
          </ProfileModalQuantityWrapper>
          <ProfileModalBalanceWrapper>
            <ProfileModalBalanceTitle>
              {t("Current balance:")}
            </ProfileModalBalanceTitle>
            <ProfileModalBalanceNumber>
              {userData[0]?.balance}$
            </ProfileModalBalanceNumber>
          </ProfileModalBalanceWrapper>
          <ProfileModalBalanceWrapper></ProfileModalBalanceWrapper>
          <ProfileModalButton onClick={handleDeposit}>
            Deposit
          </ProfileModalButton>
        </ProfileModalWrapper>
      );
    }
  };

  const popupWithdraw = () => {
    if (isWithdrawed === true) {
      return (
        <ProfileModalPopupWrapper>
          <ProfileModalPopupText>
            {t("Youve succesfully withdrawed")} {quantity}
          </ProfileModalPopupText>
          <ProfileModalPopupButton
            onClick={function () {
              window.location.reload();
            }}
          >
            {t("Back to")}
          </ProfileModalPopupButton>
        </ProfileModalPopupWrapper>
      );
    } else if (isWithdrawed === false) {
      return (
        <ProfileModalWrapper>
          <ProfileModalInfo>
            <ProfileModalTitle>{t("Withdraw")}</ProfileModalTitle>
          </ProfileModalInfo>
          <ProfileModalQuantityWrapper>
            <ProfileModalQuantityTitle>
              {t("Quantity")}
            </ProfileModalQuantityTitle>
            <ProfileModalQuantityInput
              type="number"
              min={10}
              placeholder="1000"
              value={quantity}
              onInput={(e) => setQuantity(parseInt(e.target.value))}
            ></ProfileModalQuantityInput>
          </ProfileModalQuantityWrapper>
          <ProfileModalBalanceWrapper>
            <ProfileModalBalanceTitle>
              {t("Current balance:")}
            </ProfileModalBalanceTitle>
            <ProfileModalBalanceNumber>
              {userData[0]?.balance}$
            </ProfileModalBalanceNumber>
          </ProfileModalBalanceWrapper>
          <ProfileModalBalanceWrapper></ProfileModalBalanceWrapper>
          <ProfileModalButton onClick={handleWithdraw}>
            Withdraw
          </ProfileModalButton>
        </ProfileModalWrapper>
      );
    }
  };

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

    // function createStockSymbol() {
    //   setSymbol(Object.keys(userData[0].portfolio[portfolioStockIndex]).join());
    // }

    // useEffect(() => {
    //   // createStockSymbol();
    //   createStockData();
    // }, []);

    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <ProfilePortfolioCard>
          <ProfilePortfolioCardLeftContainer>
            <ProfilePortfolioCardStock>
              {/* {stockData[1].ticker} */}
              AAPL
            </ProfilePortfolioCardStock>
            <ProfilePortfolioCardPercent>
              {/* {stockData[0].dp.toFixed(2)}% */}
              3.12%
            </ProfilePortfolioCardPercent>
          </ProfilePortfolioCardLeftContainer>
          <ProfilePortfolioCardRightContainer>
            <ProfilePortfolioCardShares>
              {/* {userData[0].portfolio[portfolioStockIndex].AAPL} Shares */}
              300 Shares
            </ProfilePortfolioCardShares>
            <ProfilePortfolioCardTotal>
              {/* {userData[0].portfolio[portfolioStockIndex].AAPL * stockData[0].c} */}
              14000$
            </ProfilePortfolioCardTotal>
            <ProfilePortfolioCardPercentChange>
              15.9%
            </ProfilePortfolioCardPercentChange>
          </ProfilePortfolioCardRightContainer>
        </ProfilePortfolioCard>
      </ThemeProvider>
    );
  };

  let portfolioArray = [];
  const GetPortfolio = () => {
    for (let i = 0; i <= 10; i++) {
      portfolioArray.push(GetPortfolioCard());
    }
    return portfolioArray;
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <React.Fragment>
        <ProfileContainer>
          <ProfileWrapper>
            <ProfileSettingsContainer>
              <ProfileDeposit onClick={toggleModalDeposit}>
                Deposit
              </ProfileDeposit>
              <ProfileModal
                isOpen={isOpenDeposit}
                onBackgroundClick={toggleModalDeposit}
                onEscapeKeydown={toggleModalDeposit}
              >
                {popupDeposit()}
              </ProfileModal>
              <ProfileWithdraw onClick={toggleModalWithdraw}>Withdraw</ProfileWithdraw>
              <ProfileModal
                isOpen={isOpenWithdraw}
                onBackgroundClick={toggleModalWithdraw}
                onEscapeKeydown={toggleModalWithdraw}
              >
                {popupWithdraw()}
              </ProfileModal>
            </ProfileSettingsContainer>
            <ProfilePortfolioContainer>
              {GetPortfolio()}
            </ProfilePortfolioContainer>
          </ProfileWrapper>
        </ProfileContainer>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Profile;
