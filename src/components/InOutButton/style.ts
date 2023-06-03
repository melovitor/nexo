import styled from "styled-components"


type Props = {
    type: 'IN' | 'OUT';
}

export const ButtonStyle = styled.button`    
    background-color: transparent;
    border-style: none;
    padding: 23px;   
`
export const Title = styled.text`
    color:  rgba(110, 110, 110);
`

export const Container = styled.div<Props>`
    flex: 1;
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(220, 220, 220);    
    border-radius: 6px;
    &:active {
        background-color: ${(Props) => Props.type === 'IN' ? 'rgb(150, 255, 150)' : 'rgb(255, 150, 150)'};
    }
    &:hover {
        background-color: ${(Props) => Props.type === 'IN' ? 'rgb(150, 255, 150)' : 'rgb(255, 150, 150)'};
    }

`