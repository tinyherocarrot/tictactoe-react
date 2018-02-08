import { Component } from "preact";
import styled from "styled-components";
import Box from "./Box";

class Grid extends Component {
    state = {
        game: this.props.game
    }
    render() {
        console.log(this.state)
        return <StyledGrid>
            {
                this.state.game.map((cell, i) => <Box content={cell} value={i} {...this.props}/>)
            }
          </StyledGrid>;
    }
}

const StyledGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 300px;
  width: 300px;
`;

export default Grid;

