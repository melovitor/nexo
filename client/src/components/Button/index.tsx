import { ButtonStyle ,Title } from "./style"
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string

}

export function Button({title, ...rest}: Props){
    return(        
        <ButtonStyle {...rest} >
            <Title>{title}</Title>
        </ButtonStyle>        
    )
}