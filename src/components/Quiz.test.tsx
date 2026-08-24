import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Quiz from "./Quiz";

type User = ReturnType<typeof userEvent.setup>;

const remainingCorrectAnswers = [
  "London",
  "Manchester United",
  "GS Warriors",
  "Whiskey",
];

async function completeRemainingQuestions(user: User) {
  for (const [index, answer] of remainingCorrectAnswers.entries()) {
    await user.click(screen.getByRole("button", { name: answer }));
    await user.click(
      screen.getByRole("button", {
        name:
          index === remainingCorrectAnswers.length - 1
            ? "Finish quiz"
            : "Next question",
      }),
    );
  }
}

async function completePerfectQuiz(user: User) {
  await user.click(screen.getByRole("button", { name: "Metal" }));
  await user.click(screen.getByRole("button", { name: "Next question" }));
  await completeRemainingQuestions(user);
}

describe("Quiz", () => {
  it("requires an answer before continuing", () => {
    render(<Quiz />);

    expect(screen.getByText("Question 1 of 5")).toBeVisible();
    expect(
      screen.getByRole("button", { name: "Next question" }),
    ).toBeDisabled();
    expect(screen.getByRole("status")).toBeEmptyDOMElement();
  });

  it("identifies correct and incorrect answers without relying on color", async () => {
    const user = userEvent.setup();
    render(<Quiz />);

    await user.click(screen.getByRole("button", { name: "Pop" }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Incorrect. 2 points deducted. The correct answer is Metal.",
    );
    expect(
      screen.getByRole("button", { name: "Pop Your answer" }),
    ).toBeDisabled();
    expect(
      screen.getByRole("button", { name: "Metal Correct answer" }),
    ).toBeDisabled();
  });

  it("supports answering and continuing with the keyboard", async () => {
    const user = userEvent.setup();
    render(<Quiz />);

    const answer = screen.getByRole("button", { name: "Metal" });
    answer.focus();
    await user.keyboard("[Space]");

    expect(screen.getByRole("status")).toHaveTextContent(
      "Correct! 10 points added.",
    );

    await user.tab();
    const nextButton = screen.getByRole("button", { name: "Next question" });
    expect(nextButton).toHaveFocus();

    await user.keyboard("[Enter]");
    expect(
      screen.getByRole("heading", { name: "Where did Noam travel to?" }),
    ).toHaveFocus();
  });

  it("prevents duplicate scoring and calculates the final score", async () => {
    const user = userEvent.setup();
    render(<Quiz />);

    await user.click(screen.getByRole("button", { name: "Pop" }));
    await user.click(
      screen.getByRole("button", { name: "Metal Correct answer" }),
    );
    await user.click(screen.getByRole("button", { name: "Next question" }));
    await completeRemainingQuestions(user);

    expect(
      screen.getByRole("heading", { name: "Quiz completed!" }),
    ).toBeVisible();
    expect(screen.getByText("Your final score is: 38")).toBeVisible();
  });

  it("resets a completed quiz", async () => {
    const user = userEvent.setup();
    render(<Quiz />);

    await completePerfectQuiz(user);
    await user.click(screen.getByRole("button", { name: "Restart quiz" }));

    expect(
      screen.getByRole("heading", {
        name: "What is Noam's favorite music genre?",
      }),
    ).toHaveFocus();
    expect(screen.getByText("Question 1 of 5")).toBeVisible();
    expect(
      screen.getByRole("button", { name: "Next question" }),
    ).toBeDisabled();
  });
});
