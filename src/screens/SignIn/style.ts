import styled from 'styled-components'
import financeImg from '../../assets/finance.jpg'


export const Wrapper = styled.div`
    z-index: 0;
    flex: 1;
    width: 100%;
    background-image:  url(${financeImg});
    background-size: contain;
    background-position: 400px;
`
export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: rgb(250,250,250);
    padding: 60px;
    width: 50%;    
    max-width: 550px;    
    z-index: 1;
    position: relative;
`

export const Form = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end; 
    align-items: center;
    border-radius: 6px;

`

export const Title = styled.text`
    color: #000;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 16px;
`
export const SubTitle = styled.text`
    color: #000;
    font-size: px;
    margin-bottom: 40px;
`