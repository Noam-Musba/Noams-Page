import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Contact from "./components/Contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`App${isDarkMode ? " App--dark" : ""}`}>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <div className="theme-control">
        <label>
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={(event) => {
              setIsDarkMode(event.target.checked);
            }}
          />
          Dark mode
        </label>
      </div>
      <Main />
      <Contact />
    </div>
  );
}

export default App;
