import { useContext } from "react";
import { Welcome } from "./components/Welcome";
import { Question } from "./components/Question";
import { QuizContext } from "./context/quiz";

import "./App.css";

export const App = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="app">
      <h1>Quiz de programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
    </div>
  );
};
