import { useState } from "react";
import "./App.css";
import EndScreen from "./Components/EndScreen";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import { QuizContext } from "./Helper/Context";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [scoreState, setScoreState] = useState(0);
  return (
    <>
      <h1 class="text-center display-5 fw-bold text-primary py-3">Quiz App</h1>

      <div class="card container bg-info py-5 text-center">
        <div className="card-body">
        <QuizContext.Provider value={{ gameState, setGameState , scoreState, setScoreState}}>
          {gameState === "menu" && <MainMenu />}
          {gameState === "quiz" && <Quiz />}
          {gameState === "end" && <EndScreen />}
        </QuizContext.Provider>
        </div>
        <div className="card-footer bg-secondary text-dark"><i class="bi bi-c-circle"></i> 2022 - Robz</div>
      </div>
      
    </>
  );
}

export default App;
