import Footer from "../Footer/Footer";
import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject/AboutProject";
import NavTab from "./NavTab/NavTab";
import Portfolio from "./Portfolio/Protfolio";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";

import "./Main.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";

function Main({ loggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuOpen() {
    setIsOpen(true);
  }

  function handleMenuClose() {
    setIsOpen(false);
  }

  return (
    <>
      {loggedIn ? <Header handleMenuOpen={handleMenuOpen} /> : <NavTab />}
      <main>
        <Navigation isOpen={isOpen} handleMenuClose={handleMenuClose} />
        <Promo></Promo>
        <AboutProject></AboutProject>
        <Techs></Techs>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Main;
