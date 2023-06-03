import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0, .6);
    position: fixed;
    display:flex ;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    position: fixed;
    z-index: 100;
    background-color: white;
    width: 700px;
    height: 600px;
    border-radius: 6px;
    padding: 32px;
    box-sizing: border-box;
`

export const Title = styled.text`
    color: black;
    font-size: 32px;
    font-weight: bold;

`

export const Header = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    margin-bottom: 32px;
`
export const Buttons = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    margin-bottom: 16px;
    gap: 8px;
`

