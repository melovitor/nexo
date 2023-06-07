import { Container, Icon } from "./style"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function ShowPasswordButtonIcon({...rest }: Props){
    return(        
        <Container {...rest}>
            <Icon size={24}/>
        </Container>        
    )
}