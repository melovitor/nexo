import { Container, TextInput, Description, Label } from "./style"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    placeholder: string
    direct?: string
    type?: string
}

export function Input({label, placeholder, type, ...rest}: Props){

    return(
        <Container {...rest}>
            <Description>
                <Label>{label}</Label>
            </Description>
            <TextInput placeholder={placeholder} type={type}/>
        </Container>
    )   
}