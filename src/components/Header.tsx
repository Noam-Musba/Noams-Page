import layoutStyles from "../styles/Layout.module.css";
import type { Theme } from "../hooks/useTheme";
import styles from "./Header.module.css";

type HeaderProps = {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
};

function Header({ theme, onThemeChange }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={layoutStyles.container}>
        <div className={styles.topBar}>
          <nav aria-label="Primary">
            <ul className={styles.navigationList}>
              <li>
                <a className={styles.navigationLink} href="#experience">
                  Experience
                </a>
              </li>
              <li>
                <a className={styles.navigationLink} href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a
                  className={styles.navigationLink}
                  href="#engineering-highlights"
                >
                  Engineering highlights
                </a>
              </li>
              <li>
                <a className={styles.navigationLink} href="#background">
                  Background
                </a>
              </li>
              <li>
                <a className={styles.navigationLink} href="#about">
                  About me
                </a>
              </li>
              <li>
                <a className={styles.navigationLink} href="#quiz">
                  Quiz
                </a>
              </li>
              <li>
                <a className={styles.navigationLink} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <label className={styles.themeControl}>
            <input
              className={styles.themeInput}
              type="checkbox"
              checked={theme === "dark"}
              onChange={(event) => {
                onThemeChange(event.target.checked ? "dark" : "light");
              }}
            />
            Dark mode
          </label>
        </div>
        <div className={styles.hero}>
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
      </div>
    </header>
  );
}

export default Header;
