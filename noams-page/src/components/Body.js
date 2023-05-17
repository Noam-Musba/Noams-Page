import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const bodyStyles = {
  height: "300vh",
  backgroundColor: "lightgrey",
  display: "flex",
  flexWrap: "nowrap"
};

/**
 * add a check button 
 * add a like/dislike buttons with useReducer
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
