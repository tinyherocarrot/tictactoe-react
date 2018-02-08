// Logic component
import { Component } from "preact";
import Grid from "./Grid";

export default class Game extends Component {
  state = {
    game: ["", "", "", "", "", "", "", "", ""]
  };

  computerPlay(state) {
    let choices = state.game;
    let computerChoice = Math.floor(Math.random() * choices.length);
    console.log("# of choices left:", choices.filter(choice => !choice).length);
    if (choices.filter(choice => !choice).length <= 1) {
      console.log("GAME OVAH BINCH");
      return;
    }
    console.log("I CHOSE...", choices[computerChoice]);
    while (choices[computerChoice]) {
      console.log("space is occupied, choosing a new square");
      computerChoice = Math.floor(Math.random() * choices.length);
      console.log("new choice", choices[computerChoice]);
    }
    choices[computerChoice] = "O";
    this.setState({ game: choices });
  }
  handleBoxClick = value => {
    this.setState(prevState => {
      game: prevState.game.splice(value, 1, "X");
    });

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

