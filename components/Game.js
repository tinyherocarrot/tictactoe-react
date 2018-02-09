// Logic component
import { Component } from "preact";
import Grid from "./Grid";

export default class Game extends Component {
  state = {
    wins: 0,
    losses: 0,
    game: ["", "", "", "", "", "", "", "", ""]
  };

  // Function which takes in current state, 
  // RANDOMLY makes computer's pick from available squares, 
  // and updates state 
  computerPlay(state) {
    let choices = state.game;
    let computerChoice = Math.floor(Math.random() * choices.length);
    if (choices.filter(choice => !choice).length <= 1) {
      return;
    }
    while (choices[computerChoice]) {
      computerChoice = Math.floor(Math.random() * choices.length);
    }
    choices[computerChoice] = "O";
    this.setState({ game: choices });

    this.checkWin(state)
  }

  // Function which takes in current state, checks for a win, and returns a winner. Should be run after both playerPlay and computerPlay
  // 1 2 3 
  // 4 5 6
  // 7 8 9
  // 1 4 7 
  // 2 5 8
  // 3 6 9
  // 1 5 9
  // 3 5 7 
  checkWin(state) {
    let board = state.game;
    const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let matches = winningCombos.filter(combo => board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]] && board[combo[0]] !== "");
    if (matches.length) {
      console.log("Someone won!")
      console.log(matches)
      switch (board[matches[0][0]]) {
        case "X":
          alert("GOOD JOB BINCH")
          break;
        case "O":
          alert("YOU LOSE BINCH");        
          break;
      }
    } 
  }
  // Function which resets the board
  resetGame() {
    this.setState({
      game: ["", "", "", "", "", "", "", "", ""]
    })
  }

  // Function to be passed to Box component update state with player's choice. 
  handleBoxClick = value => {
    this.setState(prevState => {
      game: prevState.game.splice(value, 1, "X");
    });

    this.checkWin(this.state)
    setTimeout(() => this.computerPlay(this.state), 1000);
  };

  render() {
    return (
      <div>
        <Grid game={this.state.game} handleBoxClick={this.handleBoxClick} />
      </div>
    );
  }
}

