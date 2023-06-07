import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: bold;
`

export const TextInput = styled.input`
    background-color: white;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(240, 240, 240);
    color: black;
    border-radius: 6px;
    padding: 16px;
    height: 20px;
    

`

export const Description = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 4px;
`

export const Label = styled.text`
    color: rgb(0, 0, 0);
`
export const Direct = styled.button`
    color: rgb(89, 203, 253);
    font-size: 12px;
    background-color: transparent;
    border-style: none;
    &:hover {
        color: rgb(70, 150, 200);
    }
    &:active {
        color: rgb(100, 230, 255);
    }
`
