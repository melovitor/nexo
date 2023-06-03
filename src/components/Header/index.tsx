import { Container, Content, Title, User, Wrapper } from "./style";
import {Power} from '@phosphor-icons/react'


export function Header(){
    return(
        <Wrapper>
            <Content>
                <Container>
                    <Title>Nexo</Title>
                    <User> Seja bem Vindo, Vitor!</User>
                </Container>
                <button  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    backgroundColor: 'rgb(255, 50, 50)',
                    borderStyle: 'none',
                    borderRadius: 6,
                    padding: 8,
                    color: 'white',
                    marginTop: 64
                }}><Power size={24} weight="regular" /> Sair </button>
            
            </Content>
        </Wrapper>
        
    )
}