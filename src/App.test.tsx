import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders a clear professional content hierarchy", () => {
    render(<App />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(
      screen.getByRole("heading", { level: 1, name: "Noam Musba" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { name: "Professional experience" }),
    ).toBeVisible();
  });

  it("shows Noam's portrait in the introduction", () => {
    render(<App />);

    expect(
      screen.getByRole("img", { name: "Noam Musba smiling" }),
    ).toBeVisible();
  });

  it("provides keyboard-friendly page navigation", () => {
    render(<App />);

    expect(
      screen.getByRole("link", { name: "Skip to main content" }),
    ).toHaveAttribute("href", "#main-content");
    expect(screen.getByRole("navigation", { name: "Primary" })).toBeVisible();
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
  });

  it("points every primary navigation link to existing page content", () => {
    render(<App />);

    const navigation = screen.getByRole("navigation", { name: "Primary" });
    const unresolvedLinks = within(navigation)
      .getAllByRole("link")
      .filter((link) => {
        const href = link.getAttribute("href");

        return href === null || document.querySelector(href) === null;
      });

    expect(unresolvedLinks).toEqual([]);
  });

  it("renders engineering highlights and an interactive quiz", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Engineering highlights" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: "What is Noam's favorite music genre?",
      }),
    ).toBeVisible();

    await user.click(screen.getByRole("button", { name: "Metal" }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Correct! 10 points added.",
    );
  });

  it("links to the archived original version", () => {
    render(<App />);

    const legacyLink = screen.getByRole("link", {
      name: "See the original 2023 version",
    });

    expect(legacyLink.getAttribute("href")).toMatch(/\/legacy\/$/);
  });

  it("links to the portfolio source repository", () => {
    render(<App />);

    expect(
      screen.getByRole("link", {
        name: "View source code",
      }),
    ).toHaveAttribute("href", "https://github.com/Noam-Musba/Noams-Page");
  });
});
