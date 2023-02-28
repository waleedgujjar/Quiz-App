import React, { useContext, useState } from "react";
import { QuizContext } from "../Helper/Context";
import { questions } from "../Helper/QuestionBank";
import "./Quiz.css";

const Quiz = () => {
  const { scoreState, setScoreState, setGameState } = useContext(QuizContext);

  const [currQues, setCurrQues] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    setOptionChosen("")
    if (questions[currQues].answer === optionChosen) {
      setScoreState(scoreState + 1);
    }
    setCurrQues(currQues + 1);
  };

  const finishQuiz = () => {
    if (questions[currQues].answer === optionChosen) {
      setScoreState(scoreState + 1);
    }
    setGameState("end");
  };

  return (
    <div>
      <h1 className="text-dark">{questions[currQues].prompt}</h1>
      <ul className="list-group">
        <li
          className="list-group-item"
          onClick={() => {
            setOptionChosen("A");
          }}
        >
          <span className="mx-3">
            {optionChosen === "A" && <i class="bi bi-check-circle-fill"></i>}
          </span>
          {questions[currQues].option1}
        </li>
        <li className="list-group-item" onClick={() => setOptionChosen("B")}>
          <span className="mx-3">
            {optionChosen === "B" && <i class="bi bi-check-circle-fill"></i>}
          </span>
          {questions[currQues].option2}
        </li>
        <li className="list-group-item" onClick={() => setOptionChosen("C")}>
          <span className="mx-3">
            {optionChosen === "C" && <i class="bi bi-check-circle-fill"></i>}
          </span>
          {questions[currQues].option3}
        </li>
        <li className="list-group-item" onClick={() => setOptionChosen("D")}>
          <span className="mx-3">
            {optionChosen === "D" && <i class="bi bi-check-circle-fill"></i>}
          </span>
          {questions[currQues].option4}
        </li>
      </ul>
      {currQues === questions.length - 1 ? (
        <button className="btn btn-lg btn-dark my-3" onClick={finishQuiz}>
          Finish <i class="bi bi-hand-thumbs-up-fill"></i>
        </button>
      ) : (
        <button className="btn btn-lg btn-dark my-3" onClick={nextQuestion}>
          Next Question <i class="bi bi-chevron-double-right"></i>
        </button>
      )}
    </div>
  );
};

export default Quiz;
