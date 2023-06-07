import styled from "styled-components";
import BgHome from '../../assets/BackgroundHome.png';

export const Wrapper = styled.div`
    background-image: url(${BgHome});
    width: 100%;
    height: 250px;
    display: flex;
    align-items: self-start;
    justify-content: center;
    padding: 16px 12.75px;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-size: cover ;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
    width: 1280px;
`
export const Title = styled.text`
    font-size: 56px;
    color: white;
`
export const User = styled.text`
    font-size: 16px;
    color: white;
`
