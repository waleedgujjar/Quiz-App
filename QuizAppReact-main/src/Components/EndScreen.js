import React, { useContext } from "react";
import { QuizContext } from "../Helper/Context";
import { questions } from "../Helper/QuestionBank";
const EndScreen = () => {
  const { scoreState, setScoreState, setGameState } = useContext(QuizContext);

  const resetQuiz = () => {
    setScoreState(0);
    setGameState("menu");
  };
  return (
    <div className="text-dark">
      <h1>Quiz Finished</h1>
      <h3 className="my-3">
        {scoreState} / {questions.length}
      </h3>
      {scoreState < Math.ceil(questions.length / 2)-1 ? (
        <h4>
          Need more practise <i class="bi bi-emoji-frown"></i>
        </h4>
      ) : (
        <h4>
          Good! <i class="bi bi-emoji-smile"></i>
        </h4>
      )}
      <button className="btn btn-lg btn-warning my-3" onClick={resetQuiz}>
        Start Again
      </button>
    </div>
  );
};

export default EndScreen;
