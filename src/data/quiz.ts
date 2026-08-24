type QuizQuestion = {
  question: string;
  options: readonly string[];
  answer: string;
};

export const quizQuestions = [
  {
    question: "What is Noam's favorite music genre?",
    options: ["Metal", "Pop", "Rap", "Classical"],
    answer: "Metal",
  },
  {
    question: "Where did Noam travel to?",
    options: ["Madrid", "Paris", "Whole western Europe", "London"],
    answer: "London",
  },
  {
    question: "What is Noam's favorite soccer team?",
    options: ["Chelsea", "Arsenal", "Manchester United", "Barcelona"],
    answer: "Manchester United",
  },
  {
    question: "What is Noam's favorite NBA team?",
    options: ["LA Lakers", "Boston Celtics", "Chicago Bulls", "GS Warriors"],
    answer: "GS Warriors",
  },
  {
    question: "What is Noam's favorite alcohol drink?",
    options: ["Whiskey", "Vodka", "Gin", "Rum"],
    answer: "Whiskey",
  },
] satisfies readonly QuizQuestion[];
