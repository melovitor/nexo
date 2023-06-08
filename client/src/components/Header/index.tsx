import { Container, Content, Title, User, Wrapper } from "./style";
import {Power} from '@phosphor-icons/react'

type Props = {
    handleLogout: () => void;
    name: string
}

export function Header({handleLogout, name}: Props){   
    return(
        <Wrapper>
            <Content>
                <Container>
                    <Title>nexo</Title>
                    <User> Seja bem Vindo, {name} !</User>
                </Container>
                <button onClick={handleLogout} style={{
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
                    marginTop: 64,
                }}><Power size={24} weight="regular" /> Sair </button>
            
            </Content>
        </Wrapper>
        
    )
}