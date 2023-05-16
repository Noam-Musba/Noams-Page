import React from "react";
import Skills from "./Skills";
import SignIn from "./SignIn";
import Sidebar from "./Sidebar";

const bodyStyles = {
  height: "1000px",
  backgroundColor: "lightgrey",
  display: "flex",
  flexWrap: "nowrap",
};

/**
 * add a check button 
 * 
 */


function Body() {
  return (
    <main style={bodyStyles}>
      <Skills />
      <aside style={{ flex: "1", border: "1px solid black" }}>
        <Sidebar />
      </aside>
    </main>
  );
}

export default Body;
