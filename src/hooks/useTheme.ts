import { useEffect, useLayoutEffect, useState } from "react";

export type Theme = "light" | "dark";

type ThemePreference = {
  theme: Theme;
  source: "system" | "user";
};

const STORAGE_KEY = "noam-portfolio-theme";
const DARK_MODE_QUERY = "(prefers-color-scheme: dark)";
const THEME_COLORS: Record<Theme, string> = {
  light: "#f6f7fb",
  dark: "#0e1118",
};

export function useTheme() {
  const [preference, setPreference] = useState(getInitialPreference);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = preference.theme;
    document
      .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLORS[preference.theme]);
  }, [preference.theme]);

  useEffect(() => {
    if (preference.source === "user") {
      return;
    }

    const systemPreference = window.matchMedia(DARK_MODE_QUERY);
    const handleSystemPreferenceChange = (event: MediaQueryListEvent) => {
      setPreference({
        theme: event.matches ? "dark" : "light",
        source: "system",
      });
    };

    systemPreference.addEventListener("change", handleSystemPreferenceChange);

    return () => {
      systemPreference.removeEventListener(
        "change",
        handleSystemPreferenceChange,
      );
    };
  }, [preference.source]);

  const setTheme = (theme: Theme) => {
    persistTheme(theme);
    setPreference({ theme, source: "user" });
  };

  return { theme: preference.theme, setTheme };
}

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

function getStoredTheme(): Theme | null {
  try {
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    return isTheme(storedTheme) ? storedTheme : null;
  } catch {
    // The system preference remains available when storage is blocked.
    return null;
  }
}

function getInitialPreference(): ThemePreference {
  const storedTheme = getStoredTheme();

  if (storedTheme) {
    return { theme: storedTheme, source: "user" };
  }

  return {
    theme: window.matchMedia(DARK_MODE_QUERY).matches ? "dark" : "light",
    source: "system",
  };
}

function persistTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // The selected theme still applies for this visit when storage is blocked.
  }
}
