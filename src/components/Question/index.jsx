import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import "./index.css";

export const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const { currentQuestion, questions } = quizState;

  const question = questions[currentQuestion].question;

  return (
    <div id="questions">
      <p>
        Pergunta {currentQuestion + 1} de {questions.length}
      </p>
      <h2>{question}</h2>
      <div id="options-container">
        <p>opcoes</p>
      </div>
      <button>Continuar</button>
    </div>
  );
};
