import styled from "styled-components"

export const ButtonStyle = styled.button`
    background-color: transparent;
    border-style: none;
    color: white;
    border-radius: 6px;
    padding: 16px;
    margin-top: 16px;  
`
export const Content = styled.text`
    color: black;
`
export const Reference = styled.text`
    color:  rgb(44, 159, 228);
    font-weight: bold;

    &:active {
        color: rgb(84, 199, 255);
    }
`