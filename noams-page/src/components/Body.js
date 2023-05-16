import React from "react";
import Skills from "./Skills";
import SignIn from "./SignIn";

const bodyStyles = {
  height: "1000px",
  backgroundColor: "lightgrey",
  display: "flex",
  flexWrap: "nowrap",
};

function Body() {
  return (
    <main style={bodyStyles}>
      <Skills />
      <aside style={{ flex: "1", border: "1px solid black" }}>
        <SignIn />
      </aside>
    </main>
  );
}

export default Body;
