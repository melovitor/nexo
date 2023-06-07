import { Container, SubTitle, Title, Form, Wrapper, Forgot } from "./style"
import Logo from '../../assets/Logo.png'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ShowPasswordButtonIcon } from "../../components/ShowPasswordButtonIcon"
import { TextButton } from "../../components/TextButton"
import { By } from "../../components/By/Index"
import {useState} from 'react'
import Axios from 'axios'
import { useNavigate } from "react-router-dom"

export function SignIn(){
    
    const [ showPassword, setShowPassword] = useState(true)
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const navigate = useNavigate();
    

    function handleSignIn(){
        if(!password || !email){
            return alert('Todos os campos devem ser preenchidos')
        }
        Axios.post("http://localhost:5174/signin", {
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

    function handleSignUp(){
        navigate('/signup')

    }
    

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
                onChange={(e) => {setEmail(e.target.value)}}
            />
            <Forgot>
                <TextButton reference="Esqueceu sua senha?" onClick={() => {console.log('Esqueci senha')}}/>
            </Forgot>
            <Form>
                <ShowPasswordButtonIcon onClick={() => {showPassword === true ? setShowPassword(false) : setShowPassword(true)}}/>
                <Input 
                    placeholder="Digite sua senha" 
                    label="Senha" 
                    type={showPassword === true ? 'password' : 'normal'} 
                    onChange={(e) => {setPassword(e.target.value)}}/>
            </Form>
            <Button title="Entrar" onClick={handleSignIn}/>
            <TextButton content="Ainda não tem uma conta? " reference="Inscreva-se" onClick={handleSignUp}/>
            <By />
        </Container>      
        </Wrapper>
        
    )
}