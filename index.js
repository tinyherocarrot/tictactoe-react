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
		game: [0, 0, 0, 0, 0, 0, 0, 0, 0]
	}
	handleBoxClick = value => {
		console.log(value)
		let tempGame = this.state.game
		tempGame[value] = "x"
		this.setState({game: tempGame})
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