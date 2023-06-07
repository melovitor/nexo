import styled from "styled-components";

type Props = {
    status: number
}

export const Wrapper = styled.div<Props>`
    width: 385px;
    height: 180px;
    background-color: ${(props) => props.status === 3 ? 'rgb(44, 200, 100)' : 'white'};
    border-radius: 6px;
    margin-top: -80px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 32px;
    box-sizing: border-box;
`

export const Header = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 24px;
`

export const Title = styled.text<Props>`
    color:  ${(props) => props.status === 3 ? 'white' :'rgb(44, 159, 228)'};
    font-size: 16px;
`

export const Quantity = styled.text<Props>`
    color: ${(props) => props.status === 3 ? 'white' :'black'};
    font-size: 32px;
`