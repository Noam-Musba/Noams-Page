import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import { quizQuestions } from "../data/quiz";
import styles from "./Quiz.module.css";

export default function Quiz() {
  const [quizState, setQuizState] = useState(initialQuizState);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const shouldFocusHeadingRef = useRef(false);
  const { questionIndex, selectedAnswerIndex, score } = quizState;
  const currentQuestion = quizQuestions[questionIndex];

  useEffect(() => {
    if (!shouldFocusHeadingRef.current) {
      return;
    }

    headingRef.current?.focus();
    shouldFocusHeadingRef.current = false;
  }, [questionIndex]);

  const handleAnswer = (answerIndex: number) => {
    setQuizState((currentState) => {
      const {
        questionIndex: currentQuestionIndex,
        selectedAnswerIndex: currentSelectedAnswerIndex,
        score: currentScore,
      } = currentState;
      const question = quizQuestions[currentQuestionIndex];

      if (!question || currentSelectedAnswerIndex !== null) {
        return currentState;
      }

      const points =
        question.options[answerIndex] === question.answer
          ? CORRECT_ANSWER_POINTS
          : INCORRECT_ANSWER_POINTS;

      return {
        questionIndex: currentQuestionIndex,
        selectedAnswerIndex: answerIndex,
        score: currentScore + points,
      };
    });
  };

  const handleNextQuestion = () => {
    if (selectedAnswerIndex === null) {
      return;
    }

    shouldFocusHeadingRef.current = true;
    setQuizState((currentState) => {
      const {
        questionIndex: currentQuestionIndex,
        selectedAnswerIndex: currentSelectedAnswerIndex,
        score: currentScore,
      } = currentState;

      if (currentSelectedAnswerIndex === null) {
        return currentState;
      }

      return {
        questionIndex: currentQuestionIndex + 1,
        selectedAnswerIndex: null,
        score: currentScore,
      };
    });
  };

  const handleResetQuiz = () => {
    shouldFocusHeadingRef.current = true;
    setQuizState(initialQuizState);
  };

  const perfectScore = quizQuestions.length * CORRECT_ANSWER_POINTS;

  return (
    <div className={styles.quiz}>
      {currentQuestion ? (
        <QuizQuestionCard
          headingRef={headingRef}
          isLastQuestion={questionIndex === quizQuestions.length - 1}
          onAnswer={handleAnswer}
          onNext={handleNextQuestion}
          question={currentQuestion}
          questionIndex={questionIndex}
          selectedAnswerIndex={selectedAnswerIndex}
        />
      ) : (
        <QuizResults
          headingRef={headingRef}
          onRestart={handleResetQuiz}
          perfectScore={perfectScore}
          score={score}
        />
      )}
    </div>
  );
}

type QuizQuestionCardProps = {
  question: QuizQuestion;
  questionIndex: number;
  selectedAnswerIndex: number | null;
  isLastQuestion: boolean;
  headingRef: RefObject<HTMLHeadingElement | null>;
  onAnswer: (answerIndex: number) => void;
  onNext: () => void;
};

function QuizQuestionCard({
  question,
  questionIndex,
  selectedAnswerIndex,
  isLastQuestion,
  headingRef,
  onAnswer,
  onNext,
}: QuizQuestionCardProps) {
  const { answer, options, question: questionText } = question;
  const isAnswered = selectedAnswerIndex !== null;
  const isCorrect = options[selectedAnswerIndex ?? -1] === answer;

  return (
    <div className={styles.questionCard}>
      <div className={styles.questionHeader}>
        <p className={styles.progress}>
          Question {questionIndex + 1} of {quizQuestions.length}
        </p>
        <h4 className={styles.questionHeading} ref={headingRef} tabIndex={-1}>
          {questionText}
        </h4>
      </div>
      <div className={styles.options}>
        {options.map((option, optionIndex) => (
          <QuizAnswerOption
            isAnswered={isAnswered}
            isCorrect={option === answer}
            isSelected={optionIndex === selectedAnswerIndex}
            key={option}
            onSelect={() => {
              onAnswer(optionIndex);
            }}
            option={option}
          />
        ))}
      </div>
      <p className={styles.feedback} role="status">
        {isAnswered &&
          (isCorrect ? (
            <>Correct! {CORRECT_ANSWER_POINTS} points added.</>
          ) : (
            <>
              Incorrect. {Math.abs(INCORRECT_ANSWER_POINTS)} points deducted.
              The correct answer is {answer}.
            </>
          ))}
      </p>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.primaryButton}
          disabled={!isAnswered}
          onClick={onNext}
        >
          {isLastQuestion ? "Finish quiz" : "Next question"}
        </button>
      </div>
    </div>
  );
}

type QuizAnswerOptionProps = {
  option: string;
  isAnswered: boolean;
  isCorrect: boolean;
  isSelected: boolean;
  onSelect: () => void;
};

function QuizAnswerOption({
  option,
  isAnswered,
  isCorrect,
  isSelected,
  onSelect,
}: QuizAnswerOptionProps) {
  const isCorrectAnswer = isAnswered && isCorrect;
  const isIncorrectAnswer = isAnswered && isSelected && !isCorrect;
  let result: string | null = null;

  if (isCorrectAnswer) {
    result = "Correct answer";
  } else if (isIncorrectAnswer) {
    result = "Your answer";
  }

  return (
    <button
      type="button"
      className={[
        styles.option,
        isCorrectAnswer && styles.correct,
        isIncorrectAnswer && styles.incorrect,
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={isAnswered}
      onClick={onSelect}
    >
      <span>{option}</span>
      {result && (
        <>
          {" "}
          <span className={styles.optionResult}>{result}</span>
        </>
      )}
    </button>
  );
}

type QuizResultsProps = {
  score: number;
  perfectScore: number;
  headingRef: RefObject<HTMLHeadingElement | null>;
  onRestart: () => void;
};

function QuizResults({
  score,
  perfectScore,
  headingRef,
  onRestart,
}: QuizResultsProps) {
  return (
    <div className={styles.completed}>
      <h4 className={styles.completedHeading} ref={headingRef} tabIndex={-1}>
        Quiz completed!
      </h4>
      <p className={styles.completedText}>Your final score is: {score}</p>
      <p className={styles.completedText}>
        {score === perfectScore
          ? "Perfect score! Good job!"
          : "Better luck next time!"}
      </p>
      <button
        type="button"
        className={[styles.primaryButton, styles.restartButton].join(" ")}
        onClick={onRestart}
      >
        Restart quiz
      </button>
    </div>
  );
}

type QuizQuestion = (typeof quizQuestions)[number];

type QuizState = {
  questionIndex: number;
  selectedAnswerIndex: number | null;
  score: number;
};

const CORRECT_ANSWER_POINTS = 10;
const INCORRECT_ANSWER_POINTS = -2;

const initialQuizState: QuizState = {
  questionIndex: 0,
  selectedAnswerIndex: null,
  score: 0,
};
