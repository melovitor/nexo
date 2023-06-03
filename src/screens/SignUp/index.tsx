import { Container, SubTitle, Title, Form, Wrapper, ByStyle } from "./style"
import Logo from '../../assets/Logo.png'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ShowPasswordButtonIcon } from "../../components/ShowPasswordButtonIcon"
import { TextButton } from "../../components/TextButton"
import { By } from "../../components/By/Index"
import {useState} from 'react'

export function SignUp(){
    const [ showPassword, setShowPassword] = useState(true)
    const [ showConfirmPassword, setShowConfirmPassword] = useState(true)

    return(
        <Wrapper>           
            <Container>
                <img src={Logo} style={{    
                    width:200,
                    marginBottom: 24
                }}/>   
            <Title>Realize seu cadastro</Title>
            <SubTitle>Crie sua conta para ter controle total de suas despesas e alcançar todos os seus objetivos!</SubTitle>
            <Input 
                placeholder="Digite seu nome completo" 
                label="Nome completo"
            />
            <Input 
                placeholder="Digite seu e-mail" 
                label="E-mail"
            />
            
            <Form>
                <ShowPasswordButtonIcon onClick={() => {showPassword === true ? setShowPassword(false) : setShowPassword(true)}}/>
                <Input placeholder="Digite sua senha" label="Senha" type={showPassword === true ? 'password' : 'normal'}/>
            </Form>
            <Form>
                <ShowPasswordButtonIcon onClick={() => {showConfirmPassword === true ? setShowConfirmPassword(false) : setShowConfirmPassword(true)}}/>
                <Input placeholder="Confirme sua senha" label="Confirme sua senha" type={showConfirmPassword === true ? 'password' : 'normal'}/>
            </Form>
            <Button title="Criar conta" onClick={() => {console.log('Entrar')}}/>
            <TextButton content="Já possui uma conta? " reference="Entrar" onClick={() => {console.log('Ir para SignUp')}}/>
            <ByStyle>
                <By />
            </ByStyle>
        </Container>      
        </Wrapper>
    )
}