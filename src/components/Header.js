import React from "react";
import Blink from "./Blink";
import Visitors from "./Visitors";

const headerStyles = {
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
  backgroundColor: "lightGreen",
  whiteSpace: "nowrap",
  overflow: "auto"
};

const logoStyles = {
  width: "50px",
  height: "50px",
  marginRight: "30px",
  objectFit: "contain"
};

const hOneStyle = {
  flex: "1",
  display: "flex",
  paddingLeft : '200px'
};

function Header() {
  return (
    <header style={headerStyles}>
      <img src="https://www.topsound.fi/images/watermarked/1/detailed/33/blackjack_atx_c-7_fr_absn_1.jpg" alt="Logo" style={logoStyles} />
      <Blink />
      <div style={hOneStyle}>
        <h1>W e l c o m e ! </h1>
      </div>
      <Visitors />
    </header>
  );
}

export default Header;
