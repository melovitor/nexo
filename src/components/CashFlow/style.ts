import styled from "styled-components";

export const Wrapper = styled.div`
    flex: 1;
    padding: 32px;
    box-sizing: border-box;
    margin-top: 64px;
    background-color: white;
    width: 1280px;
    border-radius: 6px;
    margin-bottom: 32px;
`
export const Header = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Input = styled.input`
    height: 45px;
    width: 256px;
    background-color: rgb(250, 250, 250);
    border-radius: 4px;
    border-width: 1px;
    border-color: rgb(220, 220, 220);
    border-style: solid;
    padding: 16px;
    box-sizing: border-box;        
    color: black ;
`
export const Container = styled.div`
    margin-top: 64px;
    margin-bottom: 24px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
`
export const Sessions = styled.div`
    width: 256px ;
`
export const StatusSession = styled.div`
    width: 128px ;
    display: flex;
    justify-content: center;
`