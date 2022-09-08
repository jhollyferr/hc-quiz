import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import WellDoneImage from "../../img/welldone.svg";
import "./index.css";

export const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: x</p>
      <p>Você acertou y de x perguntas.</p>
      <img src={WellDoneImage} alt="Fim do Quiz" />
      <button>Reiniciar</button>
    </div>
  );
};
