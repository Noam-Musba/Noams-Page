import styles from "./App.module.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>
      <Header />
      <Main />
      <Contact />
    </>
  );
}

export default App;
