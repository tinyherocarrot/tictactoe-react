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
    console.log('computer playing');
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

    // If computer wins after this play, reset the board.
    if (this.checkWin(state)) {
      this.resetGame();
    }
    
  }

  // Function which takes in current state, checks for a win, and returns a winner or 0. Should be run after both playerPlay and computerPlay
  // 1 2 3 
  // 4 5 6
  // 7 8 9
  // 1 4 7 
  // 2 5 8
  // 3 6 9
  // 1 5 9
  // 3 5 7 
  checkWin(state) {
    console.log('Checking for a win');    
    let board = state.game;
    const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let matches = winningCombos.filter(combo => board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]] && board[combo[0]] !== "");
    if (matches.length) {
      console.log("Someone won!")
      console.log(matches)

      // check who won
      switch (board[matches[0][0]]) {
        case "X":
        this.setState(prevState => {
          return { wins: prevState.wins + 1 };
        });
        // alert("GOOD JOB BINCH");
          return "player"
        case "O":
          this.setState(prevState => {
            return { losses: prevState.losses + 1 };
          });  
          // alert("YOU LOSE BINCH");   
          return "computer"
      }

      // else if no winning combos found, and no spaces left, return TIE
    } else if (!board.filter(x => !x).length) {
      // alert('tie!');
      return "tie"
    }
    else {
      // no win
      console.log(`Tie? : ${board.filter(x => !x)}`);
      return 0;
    }
  }

  // Function which resets the board
  resetGame() {
    console.log('resetting the board');
    this.setState({
      game: ["", "", "", "", "", "", "", "", ""]
    })
  }

  // Function to be passed to Box component update state with player's choice. 
  handleBoxClick = value => {
    //First, make sure that the space is empty
    if (this.state.game[value] === "") {

      console.log('player playing');
      this.setState(prevState => {
        game: prevState.game.splice(value, 1, "X");
      });
  
      // If game is not won, run computerPlay.
      if (!this.checkWin(this.state)) {
        setTimeout(() => this.computerPlay(this.state), 500);
      }

      // else reset the board 
      else {
        this.resetGame()
      }
    }
  };

  render() {
    return <div>
        <h2>
          PLAYER <span>{this.state.wins}</span>
        </h2>
        <h2>
          COMPUTER <span>{this.state.losses}</span>
        </h2>
        <Grid game={this.state.game} handleBoxClick={this.handleBoxClick} />
      </div>;
  }
}

