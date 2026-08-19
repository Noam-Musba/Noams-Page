import React, { useState } from "react";

/** add points? */
function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

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
    /**continue to add questions */
  ];

  const handleChosenOption = (index) => {
    setSelectedAnswer(index);
    if (questions[questionNumber].answer === index) {
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
    const { question, options, answer } = questions[questionNumber];

    return (
      <div
        style={{
          border: "3px solid black",
          width: "600px",
          marginLeft: "265px",
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
              borderRadius: "10px",
            }}
            onClick={handleNextQuestion}
          >
            {questionNumber === questions.length - 1 ? "Finish" : "next"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "lightblue", paddingBottom: "15px" }}>
      <h1>Come try my quiz and check your score!</h1>
      <h3>On right answer: receive 10 points, on a wrong: -2 points</h3>
      {questionNumber < questions.length ? (
        renderQuestion()
      ) : (
        <div>
          <h2>QUIZ COMPLETED!</h2>
          <h3>Your final score is: {score}</h3>
          {score < 50 ? (
            <h4>Better luck next time!</h4>
          ) : score > 50 ? (
            <h4>It is not nice to cheat! ;) </h4>
          ) : (
            <h4>Perfect score! Good job!</h4>
          )}
          <button onClick={handleResetQuiz}>Start Over</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
