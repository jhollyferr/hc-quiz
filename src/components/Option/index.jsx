import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import "./index.css";

export const Option = ({ option, answer, selectOption }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="option" onClick={() => selectOption()}>
      <p>{option}</p>
    </div>
  );
};
