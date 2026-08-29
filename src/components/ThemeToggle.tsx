import type { Theme } from "../hooks/useTheme";
import styles from "./ThemeToggle.module.css";

type ThemeToggleProps = {
  theme: Theme;
  onChange: (theme: Theme) => void;
};

function ThemeToggle({ theme, onChange }: ThemeToggleProps) {
  const nextTheme = theme === "dark" ? "light" : "dark";
  const nextThemeLabel = nextTheme === "dark" ? "Dark" : "Light";

  return (
    <button
      className={styles.button}
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      onClick={() => {
        onChange(nextTheme);
      }}
    >
      <span className={styles.icon} aria-hidden="true">
        {nextTheme === "dark" ? "☾" : "☀︎"}
      </span>
      <span>{nextThemeLabel} mode</span>
    </button>
  );
}

export default ThemeToggle;
