import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the professional portfolio and retained quiz", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Noam Musba" })).toBeVisible();
    expect(
      screen.getByRole("heading", { name: "Professional experience" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { name: "Engineering highlights" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: "1. What is Noam's favorite music genre?",
      }),
    ).toBeVisible();
    const legacyLink = screen.getByRole("link", {
      name: "See the original 2023 version",
    });

    expect(legacyLink.getAttribute("href")).toMatch(/\/legacy\/$/);
  });
});
