import { Container, TextInput, Description, Label, Direct } from "./style"

type Props = {
    label: string
    placeholder: string
    direct?: string
    type?: string
}

export function Input({label, placeholder, direct, type}: Props){
    function handleDirect(){
        console.log('ola')
    }


    return(
        <Container>
            <Description>
                <Label>{label}</Label>
                <Direct onClick={handleDirect}>{direct}</Direct>
            </Description>
            <TextInput placeholder={placeholder} type={type}/>
        </Container>
    )   
}