import { useState } from "react";
import { Welcome } from "./components/Welcome";

export const App = () => {
  return (
    <div id="app">
      <h1>Quiz de programação</h1>
      <Welcome/>
    </div>
  );
};
