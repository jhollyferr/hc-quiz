import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import WellDoneImage from "../../img/welldone.svg";
import "./index.css";

export const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const { score, questions } = quizState;

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {score}</p>
      <p>
        Você acertou {score} de {questions.length}{" "}
      </p>
      <img src={WellDoneImage} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};
