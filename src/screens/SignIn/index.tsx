import { Container, SubTitle, Title, Form, Wrapper } from "./style"
import Logo from '../../assets/Logo.png'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonIcon } from "../../components/ButtonIcon"
import { TextButton } from "../../components/TextButton"
import { By } from "../../components/By/Index"

export function SignIn(){
    return(
        <Wrapper>           
            <Container>
            <img src={Logo} style={{
                width:200,
                marginBottom: 24
            }}/>   
            <Title>Acesse a plataforma</Title>
            <SubTitle>Faça login ou crie sua conta para ter controle total de suas despesas e alcançar todos seus objetivos!</SubTitle>
            <Input placeholder="Digite seu e-mail" label="E-mail"/>
            <Form>
                <ButtonIcon />
                <Input placeholder="Digite sua senha" label="Senha" direct="Esqueceu sua senha?" type='password'/>
            </Form>
            <Button title="Entrar"/>
            <TextButton content="Ainda não tem uma conta? " reference="Inscreva-se"/>
            <By />
        </Container>      
        </Wrapper>
        
    )
}