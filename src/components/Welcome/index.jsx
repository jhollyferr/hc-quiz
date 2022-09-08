import ImageQuiz from "../../img/quiz.svg";

import "./index.css";

export const Welcome = () => {
  return (
    <div id="welcome">
      <h1>Seja bem-vindo</h1>
      <p>Clique no botão abaixo para começar</p>
      <button>Iniciar</button>
      <img src={ImageQuiz} alt="Início do Quiz" />
    </div>
  );
};
