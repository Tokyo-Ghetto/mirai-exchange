import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import NavbarStatic from "../components/NavbarStatic";
import Legal from "../components/Legal";

const LegalPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarStatic toggle={toggle} />
      <Legal />
      <Footer />
    </>
  );
};

export default LegalPage;
