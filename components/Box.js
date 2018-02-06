import { Component } from "preact";
import styled from "styled-components";

const StyledBox = styled.div`
    border: 1px black solid;
    width: 30%;
    text-align: center;
    font-size: 2em;

    &:after {
        content: "${props => props.content}";
        display: block;
        padding-bottom: 100%;
    }
    &:hover {
        background: gold;
        content: "HEY"
    }

`;

class Box extends Component {
    state = {
        content: "",
    }
    componentDidUpdate() {
        console.log("computer GUESS NOW");

    }
    handleClick(e) {
        this.setState({content: 'x'})
    }
    render() {
        return <StyledBox content={this.state.content} onClick={e => this.handleClick(e)} />;
    }
}

export default Box;

