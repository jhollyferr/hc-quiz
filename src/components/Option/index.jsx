import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import "./index.css";

export const Option = ({ option, answer, selectOption }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  const { answerSelected } = quizState;

  return (
    <div
      className={`option ${
        answerSelected && option === answer ? "correct" : ""
      } ${answerSelected && option !== answer ? "wrong" : ""}`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};
