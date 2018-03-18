import React, { Component } from "react";

const container = {
  width: "50%",
  margin: "auto"
};

const flexWrapper = {
  cursor: "poiner",
  display: "flex",
  width: "600px",
  height: "600px",
  flexWrap: "wrap",
  alignItems: "center"
};
const squareCSS = {
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  height: "200px",
  width: "200px",
  boxSizing: "border-box",
  border: "5px solid black",
  fontSize: "5em"
};
export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerChoice: ["", "", "", "", "", "", "", "", ""],
      gameOver: false,
      winner: ""
    };
    this.initial = true;
    this.currentPlayer = "X";
  }

  checkGameOver(boardValue) {
    let gameOver = true;

    for (let i = 0; i < boardValue.length; i++) {
      if (boardValue[i] === "") {
        gameOver = false;
        break;
      }
    }
    return gameOver;
  }

  checkWinner = X => {
    let playerChoice = [...this.state.playerChoice];
    if (
      (playerChoice[0] === X &&
        playerChoice[1] === X &&
        playerChoice[2] === X) ||
      (playerChoice[3] === X &&
        playerChoice[4] === X &&
        playerChoice[5] === X) ||
      (playerChoice[6] === X &&
        playerChoice[7] === X &&
        playerChoice[8] === X) ||
      (playerChoice[0] === X &&
        playerChoice[3] === X &&
        playerChoice[6] === X) ||
      (playerChoice[1] === X &&
        playerChoice[4] === X &&
        playerChoice[7] === X) ||
      (playerChoice[2] === X &&
        playerChoice[5] === X &&
        playerChoice[8] === X) ||
      (playerChoice[0] === X &&
        playerChoice[4] === X &&
        playerChoice[8] === X) ||
      (playerChoice[2] === X && playerChoice[4] === X && playerChoice[6] === X)
    ) {
      return true;
    }
    return false;
  };

  renderWinner = playerChoice => {
    let x, o;
    x = this.checkWinner("X");
    o = this.checkWinner("O");
    if (x) {
      this.setState({ winner: "X" });
    }
    if (o) {
      this.setState({ winner: "O" });
    }
  };

  handleClick = position => {
    let gameOver,
      playerChoice = [...this.state.playerChoice];
    // currentPlayer = "",
    // initial = true;
    if (playerChoice[position] === "") {
      if (this.initial === true) {
        playerChoice[position] = "X";
        this.currentPlayer = "X";
        this.initial = false;
      } else {
        if (this.currentPlayer === "X") {
          playerChoice[position] = "O";
          this.currentPlayer = "O";
        } else {
          playerChoice[position] = "X";
          this.currentPlayer = "X";
        }
      }
      gameOver = this.checkGameOver(playerChoice);
      if (gameOver) {
        this.setState({ gameOver });
      }

      // this.checkWinner("X");
      // this.checkWinner("O");
      this.setState({ playerChoice }, function() {
        this.renderWinner(playerChoice);
      });
    }
  };

  render() {
    const { gameOver, winner } = this.state;
    const playerChoice = [...this.state.playerChoice];
    let resultDisplay;
    if (winner !== "") resultDisplay = <div>Player {winner} won the game </div>;
    if (gameOver) {
      if (winner === "") resultDisplay = <div> Game Drawn </div>;
    }
    return (
      <div style={container}>
        <h2> {resultDisplay} </h2>
        <div style={flexWrapper}>
          {playerChoice.map((square, i) => {
            return (
              <div
                onClick={() => this.handleClick(i)}
                style={squareCSS}
                key={i}
              >
                {square}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

//export default ({ name }) => <h1>Hello {name}!</h1>;
