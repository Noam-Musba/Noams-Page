import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Contact from "./components/Contact";
import layoutStyles from "./styles/Layout.module.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={[styles.app, isDarkMode ? styles.appDark : null]
        .filter(Boolean)
        .join(" ")}
    >
      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>
      <Header />
      <div className={[layoutStyles.container, styles.themeControl].join(" ")}>
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
