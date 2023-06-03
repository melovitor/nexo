import { Container, SubTitle, Title, Form, Wrapper, Forgot } from "./style"
import Logo from '../../assets/Logo.png'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ShowPasswordButtonIcon } from "../../components/ShowPasswordButtonIcon"
import { TextButton } from "../../components/TextButton"
import { By } from "../../components/By/Index"
import {useState} from 'react'

export function SignIn(){
    const [ showPassword, setShowPassword] = useState(true)

    return(
        <Wrapper>           
            <Container>
                <img src={Logo} style={{    
                    width:200,
                    marginBottom: 24
                }}/>   
            <Title>Acesse a plataforma</Title>
            <SubTitle>Faça login ou crie sua conta para ter controle total de suas despesas e alcançar todos seus objetivos!</SubTitle>
            <Input 
                placeholder="Digite seu e-mail" 
                label="E-mail"
            />
            <Forgot>
                <TextButton reference="Esqueceu sua senha?" onClick={() => {console.log('Esqueci senha')}}/>
            </Forgot>
            <Form>
                <ShowPasswordButtonIcon onClick={() => {showPassword === true ? setShowPassword(false) : setShowPassword(true)}}/>
                <Input placeholder="Digite sua senha" label="Senha" type={showPassword === true ? 'password' : 'normal'}/>
            </Form>
            <Button title="Entrar" onClick={() => {console.log('Entrar')}}/>
            <TextButton content="Ainda não tem uma conta? " reference="Inscreva-se" onClick={() => {console.log('Ir para SignUp')}}/>
            <By />
        </Container>      
        </Wrapper>
        
    )
}