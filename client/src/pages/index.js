import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  pricingObj,
  homeObjOneEs,
  pricingObjEs,
  homeObjThreeEs
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Sidebar from "../components/Sidebar";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  if (i18n.language === "es") {
    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOneEs} />
        <InfoSection {...pricingObjEs} />
        <Pricing />
        <InfoSection {...homeObjThreeEs} />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...pricingObj} />
        <Pricing />
        <InfoSection {...homeObjThree} />
        <Footer />
      </>
    );
  }
};

export default Home;
