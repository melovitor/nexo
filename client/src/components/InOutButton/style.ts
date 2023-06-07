import styled from "styled-components"

type Props = {
    type: 'IN' | 'OUT';
    active?: string | null
}


export const ButtonStyle = styled.button`    
    background-color: transparent;
    border-style: none;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px
`
export const Title = styled.text`
    color:  rgba(110, 110, 110);
    font-size: 16px;
`

export const Container = styled.div<Props>`  
    flex: 1;
    width: 100%;
    height: 72px;
    background-color:${(Props) => Props.active ? Props.active  : 'rgba(220, 220, 220)'};      
    border-radius: 6px;
    &:active {
        background-color: ${(Props) => Props.type === 'IN' ? 'rgb(150, 255, 150)' : 'rgb(255, 150, 150)'};
    }

`