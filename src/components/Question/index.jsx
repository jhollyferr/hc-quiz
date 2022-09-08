import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import "./index.css";

export const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  console.log(quizState);

  return <div></div>;
};
