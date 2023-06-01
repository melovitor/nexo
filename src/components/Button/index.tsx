import { ButtonStyle ,Title } from "./style"

type Props = {
    title: string
}

export function Button({title}: Props){
    return(        
        <ButtonStyle onClick={() => {console.log('olabutton')}}>
            <Title>{title}</Title>
        </ButtonStyle>        
    )
}