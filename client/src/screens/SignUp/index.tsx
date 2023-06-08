import { Container, SubTitle, Title, Form, Wrapper, ByStyle } from "./style"
import Logo from '../../assets/Logo.png'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ShowPasswordButtonIcon } from "../../components/ShowPasswordButtonIcon"
import { TextButton } from "../../components/TextButton"
import { By } from "../../components/By/Index"
import {useState} from 'react'
import Axios from 'axios'
import { useNavigate } from "react-router-dom"

export function SignUp(){
    const [ showPassword, setShowPassword] = useState(true)
    const [ showConfirmPassword, setShowConfirmPassword] = useState(true)

    const [ name, setName] = useState('')
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const [ confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate();

    function handleSignUp(){
        if(!password || !confirmPassword || !email || !name){
            return alert('Todos os campos devem ser preenchidos')
        } else if(password !== confirmPassword){
            return alert('As senhas devem ser iguais!')
        } else if(password.length < 6){
            return alert('As senhas devem conter ao menos 6 digitos!')
        }

        Axios.post("http://localhost:5174/signup", {
            name: name,
            email: email,
            password: password
        }).then((res) => {
            if(res.data.token){
                localStorage.setItem("isAuth", res.data.token)
                navigate('/home')
            } else {
                alert(res.data.msg)
            }
        })
    }

    function handleSignIn(){
        navigate('/signin')

    }

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
                onChange={(e) => {setName(e.target.value)}}
            />
            <Input 
                placeholder="Digite seu e-mail" 
                label="E-mail"
                onChange={(e) => {setEmail(e.target.value)}}
            />
            
            <Form>
                <ShowPasswordButtonIcon onClick={() => {showPassword === true ? setShowPassword(false) : setShowPassword(true)}}/>
                <Input 
                    placeholder="Digite sua senha" 
                    label="Senha" 
                    type={showPassword === true ? 'password' : 'normal'}
                    onChange={(e) => {setPassword(e.target.value)}}
                />
            </Form>
            <Form>
                <ShowPasswordButtonIcon onClick={() => {showConfirmPassword === true ? setShowConfirmPassword(false) : setShowConfirmPassword(true)}}/>
                <Input 
                    placeholder="Confirme sua senha" 
                    label="Confirme sua senha" 
                    type={showConfirmPassword === true ? 'password' : 'normal'}
                    onChange={(e) => {setConfirmPassword(e.target.value)}}
                />
            </Form>
            <Button title="Criar conta" onClick={handleSignUp}/>
            <TextButton content="Já possui uma conta? " reference="Entrar" onClick={handleSignIn}/>
            <ByStyle>
                <By />
            </ByStyle>
        </Container>      
        </Wrapper>
    )
}