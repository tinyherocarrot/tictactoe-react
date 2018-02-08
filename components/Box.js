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
    handleClick = (value) => {
        console.log(this.props.value)
        this.props.handleBoxClick(value);
    }
    render() {
        return <StyledBox content={this.props.content} onClick={() => this.handleClick(this.props.value)} />;
    }
}

export default Box;

