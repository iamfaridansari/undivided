import React, { useState } from "react";

const Quiz = () => {
  let database = [
    {
      question: "Q1: What is the full form of HTML?",
      answers: [
        { answer: "HyperTrick Moveable Language", isCorrect: false },
        { answer: "HyperText Makeup Language", isCorrect: false },
        { answer: "HyperText Markup Language", isCorrect: true },
        { answer: "HyperTrans Movable Language", isCorrect: false },
      ],
    },
    {
      question: "Q2: What is the full form of CSS?",
      answers: [
        { answer: "Create Style Sheet", isCorrect: false },
        { answer: "Cascading Style Sheet", isCorrect: true },
        { answer: "Common Style Sheet", isCorrect: false },
        { answer: "Cascading Service Sheet", isCorrect: false },
      ],
    },
    {
      question: "Q3: What is the full form of JS?",
      answers: [
        { answer: "JavaScript", isCorrect: true },
        { answer: "JavaService", isCorrect: false },
        { answer: "JavaSemen", isCorrect: false },
        { answer: "JavaSource", isCorrect: false },
      ],
    },
    {
      question: "Q4: What is the full form of IT?",
      answers: [
        { answer: "Improper Technology", isCorrect: false },
        { answer: "Information Transfer", isCorrect: false },
        { answer: "Information Transmission", isCorrect: false },
        { answer: "Information Technology", isCorrect: true },
      ],
    },
    {
      question: "Q5: What is the full form of DBMS?",
      answers: [
        { answer: "DataBio Management System", isCorrect: false },
        { answer: "DataBreach Managing System", isCorrect: false },
        { answer: "DataBase Management System", isCorrect: true },
        { answer: "DataBubble Management System", isCorrect: false },
      ],
    },
    {
      question: "Q6: How many types of programming language are there?",
      answers: [
        { answer: "One", isCorrect: false },
        { answer: "Two", isCorrect: false },
        { answer: "Three", isCorrect: true },
        { answer: "More than 3", isCorrect: false },
      ],
    },
    {
      question: "Q7: Bootstrap is a programming language",
      answers: [
        { answer: "True", isCorrect: false },
        { answer: "False", isCorrect: true },
      ],
    },
    {
        question: "Q8: Inside which HTML element do we put the JavaScript?",
        answers: [
          { answer: "javascript", isCorrect: false },
          { answer: "script", isCorrect: true },
          { answer: "src", isCorrect: false },
          { answer: "js", isCorrect: false },
        ],
      },
    {
        question: "Q9: Django is framework of which back-end language",
        answers: [
          { answer: "Ruby", isCorrect: false },
          { answer: "Java", isCorrect: false },
          { answer: "C#", isCorrect: false },
          { answer: "Python", isCorrect: true },
        ],
      },
    {
        question: "Q10: C++ is a front-end language",
        answers: [
            { answer: "True", isCorrect: false },
            { answer: "False", isCorrect: true },
        ],
      },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  let handleClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    let nextQuestion = currentQuestion + 1;
    if (nextQuestion < database.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  let restart = () => {
      window.location.reload()
  }
  return (
    <div className="container-fluid fluid bg-light d-flex align-items-center justify-content-center">
      <div
        className="container p-5 bg-dark text-white rounded shadow"
        style={{ maxWidth: "800px" }}
      >
        {showScore ? (
          <>
            <h3 className="text-center">
              Your score is {score}/{database.length}
            </h3>
            <div className="text-center">
              <button className="btn btn-success" onClick={restart}>Restart</button>
            </div>
          </>
        ) : (
          <>
            <h5>{database[currentQuestion].question}</h5>
            <div className="row mx-auto mt-3">
              {database[currentQuestion].answers.map((answer, index) => {
                return (
                  <div className="col-md-6" key={index}>
                    <button
                      onClick={() => handleClick(answer.isCorrect)}
                      className="btn btn-primary text-white mb-3"
                      style={{ width: "100%" }}
                    >
                      {answer.answer}
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
