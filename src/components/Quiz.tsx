import { useState } from "react";
import sectionStyles from "../styles/Section.module.css";
import styles from "./Quiz.module.css";

type QuizQuestion = {
  question: string;
  options: readonly string[];
  answer: number;
};

const questions = [
  {
    question: "1. What is Noam's favorite music genre?",
    options: ["Metal", "Pop", "Rap", "Classical"],
    answer: 0,
  },
  {
    question: "2. Where did Noam travel to?",
    options: ["Madrid", "Paris", "Whole western Europe", "London"],
    answer: 3,
  },
  {
    question: "3. What is Noam's favorite soccer team?",
    options: ["Chelsea", "Arsenal", "Manchester United", "Barcelona"],
    answer: 2,
  },
  {
    question: "4. What is Noam's favorite NBA team?",
    options: ["LA Lakers", "Boston Celtics", "Chicago Bulls", "GS Warriors"],
    answer: 3,
  },
  {
    question: "5. What is Noam's favorite alcohol drink?",
    options: ["Whiskey", "Vodka", "Gin", "Rum"],
    answer: 0,
  },
] satisfies readonly QuizQuestion[];

/** add points? */
function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const handleChosenOption = (index: number) => {
    const currentQuestion = questions[questionNumber];

    if (!currentQuestion) {
      return;
    }

    setSelectedAnswer(index);
    if (currentQuestion.answer === index) {
      setScore((prevScore) => prevScore + 10);
    } else {
      setScore((prevScore) => prevScore - 2);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setQuestionNumber((prevQuestion) => prevQuestion + 1);
  };

  const handleResetQuiz = () => {
    setScore(0);
    setSelectedAnswer(null);
    setQuestionNumber(0);
  };

  const renderQuestion = () => {
    const currentQuestion = questions[questionNumber];

    if (!currentQuestion) {
      return null;
    }

    const { question, options, answer } = currentQuestion;

    return (
      <div className={styles.questionCard}>
        <h3 className={styles.questionHeading}>{question}</h3>
        <div className={styles.options}>
          {options.map((option, index) => {
            const isSelected = index === selectedAnswer;
            const stateClassName = isSelected
              ? index === answer
                ? styles.correct
                : styles.incorrect
              : "";

            return (
              <button
                type="button"
                aria-pressed={isSelected}
                className={[styles.option, stateClassName]
                  .filter(Boolean)
                  .join(" ")}
                key={option}
                onClick={() => {
                  handleChosenOption(index);
                }}
              >
                {option}
              </button>
            );
          })}
        </div>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.primaryButton}
            onClick={handleNextQuestion}
          >
            {questionNumber === questions.length - 1
              ? "Finish quiz"
              : "Next question"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <section
      id="quiz"
      className={[sectionStyles.section, styles.quiz].join(" ")}
    >
      <h2>Come try my quiz and check your score!</h2>
      <p>On a right answer: receive 10 points; on a wrong answer: lose 2.</p>
      {questionNumber < questions.length ? (
        renderQuestion()
      ) : (
        <div className={styles.completed}>
          <h3 className={styles.completedHeading}>Quiz completed!</h3>
          <p className={styles.completedText}>Your final score is: {score}</p>
          {score < 50 ? (
            <p className={styles.completedText}>Better luck next time!</p>
          ) : score > 50 ? (
            <p className={styles.completedText}>It is not nice to cheat! ;)</p>
          ) : (
            <p className={styles.completedText}>Perfect score! Good job!</p>
          )}
          <button
            type="button"
            className={[styles.primaryButton, styles.restartButton].join(" ")}
            onClick={handleResetQuiz}
          >
            Restart quiz
          </button>
        </div>
      )}
    </section>
  );
}

export default Quiz;
