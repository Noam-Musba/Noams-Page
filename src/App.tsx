import styles from "./App.module.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Contact from "./components/Contact";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>
      <Header theme={theme} onThemeChange={setTheme} />
      <Main />
      <Contact />
    </>
  );
}

export default App;
