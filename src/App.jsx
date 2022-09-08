import { useContext, useEffect } from "react";
import { Welcome } from "./components/Welcome";
import { Question } from "./components/Question";
import { QuizContext } from "./context/quiz";

import "./App.css";
import { GameOver } from "./components/GameOver";

export const App = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div id="app">
      <h1>Quiz de programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
};
