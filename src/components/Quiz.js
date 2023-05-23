import React, { useState } from "react";

/** add points? */
function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      question: "What is Noam's favorite music genre?",
      options: ["Metal", "Pop", "Rap", "Classical"],
      answer: 0,
    },
    {
      question: "Where did Noam travel to?",
      options: ["Madrid", "Paris", "Whole western Europe", "London"],
      answer: 3,
    },
    {
      question: "What is Noam's favorite soccer team?",
      options: ["Chelsea", "Arsenal", "Manchester United", "Barcelona"],
      answer: 2,
    },
    {
      question: "What is Noam's favorite NBA team?",
      options: ["LA Lakers", "Boston Celtics", "Chicago Bulls", "GS Warriors"],
      answer: 3,
    },
    {
      question: "What is Noam's favorite alcohol drink?",
      options: ["Whiskey", "Vodka", "Gin", "Rum"],
      answer: 0,
    },
    /**continue to add questions */
  ];

  const handleChosenOption = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setQuestionNumber((prevQuestion) => prevQuestion + 1);
  };

  const handleResetQuiz = () => {
    setSelectedAnswer(null);
    setQuestionNumber(0);
  };

  const renderQuestion = () => {
    const { question, options, answer } = questions[questionNumber];

    return (
      <div
        style={{
          border: "3px solid black",
          width: "600px",
          marginLeft: "230px",
        }}
      >
        <h2>{question}</h2>
        {options.map((option, index) => (
          <div
            style={{
              backgroundColor:
                index === selectedAnswer
                  ? selectedAnswer === answer
                    ? "green"
                    : "red"
                  : "initial",
              borderTop: "1px solid black",
              height: "50px",
              paddingTop: "20px",
              cursor: "pointer",
            }}
            key={index}
            onClick={() => handleChosenOption(index)}
          >
            {option}
          </div>
        ))}
        <div
          style={{
            borderTop: "1px solid black",
            height: "50px",
            paddingTop: "20px",
          }}
        >
          <button
            style={{
              width: "100px",
              height: "40px",
              color: "white",
              backgroundColor: "blue",
              cursor: "pointer",
              border: "none",
              borderRadius: "10px"
            }}
            onClick={handleNextQuestion}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "lightcyan", paddingBottom: "15px" }}>
      <h1>Come try my quiz!</h1>
      {questionNumber < questions.length ? (
        renderQuestion()
      ) : (
        <div>
          <h2>QUIZ COMPLETED!</h2>
          <button onClick={handleResetQuiz}>Start Over</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
