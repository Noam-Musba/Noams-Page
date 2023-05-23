import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const bodyStyles = {
  display: "flex",
  flexWrap: "nowrap",

  backgroundColor: "lightgrey",
  height: "300vh",
  overflow: "auto",
  
  
};

/**
 * add a check button 
 */


function Body() {
  return (
    <main style={bodyStyles}>
      <Main />
      <aside style={{ flex: "1", border: "1px solid black" }}>
        <Sidebar />
      </aside>
    </main>
  );
}

export default Body;
