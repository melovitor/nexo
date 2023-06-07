import { Container, Icon } from "./style"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}


export function ButtonIcon({...rest }: Props){
    return(        
        <Container {...rest}>
            <Icon size={24}/>
        </Container>        
    )
}