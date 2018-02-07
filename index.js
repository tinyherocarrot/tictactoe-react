import { Component } from 'preact';
import Grid from './components/Grid'
import Counter from './components/Counter'


//the "maple syrup" for our pancakes
import { Provider } from "react-redux";
import { createStore } from "redux";

// const game = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
const initialState = {
  count: 0
};
function reducer(state = initialState, action) {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + 1 };
		case "DECREMENT":
			return { count: state.count - 1 };

		default:
			return state;
  }
}
const store = createStore(reducer);

export default class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<div>
					<h1>React Tic-Tac-Toe</h1>
					<Counter/>
					<Grid />
				</div>
			</Provider>
		);
	}
}
