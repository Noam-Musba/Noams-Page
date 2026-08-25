import { navigationItems } from "../data/portfolio";
import type { Theme } from "../hooks/useTheme";
import layoutStyles from "../styles/Layout.module.css";
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
              {navigationItems.map(({ href, label }) => (
                <li key={href}>
                  <a className={styles.navigationLink} href={href}>
                    {label}
                  </a>
                </li>
              ))}
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
