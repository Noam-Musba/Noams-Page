import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the existing portfolio and quiz content", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "W e l c o m e !" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "So who is Noam Musba?" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "1. What is Noam's favorite music genre?",
      }),
    ).toBeInTheDocument();
  });
});
