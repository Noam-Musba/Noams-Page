import type { Theme } from "../hooks/useTheme";
import layoutStyles from "../styles/Layout.module.css";
import Navigation from "./Navigation";
import styles from "./Header.module.css";
import ThemeToggle from "./ThemeToggle";

type HeaderProps = {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
};

function Header({ theme, onThemeChange }: HeaderProps) {
  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>
      <div className={layoutStyles.container}>
        <div className={styles.topBar}>
          <Navigation />
          <ThemeToggle theme={theme} onChange={onThemeChange} />
        </div>
      </div>
    </header>
  );
}

export default Header;
