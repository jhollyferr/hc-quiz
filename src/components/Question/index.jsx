import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import { Option } from "../Option";

import "./index.css";

export const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const { currentQuestion, questions, answerSelected } = quizState;

  const question = questions[currentQuestion].question;
  const options = questions[currentQuestion].options;
  const answer = questions[currentQuestion].answer;

  const handleSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: {
        answer,
        option,
      },
    });
  };

  return (
    <div id="questions">
      <p>
        Pergunta {currentQuestion + 1} de {questions.length}
      </p>
      <h2>{question}</h2>
      <div id="options-container">
        {options.map((option) => (
          <Option
            key={option}
            option={option}
            answer={answer}
            selectOption={() => handleSelectOption(option)}
          />
        ))}
      </div>
      {answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};
