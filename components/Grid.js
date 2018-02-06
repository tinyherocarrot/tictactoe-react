import { Component } from "preact";
import styled from "styled-components";
import Box from "./Box";

const StyledGrid = styled.div`
   display: flex;
   flex-flow: row wrap;
   height: 300px;
   width: 300px;
`


class Grid extends Component {
  render() {
    return <StyledGrid>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </StyledGrid>;
  }
}

export default Grid;

