import { Component } from 'preact';
import Grid from './components/Grid'

const game = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

export default class App extends Component {
	state = {
		"game": game,
		
	}

	render() {
		return (
			<div>
				<h1>React Tic-Tac-Toe</h1>
				<Grid />
			</div>
		);
	}
}
