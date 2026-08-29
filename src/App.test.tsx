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

  it("toggles the navigation and restores focus on Escape", async () => {
    const user = userEvent.setup();
    render(<App />);

    const menuButton = screen.getByRole("button", {
      name: "Open navigation menu",
    });

    expect(menuButton).toHaveAttribute("aria-controls", "primary-navigation");
    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    await user.click(menuButton);

    expect(
      screen.getByRole("button", { name: "Close navigation menu" }),
    ).toHaveAttribute("aria-expanded", "true");

    const navigation = screen.getByRole("navigation", { name: "Primary" });
    const skillsLink = within(navigation).getByRole("link", { name: "Skills" });

    await user.click(skillsLink);

    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    await user.click(menuButton);
    skillsLink.focus();
    await user.keyboard("{Escape}");

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(menuButton).toHaveFocus();
  });

  it("renders engineering highlights and an interactive quiz", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Engineering highlights" }),
    ).toBeVisible();
    expect(
      screen.queryByRole("heading", {
        level: 4,
        name: "What is Noam's favorite music genre?",
      }),
    ).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Take the quiz →" }));

    expect(
      screen.getByRole("heading", {
        level: 4,
        name: "What is Noam's favorite music genre?",
      }),
    ).toBeVisible();

    await user.click(screen.getByRole("button", { name: "Metal" }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Correct! 10 points added.",
    );
  });

  it("reveals and closes the quiz with predictable focus", async () => {
    const user = userEvent.setup();
    render(<App />);

    const quizButton = screen.getByRole("button", { name: "Take the quiz →" });

    expect(quizButton).toHaveAttribute("aria-expanded", "false");
    quizButton.focus();
    await user.keyboard("[Enter]");

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Ready? Let’s see how you do.",
      }),
    ).toHaveFocus();
    expect(quizButton).toHaveAttribute("aria-expanded", "true");

    await user.click(screen.getByRole("button", { name: "Close quiz" }));

    expect(
      screen.queryByRole("heading", {
        level: 4,
        name: "What is Noam's favorite music genre?",
      }),
    ).not.toBeInTheDocument();
    expect(quizButton).toHaveFocus();
    expect(quizButton).toHaveAttribute("aria-expanded", "false");
  });

  it("links to the archived original version", () => {
    render(<App />);

    const legacyLink = screen.getByRole("link", {
      name: "See where this started →",
    });

    expect(legacyLink.getAttribute("href")).toMatch(/\/legacy\/$/);
  });

  it("presents four focused Side Quests", () => {
    render(<App />);

    const sideQuests = screen.getByRole("region", { name: "Side Quests" });

    expect(within(sideQuests).getAllByRole("article")).toHaveLength(4);
    expect(
      within(sideQuests).getByRole("heading", { name: "The Original Site" }),
    ).toBeVisible();
    expect(
      within(sideQuests).getByRole("heading", {
        name: "How well do you know me?",
      }),
    ).toBeVisible();
    expect(
      within(sideQuests).getByRole("heading", { name: "Off the Clock" }),
    ).toBeVisible();
    expect(
      within(sideQuests).getByRole("heading", { name: "Lately" }),
    ).toBeVisible();
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
