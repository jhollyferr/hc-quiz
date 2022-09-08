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
};

const quizReducer = (state, action) => {
  console.table(state, action);

  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES.playing,
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
