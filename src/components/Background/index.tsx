import { Container } from "./style"
import finance from '../../assets/finance.jpg'

export function Background(){
    return(
        <Container>
            <img src={finance}/>
        </Container>
    )
}