import React from "react";
import { render } from "react-dom";
import Board from "./Board";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h2>Tic Tac Toe</h2>
    <Board />
  </div>
);

render(<App />, document.getElementById("root"));
