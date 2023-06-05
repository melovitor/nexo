import React, {useState} from "react";
import { ButtonStyle ,Container,Title } from "./style"
import InIcon from '../../assets/entrada.svg'
import OutIcon from '../../assets/saída.svg'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    status: 'IN' | 'OUT'
}



export function InOutButton({title, status,...rest}: Props){
    const [isActive, setIsActive] = useState('')
    const COLOR = status === 'IN' ?  'rgb(150, 255, 150)': 'rgb(255, 150, 150)'


    return(    
        <Container type={status}  active={isActive} onClick={() => isActive === '' ? setIsActive(COLOR) : setIsActive('')} >
            <ButtonStyle  {...rest}>
                {status === 'IN' ? <img src={InIcon} /> : <img src={OutIcon} /> }
                <Title>{title}</Title>
            </ButtonStyle>      
        </Container>    
    )
}