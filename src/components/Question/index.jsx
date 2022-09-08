import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import { Option } from "../Option";

import "./index.css";

export const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const { currentQuestion, questions } = quizState;

  const question = questions[currentQuestion].question;
  const options = questions[currentQuestion].options;

  return (
    <div id="questions">
      <p>
        Pergunta {currentQuestion + 1} de {questions.length}
      </p>
      <h2>{question}</h2>
      <div id="options-container">
        {options.map((option) => (
          <Option option={option} key={option} />
        ))}
      </div>
      <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
        Continuar
      </button>
    </div>
  );
};
