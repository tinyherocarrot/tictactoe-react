import { Component } from 'preact';
import Grid from './components/Grid'
import Counter from './components/Counter'


//the Redux "maple syrup" for our pancakes
import { Provider } from "react-redux";
import { createStore } from "redux";

// const initialState = {
//   count: 0
// };
// function reducer(state = initialState, action) {
// 	switch (action.type) {
// 		case "INCREMENT":
// 			return { count: state.count + 1 };
// 		case "DECREMENT":
// 			return { count: state.count - 1 };

// 		default:
// 			return state;
//   }
// }
// const store = createStore(reducer);

export default class App extends Component {
	state = {
		game: ["", "", "", "", "", "", "", "", ""]
	}
	
	computerPlay(state) {
		let choices = state.game
		let computerChoice  = Math.floor(Math.random() * choices.length)
		console.log("# of choices left:", choices.filter(choice => !choice).length);
		if (choices.filter(choice => !choice).length <= 1) {
			console.log("GAME OVAH BINCH")
			return;
		}
	
		{/* while (choices[computerChoice]) {
			console.log("space is occupied, choosing a new square")
		 	computerChoice = Math.floor(Math.random() * choices.length)
		} */}
		choices[computerChoice] = "O"
		this.setState({ game: choices });
	}
	handleBoxClick = value => {
		this.setState(prevState => {
			game: prevState.game.splice(value, 1, "X");
		})

		setTimeout(() => this.computerPlay(this.state), 1000);
	}
	render() {
		return <div>
        <h1>React Tic-Tac-Toe</h1>
        <Grid game={this.state.game} handleBoxClick={this.handleBoxClick} />
      </div>;
	}
}

{/* <Counter/> */}
{/* <Provider store={store}> 
</Provider>  */}