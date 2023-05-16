import React, { useContext } from "react";
import Blink from "./Blink";
import Visitors from "./Visitors";
import { pageNameContext } from "../App";

const headerStyles = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "lightGreen",
};

const logoStyles = {
  width: "50px",
  height: "50px",
  marginRight: "30px",
};

const hOneStyle = {
  flex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //paddingLeft : '200px'
};

function Header() {
  const firstName = useContext(pageNameContext);
  return (
    <header style={headerStyles}>
      <img src="./../NoamLogo.jpg" alt="Logo" style={logoStyles} />
      <Blink />
      <div style={hOneStyle}>
        <h1>Who is {firstName} Musba?</h1>
      </div>
      <Visitors />
    </header>
  );
}

export default Header;
