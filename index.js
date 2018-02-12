import { Component } from 'preact';
import Game from "./components/Game";
import styled from 'styled-components';


const PageContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Poppins");
  font-family: "Poppins", sans-serif;
  color: white;
  text-align: center;
  background: lightslategray;
  height: 100%;
  width: auto;
  border-radius: 2em;
  padding: 2em;
`;
const theme = {

}
//the Redux "maple syrup" for our pancakes
// import { Provider } from "react-redux";
// import { createStore } from "redux";

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
	return <PageContainer>
      <h1>React Tic-Tac-Toe</h1>
      <Game />
    </PageContainer>;
}

export default App;

{/* <Counter/> */}
{/* <Provider store={store}> 
</Provider>  */}