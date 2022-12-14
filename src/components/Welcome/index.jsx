import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import ImageQuiz from "../../img/quiz.svg";

import "./index.css";

export const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h1>Seja bem-vindo</h1>
      <p>Clique no botão abaixo para começar</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={ImageQuiz} alt="Início do Quiz" />
    </div>
  );
};
