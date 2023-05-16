import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

export const pageNameContext = React.createContext();

function App() {
  return (
    <div className="App">
      <pageNameContext.Provider value={"Noam"}>
        <Header />
        <Body />
      </pageNameContext.Provider>
    </div>
  );
}

export default App;
