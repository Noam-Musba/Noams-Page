import Header from "./components/Header";
import Main from "./components/Main";
import Contact from "./components/Contact";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Header theme={theme} onThemeChange={setTheme} />
      <Main />
      <Contact />
    </>
  );
}

export default App;
