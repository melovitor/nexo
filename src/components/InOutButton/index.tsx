import { ButtonStyle ,Container,Title } from "./style"
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    status: 'IN' | 'OUT'

}



export function InOutButton({title, status,...rest}: Props){
    return(    
        <Container  type={status}>
            <ButtonStyle {...rest} >
                <Title>{title}</Title>
            </ButtonStyle>        
        </Container>    
    )
}