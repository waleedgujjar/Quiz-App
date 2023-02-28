import React, { useContext } from "react";
import { QuizContext } from "../Helper/Context";

const MainMenu = () => {
  const { setGameState } = useContext(QuizContext);
  return (
    <div className="text-center">
      <button
        className="btn btn-lg btn-warning"
        onClick={() => setGameState("quiz")}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default MainMenu;
