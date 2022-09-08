import { createContext, useReducer } from "react";
import { questions } from "../data/questions";

const STAGES = {
  start: "Start",
  playing: "Playing",
  end: "End",
};

const initialState = {
  gameStage: STAGES.start,
  questions: questions,
  currentQuestion: 0,
};

const quizReducer = (state, action) => {
  console.table(state, action);

  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES.playing,
      };
    case "REORDER_QUESTIONS":
      const reoderedQuestions = questions.sort(() => Math.random() - 0.5);

      return {
        ...state,
        questions: reoderedQuestions,
      };
    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      let endGame = !questions[nextQuestion];
      // let endGame = !questions[nextQuestion] ? true : false;

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES.end : state.gameStage,
      };
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
