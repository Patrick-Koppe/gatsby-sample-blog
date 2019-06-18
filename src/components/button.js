import styled from '@emotion/styled'

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    border: ${props => props.primary ? "1px solid black" : "1px solid grey"};
    color: ${props => props.primary ? "black" : "grey"};
    padding: 10px 20px;
    cursor: pointer;
    outline: none;

    &:hover {
        border-color: ${props => props.primary ? "grey" : "black"};
        background: ${props => props.primary ? "pink" : "white"};
        color: black;
    }
`
export default Button