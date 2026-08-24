import { act, fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";

const STORAGE_KEY = "noam-portfolio-theme";

function mockSystemTheme(theme: "light" | "dark") {
  let matches = theme === "dark";
  let changeListener: ((event: MediaQueryListEvent) => void) | undefined;

  vi.spyOn(window, "matchMedia").mockImplementation(
    (query: string) =>
      ({
        get matches() {
          return matches;
        },
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(
          (
            _eventName: string,
            listener: (event: MediaQueryListEvent) => void,
          ) => {
            changeListener = listener;
          },
        ),
        removeEventListener: vi.fn(
          (
            _eventName: string,
            listener: (event: MediaQueryListEvent) => void,
          ) => {
            if (changeListener === listener) {
              changeListener = undefined;
            }
          },
        ),
        dispatchEvent: vi.fn(),
      }) as unknown as MediaQueryList,
  );

  return {
    changeTo(nextTheme: "light" | "dark") {
      matches = nextTheme === "dark";
      changeListener?.({ matches } as MediaQueryListEvent);
    },
  };
}

describe("theme", () => {
  beforeEach(() => {
    document.querySelector('meta[name="theme-color"]')?.remove();
    const themeColorMetadata = document.createElement("meta");
    themeColorMetadata.name = "theme-color";
    themeColorMetadata.content = "#f6f7fb";
    document.head.append(themeColorMetadata);
  });

  it("uses the system preference when no choice is saved", () => {
    mockSystemTheme("dark");

    render(<App />);

    expect(screen.getByRole("checkbox", { name: "Dark mode" })).toBeChecked();
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    expect(document.querySelector('meta[name="theme-color"]')).toHaveAttribute(
      "content",
      "#0e1118",
    );
  });

  it("restores a saved choice instead of the system preference", () => {
    localStorage.setItem(STORAGE_KEY, "light");
    mockSystemTheme("dark");

    render(<App />);

    expect(
      screen.getByRole("checkbox", { name: "Dark mode" }),
    ).not.toBeChecked();
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
  });

  it("follows system preference changes when no choice is saved", () => {
    const systemTheme = mockSystemTheme("light");
    render(<App />);

    expect(
      screen.getByRole("checkbox", { name: "Dark mode" }),
    ).not.toBeChecked();

    act(() => {
      systemTheme.changeTo("dark");
    });

    expect(screen.getByRole("checkbox", { name: "Dark mode" })).toBeChecked();
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  });

  it("keeps the user's choice when the system preference changes", () => {
    const systemTheme = mockSystemTheme("light");
    render(<App />);

    fireEvent.click(screen.getByRole("checkbox", { name: "Dark mode" }));

    act(() => {
      systemTheme.changeTo("dark");
      systemTheme.changeTo("light");
    });

    expect(screen.getByRole("checkbox", { name: "Dark mode" })).toBeChecked();
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    expect(localStorage.getItem(STORAGE_KEY)).toBe("dark");
  });

  it("toggles between themes and persists each choice", () => {
    mockSystemTheme("light");
    render(<App />);

    const themeControl = screen.getByRole("checkbox", { name: "Dark mode" });

    fireEvent.click(themeControl);

    expect(themeControl).toBeChecked();
    expect(localStorage.getItem(STORAGE_KEY)).toBe("dark");
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");

    fireEvent.click(themeControl);

    expect(themeControl).not.toBeChecked();
    expect(localStorage.getItem(STORAGE_KEY)).toBe("light");
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
  });
});
