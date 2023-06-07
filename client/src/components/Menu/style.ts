import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100px;
    height: 100px;
    background-color: rgb(240,240,240);
    position: absolute;
    z-index: 99;
    margin-right: -90px;
    margin-top: 50px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 8px;
    box-sizing: border-box;
    gap: 8px;
`

export const Container = styled.div`
    border-bottom: 1px solid rgb(220, 220, 220);
    width: 100%;
    &:active {
        background-color: red;
    }
`

export const TextButton = styled.button`
    background-color: transparent;
    text-align: left;
    width: 80px;
    height: 50px;
    border-style: none;
    padding: 0 8px;
    border-radius: 6px;
    &:active {
        background-color: rgb(220, 220, 220);
    }
    &:hover {
        background-color: rgb(220, 220, 220);
    }
    
`

export const Text = styled.text`
    color: black;
    font-size: 16px;

`