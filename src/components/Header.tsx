import profilePhoto from "../assets/profile-pic.jpg";
import type { Theme } from "../hooks/useTheme";
import layoutStyles from "../styles/Layout.module.css";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";

type HeaderProps = {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
};

function Header({ theme, onThemeChange }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={layoutStyles.container}>
        <div className={styles.topBar}>
          <Navigation />
          <ThemeToggle theme={theme} onChange={onThemeChange} />
        </div>
        <div className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>Software Engineer</p>
            <h1 className={styles.name}>Noam Musba</h1>
            <p className={styles.specialty}>
              Frontend-focused · React · TypeScript
            </p>
            <p className={styles.introduction}>
              Software engineer with three years of experience building product
              features and owning developer tooling, quality, observability, and
              deployment automation.
            </p>
          </div>
          <img
            className={styles.profileImage}
            src={profilePhoto}
            alt="Noam Musba smiling"
            width={720}
            height={900}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
