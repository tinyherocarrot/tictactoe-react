import { Component } from 'preact';
import Game from "./components/Game";



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
const App = () => {
	return <div>
      <h1>React Tic-Tac-Toe</h1>
      <Game />
    </div>;
}

export default App;


{/* <Counter/> */}
{/* <Provider store={store}> 
</Provider>  */}