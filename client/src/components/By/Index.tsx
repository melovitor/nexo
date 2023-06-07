import Logo from '../../assets/neeweLogoColorido.png'
import { Container, Text } from './style'

export function By(){
    return(
        <Container>
        <Text>Desenvolvido com ❤️ por</Text>
        <img src={Logo} style={{
            width:100,
        }}/>
        <Text> e Vitor de Melo</Text>
        </Container>
    )
}