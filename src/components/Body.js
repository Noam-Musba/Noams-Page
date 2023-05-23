import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const bodyStyles = {
  display: "flex",
  flexWrap: "nowrap",

  backgroundColor: "white",

  height: "300vh",
  overflow: "auto",
};

const toggleSwitch = {
  margin: "10px",
  position: "relative",
  width: "40px",
  height: "20px",
  backgroundColor: "#ccc",
  borderRadius: "10px",
};

const inputStyle = {
  opacity: "0",
  width: "0",
  height: "0",
};

const labelStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "20px",
  height: "20px",
  backgroundColor: "black",
  borderRadius: "50%",
  transition: "transform 0.2s ease-in-out",
};

/**
 * add a check button
 * marginLeft: "100px", marginBottom: "50px"
 */

function Body() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <main
      style={
        checked
          ? { ...bodyStyles, backgroundColor: "black", color: "white" }
          : bodyStyles
      }
    >
      <Main />
      <aside
        style={{
          flex: "1",
          border: "1px solid " + (checked ? "white" : "black"),
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "50px"
          }}
        >
          <div style={toggleSwitch}>
            <label
              style={
                checked
                  ? {
                      ...labelStyle,
                      transform: "translateX(20px",
                      backgroundColor: "white",
                    }
                  : labelStyle
              }
            >
              <input
                style={
                  checked
                    ? { ...inputStyle, transform: "translateX(20px" }
                    : inputStyle
                }
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
              />
              {checked ? "Light" : "Dark"}
            </label>
          </div>
        </div>

        <Sidebar />
      </aside>
    </main>
  );
}

export default Body;
